# syntax=docker/dockerfile:1.7
#
# storytime-waitlist-fe ("waitlist-web") production image.
#
# Target host: single t4g.small (arm64/Graviton, 2 GiB) in eu-west-1, every
# service in Docker behind Caddy. Caddy terminates TLS and reverse-proxies to
# this container on port 4500. Build with:
#
#   docker buildx build --platform linux/arm64 \
#     --build-arg NEXT_PUBLIC_SERVER_URL=https://api.waitlist.storytimeapp.me/api/v1 \
#     -t storytime-waitlist-web:prod .
#
# Package manager is pnpm, NOT npm: the committed package-lock.json is stale
# (it predates the @sentry/nextjs dependency, so `npm ci` aborts with
# "Missing: @sentry/nextjs@... from lock file"). pnpm-lock.yaml is the lockfile
# CI installs from (.github/workflows/deploy-frontend*.yml, pnpm 9 / Node 22).
# Node is pinned to 24 by platform decision. Note this DISAGREES with CI, which
# pins Node 22 in .github/workflows/deploy-frontend.yml and deploy-frontend-dev.yml
# (and Node 20 in security.yml); the repo itself declares nothing -- no engines
# field, no .nvmrc, no .node-version. Next 16 supports Node >= 20.9.

ARG NODE_VERSION=24.21.0
ARG PNPM_VERSION=9.15.9
ARG ALPINE_VERSION=3.23

# ---------------------------------------------------------------------------
# deps: production + dev dependencies, resolved for the *target* architecture.
# ---------------------------------------------------------------------------
# Dev deps are installed here and must survive into the builder stage: the
# Next config is ESM JS but Next itself loads TypeScript-aware tooling, eslint
# and @tailwindcss/postcss during `next build` (a TypeScript next.config would
# hard-require the `typescript` package to even be parsed). Pruning to prod
# deps before the build is what breaks these images.
#
# sharp's native binaries (@img/sharp-*) must be resolved inside a container of
# the target architecture. Never copy a node_modules tree in from the host or
# from another --platform: the arm64 image would get x64/darwin .node files.
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS deps
ARG PNPM_VERSION
RUN npm install --global "pnpm@${PNPM_VERSION}"
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# --ignore-scripts mirrors CI (supply-chain hardening). sharp 0.34 ships
# prebuilt platform packages, so it needs no install script.
RUN pnpm install --frozen-lockfile --ignore-scripts

# ---------------------------------------------------------------------------
# builder: `next build` -> .next/standalone
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS builder
ARG PNPM_VERSION
RUN npm install --global "pnpm@${PNPM_VERSION}"
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* values are INLINED INTO THE JS BUNDLE BY `next build`. They are
# build inputs, not runtime configuration: passing them as `docker run -e` has
# no effect at all, the browser bundle keeps whatever string was baked in (or
# an empty string). Hence ARG, not ENV-at-runtime.
#
# CONSEQUENCE: ONE IMAGE PER ENVIRONMENT. A dev image and a prod image are
# different builds, not the same image with different env; tag them distinctly
# and never promote a dev-built image to prod.
#
# Required (no usable fallback in the code):
#   NEXT_PUBLIC_SERVER_URL       constants.ts:1 -- falls back to "" which turns
#                                every waitlist API call into a relative-path
#                                404, silently. Guarded below.
# Optional (code has a committed default or degrades cleanly):
#   NEXT_PUBLIC_SENTRY_DSN       instrumentation-client.ts:11 -- committed
#                                default DSN, only override to retarget Sentry.
#   NEXT_PUBLIC_SENTRY_ENVIRONMENT instrumentation-client.ts:14 -- defaults to
#                                NODE_ENV ("production" here).
#   NEXT_PUBLIC_META_PIXEL_ID    components/MetaPixel.tsx:7, lib/meta-pixel.ts:3
#                                -- unset means the pixel simply does not load.

