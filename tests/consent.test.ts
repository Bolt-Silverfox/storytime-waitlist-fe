import { test, mock, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

type Call = { fn: string; args: unknown[] };
const calls: Call[] = [];
const record =
  (fn: string) =>
  (...args: unknown[]) => {
    calls.push({ fn, args });
  };

class FakeIdentify {
  set() {
    return this;
  }
}

mock.module("@amplitude/analytics-browser", {
  namedExports: {
    init: record("init"),
    track: record("track"),
    identify: record("identify"),
    setUserId: record("setUserId"),
    setOptOut: record("setOptOut"),
    Identify: FakeIdentify,
    Types: { LogLevel: { None: 0, Warn: 2 } },
  },
});

type Cookie = { name: string; value: string; raw: string };
let jar: Cookie[] = [];
const cookieWrites: string[] = [];
type FakeScript = { src: string; async: boolean; id: string };
const injected: FakeScript[] = [];

const fakeDocument = {
  get cookie() {
    return jar.map((c) => `${c.name}=${c.value}`).join("; ");
  },
  set cookie(raw: string) {
    cookieWrites.push(raw);
    const [pair, ...attrs] = raw.split(";").map((p) => p.trim());
    const eq = pair.indexOf("=");
    const name = pair.slice(0, eq);
    const value = pair.slice(eq + 1);
    const expires = attrs.find((a) => a.toLowerCase().startsWith("expires="));
    const maxAge = attrs.find((a) => a.toLowerCase().startsWith("max-age="));
    const expired =
      (expires && new Date(expires.slice(8)).getTime() <= Date.now()) ||
      (maxAge && Number(maxAge.slice(8)) <= 0);
    jar = jar.filter((c) => c.name !== name);
    if (!expired) jar.push({ name, value, raw });
  },
  createElement: () => ({ src: "", async: false, id: "" }) as FakeScript,
  head: { appendChild: (s: FakeScript) => injected.push(s) },
  getElementsByTagName: () => [
    { parentNode: { insertBefore: (s: FakeScript) => injected.push(s) } },
  ],
  getElementById: (id: string) => injected.find((s) => s.id === id) ?? null,
};
Object.defineProperty(globalThis, "document", {
  configurable: true,
  value: fakeDocument,
});
const fakeWindow: Record<string, unknown> = {
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
};
Object.defineProperty(globalThis, "window", {
  configurable: true,
  value: fakeWindow,
});
Object.defineProperty(globalThis, "location", {
  configurable: true,
  value: { hostname: "waitlist.storytimeapp.me", protocol: "https:" },
});
const store = new Map<string, string>();
Object.defineProperty(globalThis, "localStorage", {
  configurable: true,
  value: {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
    key: (i: number) => [...store.keys()][i] ?? null,
    get length() {
      return store.size;
    },
  },
});

const consent = await import("../lib/consent.ts");
const analytics = await import("../lib/analytics.ts");
const trackers = await import("../lib/trackers.ts");

beforeEach(() => {
  calls.length = 0;
  cookieWrites.length = 0;
  injected.length = 0;
  jar = [];
  store.clear();
  for (const k of Object.keys(fakeWindow)) {
    if (k === "fbq" || k === "_fbq") delete fakeWindow[k];
  }
});

const sentToAmplitude = () =>
  calls.filter((c) => ["init", "track", "identify", "setUserId"].includes(c.fn));

const runAllAnalytics = () => {
  analytics.initializeAnalytics();
  analytics.trackEvent("X", { a: 1 });
  analytics.trackPageView("/about", "About");
  analytics.setUserProperties({ a: 1 });
  analytics.trackWaitlistSignup();
  analytics.trackCTAClick("Download", "Nav");
};

test("no stored choice reads as null and Amplitude stays off", () => {
  assert.equal(consent.getConsent(), null);
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
});

test("rejecting keeps Amplitude off", () => {
  consent.setConsent("denied");
  assert.equal(consent.getConsent(), "denied");
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
});

test("accepting lets Amplitude init and track", () => {
  consent.setConsent("granted");
  runAllAnalytics();
  assert.equal(calls.filter((c) => c.fn === "init").length, 1);
  assert.ok(calls.some((c) => c.fn === "track"));
});

test("an unrecognised stored value counts as no choice", () => {
  jar = [{ name: "st_consent", value: "yes", raw: "st_consent=yes" }];
  assert.equal(consent.getConsent(), null);
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
});

test("the choice is stored in a first-party cookie that expires in about six months", () => {
  consent.setConsent("granted");
  const written = cookieWrites.find((w) => w.startsWith("st_consent="));
  assert.ok(written, "cookie written");
  assert.match(written, /st_consent=granted/);
  assert.match(written, /path=\//i);
  assert.match(written, /samesite=lax/i);
  assert.match(written, /secure/i);
  const maxAge = Number(/max-age=(\d+)/i.exec(written)?.[1]);
  assert.ok(maxAge >= 150 * 86400 && maxAge <= 190 * 86400, `max-age ${maxAge}`);
  assert.doesNotMatch(written, /domain=/i);
});

test("the stored choice survives a fresh read and can be changed", () => {
  consent.setConsent("denied");
  assert.equal(consent.getConsent(), "denied");
  consent.setConsent("granted");
  assert.equal(consent.getConsent(), "granted");
});

test("withdrawing opts Amplitude out, clears its identifiers and stops tracking", () => {
  consent.setConsent("granted");
  analytics.initializeAnalytics();
  assert.ok(store.has("st_anon_id"));
  jar.push({ name: "AMP_abc", value: "x", raw: "AMP_abc=x" });
  store.set("AMP_unsent_abc", "[]");
  calls.length = 0;

  consent.setConsent("denied");
  trackers.withdrawTrackers();

  assert.ok(calls.some((c) => c.fn === "setOptOut" && c.args[0] === true));
  assert.ok(!store.has("st_anon_id"));
  assert.ok(!store.has("AMP_unsent_abc"));
  assert.ok(!jar.some((c) => c.name === "AMP_abc"));
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
});

test("withdrawing clears Meta Pixel and Contentsquare cookies but not unrelated ones", () => {
  jar = [
    { name: "_fbp", value: "1", raw: "" },
    { name: "_fbc", value: "1", raw: "" },
    { name: "_cs_id", value: "1", raw: "" },
    { name: "_cs_s", value: "1", raw: "" },
    { name: "st_consent", value: "denied", raw: "" },
    { name: "other", value: "1", raw: "" },
  ];
  trackers.withdrawTrackers();
  assert.deepEqual(jar.map((c) => c.name).sort(), ["other", "st_consent"]);
});

test("Meta Pixel does not load without consent", () => {
  trackers.loadMetaPixel("123456789");
  assert.deepEqual(injected, []);
  assert.equal(fakeWindow.fbq, undefined);
  consent.setConsent("denied");
  trackers.loadMetaPixel("123456789");
  assert.deepEqual(injected, []);
  assert.equal(fakeWindow.fbq, undefined);
});

test("Meta Pixel loads once after consent, with the configured id", () => {
  consent.setConsent("granted");
  trackers.loadMetaPixel("123456789");
  trackers.loadMetaPixel("123456789");
  assert.equal(injected.length, 1);
  assert.equal(injected[0].src, "https://connect.facebook.net/en_US/fbevents.js");
  const queued = (fakeWindow.fbq as { queue: unknown[] }).queue.map((a) =>
    [...(a as unknown[])].join(":"),
  );
  assert.deepEqual(queued, [
    "set:autoConfig:false:123456789",
    "init:123456789",
    "track:PageView",
  ]);
});

test("Meta Pixel refuses a non-numeric id even with consent", () => {
  consent.setConsent("granted");
  trackers.loadMetaPixel("1');alert(1);//");
  assert.deepEqual(injected, []);
});

test("Contentsquare does not load without consent or after rejecting", () => {
  trackers.loadContentsquare();
  consent.setConsent("denied");
  trackers.loadContentsquare();
  assert.deepEqual(injected, []);
});

test("Contentsquare loads once after consent", () => {
  consent.setConsent("granted");
  trackers.loadContentsquare();
  trackers.loadContentsquare();
  assert.equal(injected.length, 1);
  assert.equal(injected[0].src, "https://t.contentsquare.net/uxa/3c5a706e6e6fd.js");
  assert.equal(injected[0].async, true);
});

const read = (p: string) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");

test("the layout no longer hard-codes the Contentsquare tag or the Meta Pixel noscript image", () => {
  assert.doesNotMatch(read("app/layout.tsx"), /contentsquare\.net/i);
  assert.doesNotMatch(read("components/MetaPixel.tsx"), /noscript|facebook\.com\/tr/);
  assert.doesNotMatch(read("components/MetaPixel.tsx"), /connect\.facebook\.net/);
});

test("trackers are only started from a granted state", () => {
  const pixel = read("components/MetaPixel.tsx");
  assert.match(pixel, /useConsent\(\)/);
  assert.match(pixel, /consent !== "granted"|consent === "granted"/);
  assert.match(read("app/layout.tsx"), /ConsentBanner/);
});

test("the footer has a control that reopens the choice", () => {
  assert.match(read("components/shared/Footer.tsx"), /openConsentPreferences/);
  assert.match(read("components/shared/Footer.tsx"), /Cookie settings/);
});

test("Accept and Reject buttons share identical styling", () => {
  const banner = read("components/consent/ConsentBanner.tsx");
  assert.match(banner, /const choiceButtonClass =/);
  const uses = banner.match(/className=\{choiceButtonClass\}/g) ?? [];
  assert.equal(uses.length, 2);
  assert.match(banner, /Accept/);
  assert.match(banner, /Reject/);
});

test("the banner is an accessible dialog and the form needs no consent", () => {
  const banner = read("components/consent/ConsentBanner.tsx");
  assert.match(banner, /role="dialog"/);
  assert.match(banner, /aria-labelledby/);
  assert.match(banner, /Escape/);
  assert.match(banner, /\.focus\(\)/);
  assert.doesNotMatch(read("components/JoinEarlyModal.tsx"), /consent/i);
});
