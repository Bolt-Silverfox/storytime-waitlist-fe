import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
delete process.env.NEXT_PUBLIC_SITE_URL;
const { rootMetadata, viewport, DEFAULT_TITLE, notFoundMetadata, resourceMetadata } =
  await import("../lib/seo.ts");
const { SITE_URL } = await import("../lib/site.ts");
const { default: sitemap } = await import("../app/sitemap.ts");
const { default: robots } = await import("../app/robots.ts");
const { default: manifest } = await import("../app/manifest.ts");
import { resourcesData } from "../data.ts";
import { resolveAbsoluteUrlWithPathname } from "next/dist/lib/metadata/resolvers/resolve-url.js";
import { execFileSync } from "node:child_process";

const REAL_HOST = "https://waitlist.storytimeapp.me";

test("site url is the real waitlist host", () => {
  assert.equal(SITE_URL, REAL_HOST);
});

test("metadata, robots, sitemap and manifest never mention storytime.app", () => {
  const output = JSON.stringify({
    rootMetadata,
    sitemap: sitemap(),
    robots: robots(),
    manifest: manifest(),
  });
  assert.doesNotMatch(output, /storytime\.app/);
});

const resolveFor = (value: unknown, pathname: string) =>
  resolveAbsoluteUrlWithPathname(
    value as string,
    rootMetadata.metadataBase as URL,
    pathname,
    { trailingSlash: false, isStaticMetadataRouteFile: false },
  );

test("canonical and og:url resolve to each page's own URL, not the homepage", () => {
  assert.equal(String(rootMetadata.metadataBase), `${REAL_HOST}/`);
  for (const value of [
    rootMetadata.alternates?.canonical,
    rootMetadata.openGraph?.url,
  ]) {
    assert.equal(resolveFor(value, "/"), REAL_HOST);
    assert.equal(resolveFor(value, "/waitlist"), `${REAL_HOST}/waitlist`);
    assert.equal(
      resolveFor(value, "/resources/3"),
      `${REAL_HOST}/resources/3`,
    );
  }
});

test("og:image and twitter:image are the same real file", () => {
  const og = rootMetadata.openGraph?.images as { url: string }[];
  const tw = rootMetadata.twitter?.images as string[];
  assert.equal(og[0].url, tw[0]);
  assert.ok(readFileSync(new URL(`../public${tw[0]}`, import.meta.url)).length > 0);
});

test("homepage title matches og:title", () => {
  assert.equal(rootMetadata.openGraph?.title, DEFAULT_TITLE);
  assert.equal(DEFAULT_TITLE, "Storytime | Interactive Stories for Kids");
  const home = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(home, /title: DEFAULT_TITLE/);
});

test("robots points at the real sitemap and sitemap urls are on the real host", () => {
  assert.equal(robots().sitemap, `${REAL_HOST}/sitemap.xml`);
  for (const entry of sitemap()) {
    assert.equal(new URL(entry.url).origin, REAL_HOST);
  }
});

test("manifest and viewport carry theme colour and 192/512 icons", () => {
  assert.ok(viewport.themeColor);
  const sizes = (manifest().icons ?? []).map((i) => i.sizes);
  assert.ok(sizes.includes("192x192") && sizes.includes("512x512"));
});

const sitemapPaths = () =>
  sitemap().map((e) => {
    const url = new URL(e.url);
    assert.equal(url.origin, REAL_HOST);
    return url.pathname;
  });

