import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { rootMetadata, viewport, DEFAULT_TITLE } from "../lib/seo.ts";
import { SITE_URL } from "../lib/site.ts";
import sitemap from "../app/sitemap.ts";
import robots from "../app/robots.ts";
import manifest from "../app/manifest.ts";

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

test("canonical, og:url and metadataBase use the real host", () => {
  assert.equal(String(rootMetadata.metadataBase), `${REAL_HOST}/`);
  assert.equal(rootMetadata.openGraph?.url, REAL_HOST);
  assert.equal(rootMetadata.alternates?.canonical, REAL_HOST);
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
    assert.ok(entry.url.startsWith(REAL_HOST));
  }
});

test("manifest and viewport carry theme colour and 192/512 icons", () => {
  assert.ok(viewport.themeColor);
  const sizes = (manifest().icons ?? []).map((i) => i.sizes);
  assert.ok(sizes.includes("192x192") && sizes.includes("512x512"));
});
