import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { rootMetadata, viewport, DEFAULT_TITLE } from "../lib/seo.ts";
import { SITE_URL } from "../lib/site.ts";
import sitemap from "../app/sitemap.ts";
import robots from "../app/robots.ts";
import manifest from "../app/manifest.ts";
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
    assert.ok(line.startsWith("https://x.example"));
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