test("sitemap lists the public pages once, without double slashes", () => {
  const paths = sitemapPaths();
  for (const required of [
    "/",
    "/about",
    "/waitlist",
    "/squeeze",
    "/resources",
    "/download",
    "/privacy-policy",
  ]) {
    assert.ok(paths.includes(required), required);
  }
  for (const resource of resourcesData) {
    assert.ok(paths.includes(`/resources/${resource.id}`), String(resource.id));
  }
  assert.equal(new Set(paths).size, paths.length);
  for (const entry of sitemap()) {
    assert.doesNotMatch(entry.url.replace("https://", ""), /\/\//);
  }
});

test("a trailing slash on NEXT_PUBLIC_SITE_URL does not produce // in urls", () => {
  const out = execFileSync(
    process.execPath,
    [
      "--input-type=module",
      "-e",
      'import s from "./app/sitemap.ts"; console.log(s().map(e=>e.url).join("\\n"))',
    ],
    {
      env: { ...process.env, NEXT_PUBLIC_SITE_URL: "https://x.example///" },
      cwd: new URL("..", import.meta.url),
      encoding: "utf8",
    },
  );
  for (const line of out.trim().split("\n")) {
    assert.doesNotMatch(line.replace("https://", ""), /\/\//);
    assert.equal(new URL(line).origin, "https://x.example");
  }
});

test("manifest keeps a maskable 512 icon and its file exists", () => {
  const maskable = (manifest().icons ?? []).find(
    (i) => i.purpose === "maskable",
  );
  assert.ok(maskable);
  assert.equal(maskable.sizes, "512x512");
  assert.ok(
    readFileSync(new URL(`../public${maskable.src}`, import.meta.url)).length >
      0,
  );
});

test("every signup form links to the privacy policy", () => {
  for (const file of [
    "components/waitlist/WaitListForm.tsx",
    "components/JoinEarlyModal.tsx",
    "components/ContactUs.tsx",
    "components/resources/ResourceSignUp.tsx",
  ]) {
    const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    assert.match(source, /href="\/privacy-policy"/, file);
  }
});

const runWithEnv = (env: Record<string, string>, code: string) =>
  execFileSync(process.execPath, ["--input-type=module", "-e", code], {
    env: { ...process.env, ...env },
    cwd: new URL("..", import.meta.url),
    encoding: "utf8",
  }).trim();

const runWithSiteUrl = (siteUrl: string, code: string) =>
  runWithEnv({ NEXT_PUBLIC_SITE_URL: siteUrl }, code);

test("a path in NEXT_PUBLIC_SITE_URL is reduced to the origin", () => {
  const out = runWithSiteUrl(
    "https://x.example/staging/app/",
    'import { SITE_URL } from "./lib/site.ts"; console.log(SITE_URL)',
  );
  assert.equal(out, "https://x.example");
});

test("an invalid NEXT_PUBLIC_SITE_URL falls back to the real host", () => {
  const out = runWithSiteUrl(
    "not a url",
    'import { SITE_URL } from "./lib/site.ts"; console.log(SITE_URL)',
  );
  assert.equal(out, REAL_HOST);
});

test("production robots allow crawling and advertise the sitemap", () => {
  const rules = robots().rules as { allow?: string; disallow?: string[] };
  assert.equal(rules.allow, "/");
  assert.ok(robots().sitemap);
});

test("a deployment flagged NEXT_PUBLIC_NOINDEX is closed to crawlers and has no sitemap", () => {
  const out = JSON.parse(
    runWithEnv(
      { NEXT_PUBLIC_SITE_URL: "https://staging.example", NEXT_PUBLIC_NOINDEX: "true" },
      'import r from "./app/robots.ts"; import { rootMetadata } from "./lib/seo.ts"; console.log(JSON.stringify({ r: r(), robots: rootMetadata.robots }))',
    ),
  );
  assert.equal(out.r.rules.disallow, "/");
  assert.equal(out.r.sitemap, undefined);
  assert.equal(out.robots.index, false);
});

test("production root metadata does not set noindex", () => {
  assert.equal(rootMetadata.robots, undefined);
});

test("the 404 page has its own title", () => {
  assert.ok(notFoundMetadata.title);
  assert.notEqual(notFoundMetadata.title, DEFAULT_TITLE);
});

test("resource metadata sets the open graph and twitter title to the article", () => {
  const meta = resourceMetadata("Bedtime tips", "Sleep well");
  assert.equal(meta.openGraph?.title, "Bedtime tips | Resources | Storytime");
  assert.equal(meta.openGraph?.description, "Sleep well");
  assert.equal((meta.openGraph as { siteName?: string }).siteName, "Storytime");
  assert.equal(meta.twitter?.title, "Bedtime tips | Resources | Storytime");
});

test("a scheme-less or non-http NEXT_PUBLIC_SITE_URL falls back to the real host", () => {
  for (const value of ["localhost:3000", "ftp://x.example", "javascript:alert(1)"]) {
    const out = runWithSiteUrl(
      value,
      'import { SITE_URL } from "./lib/site.ts"; import "./lib/seo.ts"; console.log(SITE_URL)',
    );
    assert.equal(out, REAL_HOST, value);
  }
});

test("a production deployment on another custom origin stays indexable", () => {
  const out = JSON.parse(
    runWithSiteUrl(
      "https://www.storytimeapp.me",
      'import r from "./app/robots.ts"; import { rootMetadata } from "./lib/seo.ts"; console.log(JSON.stringify({ r: r(), robots: rootMetadata.robots ?? null }))',
    ),
  );
  assert.equal(out.r.rules.allow, "/");
  assert.ok(out.r.sitemap);
  assert.equal(out.robots, null);
});