# Declared as ARG with NO matching `ENV FOO=${FOO}` line, deliberately.
# Docker already exposes a build arg to every RUN in the stage as an ordinary
# environment variable, so `next build` sees these without any help. Adding the
# ENV line would only change the UNSET case: it materialises an unpassed arg as
# an EMPTY STRING instead of leaving it absent. Verified on this base image:
# with the arg passed, RUN sees its value; with it unpassed and no ENV line,
# `typeof process.env.X === "undefined"` and the key is not in process.env.
#
# That distinction is load-bearing. instrumentation-client.ts falls back with
# `??`, which only tests null/undefined, so an empty string WINS over the
# committed default -- an unpassed NEXT_PUBLIC_SENTRY_DSN would inline
# `dsn: ""` and silently disable Sentry. Leaving the arg absent lets the code
# default apply. (NEXT_PUBLIC_SERVER_URL uses `||` and META_PIXEL_ID a
# truthiness test, so those two behave the same either way; the ENV line is
# omitted for all of them so the rule is uniform and nobody has to remember
# which fallback operator each call site happens to use.)
ARG NEXT_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_SENTRY_DSN
ARG NEXT_PUBLIC_SENTRY_ENVIRONMENT
ARG NEXT_PUBLIC_META_PIXEL_ID
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_ENV=production

RUN if [ -z "${NEXT_PUBLIC_SERVER_URL}" ]; then \
      echo "ERROR: --build-arg NEXT_PUBLIC_SERVER_URL=... is required; it is inlined at build time and cannot be supplied at runtime." >&2; \
      exit 1; \
    fi

# next.config.mjs already sets output: "standalone", so this emits a
# self-contained .next/standalone (server.js + the traced subset of
# node_modules). The build is offline-safe: no next/font/google imports, no
# generateStaticParams, and the page data comes from the committed data.ts
# (lib/sanity.ts exists but no route fetches from it at build time).
RUN pnpm build

# ---------------------------------------------------------------------------
# runner
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS runner
WORKDIR /app

# HOSTNAME: pinned rather than load-bearing. The server.js that Next 16.2.10
# generates for standalone output already reads
# `const hostname = process.env.HOSTNAME || '0.0.0.0'` (next/dist/build/
# utils.js, the standalone server template). Setting it explicitly guards
# against that default changing across a Next upgrade, and against anyone
# setting HOSTNAME=localhost -- which would bind only loopback inside the
# container's netns and give Caddy connection refused on every proxied
# request.
#
# NODE_OPTIONS --max-old-space-size: NOT redundant with the container memory
# limit. V8 sizes its old-space heap from the *host* memory it can see, not
# from the cgroup limit: measured on this platform, a Node container capped at
# 160m/192m/224m/512m reported the same v8 heap_size_limit either way, i.e.
# V8 happily grows past the cgroup cap and the kernel OOM-kills the process
# instead of V8 running a GC. Setting the flag to ~75% of the container cap
# keeps GC pressure inside the cap. The 144 baked here was sized for a planned
# 192 MiB budget, which measurement then disproved:
#
#   cap 176 MiB -> kernel OOM-killed the container after 25 page loads
#   cap 224 MiB -> survived, but sat at 212 MiB (95% of cap)
#   cap 256 MiB -> 174 MiB (68% of cap)
#
# The production cap is therefore 256 MiB, and the deployment overrides
# NODE_OPTIONS to --max-old-space-size=192 to match it. Do NOT tidy the cap
# back down: 176 is a confirmed OOM and 224 has no headroom. If the budget
# changes again, override NODE_OPTIONS at run time alongside it.
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=4500 \
    HOSTNAME=0.0.0.0 \
    NODE_OPTIONS=--max-old-space-size=144

# Run as a non-root, unprivileged user. node:alpine already ships uid/gid 1000
# as "node"; use a distinct account so nothing inherits the image's default.
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 --ingroup nodejs nextjs

# The standalone output deliberately does NOT include public/ or .next/static;
# they have to be copied alongside it (same as the existing deploy workflow's
# "Prepare standalone deployment" step).
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 4500

# There is no dedicated health route in this app (app/ contains only page.tsx
# files, no route handlers), so the check hits "/", the statically prerendered
# landing page -- the cheapest route that still proves the server is serving.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||4500)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
