import { test, mock, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const SENTINEL_EMAIL = "sentinel.parent@example.test";
const SENTINEL_NAME = "Sentinel Parent";

type Call = { fn: string; args: unknown[] };
const calls: Call[] = [];
const record =
  (fn: string) =>
  (...args: unknown[]) => {
    calls.push({ fn, args });
  };

class FakeIdentify {
  props: Record<string, unknown> = {};
  set(key: string, value: unknown) {
    this.props[key] = value;
    return this;
  }
}

mock.module("@amplitude/analytics-browser", {
  namedExports: {
    init: record("init"),
    track: record("track"),
    identify: record("identify"),
    setUserId: record("setUserId"),
    Identify: FakeIdentify,
    Types: { LogLevel: { None: 0, Warn: 2 } },
  },
});

type Cookie = { name: string; value: string; domain: string | null };
let jar: Cookie[] = [];
const normalizeDomain = (d: string | null) => (d ? d.replace(/^\./, "") : null);

Object.defineProperty(globalThis, "location", {
  configurable: true,
  value: { hostname: "waitlist.storytimeapp.me" },
});
Object.defineProperty(globalThis, "document", {
  configurable: true,
  value: {
    get cookie() {
      return jar.map((c) => `${c.name}=${c.value}`).join("; ");
    },
    set cookie(raw: string) {
      const [pair, ...attrs] = raw.split(";").map((p) => p.trim());
      const eq = pair.indexOf("=");
      const name = pair.slice(0, eq);
      const value = pair.slice(eq + 1);
      const attr = (k: string) =>
        attrs.find((a) => a.toLowerCase().startsWith(`${k}=`))?.slice(k.length + 1) ??
        null;
      const domain = attr("domain");
      const expires = attr("expires");
      const maxAge = attr("max-age");
      const expired =
        (expires !== null && new Date(expires).getTime() <= Date.now()) ||
        (maxAge !== null && Number(maxAge) <= 0);
      jar = jar.filter(
        (c) =>
          !(c.name === name && normalizeDomain(c.domain) === normalizeDomain(domain)),
      );
      if (!expired) jar.push({ name, value, domain });
    },
  },
});

const store = new Map<string, string>();
let storageBroken = false;
Object.defineProperty(globalThis, "localStorage", {
  configurable: true,
  value: {
    getItem: (k: string) => {
      if (storageBroken) throw new Error("denied");
      return store.get(k) ?? null;
    },
    setItem: (k: string, v: string) => {
      if (storageBroken) throw new Error("denied");
      store.set(k, v);
    },
    removeItem: (k: string) => {
      store.delete(k);
    },
    key: (i: number) => [...store.keys()][i] ?? null,
    get length() {
      return store.size;
    },
  },
});

const analytics = await import("../lib/analytics.ts");

beforeEach(() => {
  calls.length = 0;
  store.clear();
  jar = [];
  storageBroken = false;
});

const everythingSent = () => JSON.stringify(calls);

test("signup flow never sends the email or name to Amplitude", () => {
  analytics.initializeAnalytics();
  analytics.trackWaitlistFormViewed();
  (analytics.trackWaitlistSignup as (...a: unknown[]) => void)(
    SENTINEL_NAME,
    SENTINEL_EMAIL,
  );
  (analytics.trackWaitlistSignupError as (...a: unknown[]) => void)("failed");
  analytics.trackCTAClick("Download", "MobileNav");
  const sent = everythingSent();
  assert.ok(!sent.includes(SENTINEL_EMAIL));
  assert.ok(!sent.includes(SENTINEL_NAME));
  assert.ok(!/@/.test(sent.replace(/amplitude/g, "")));
});

test("signup and CTA events are still tracked", () => {
  analytics.trackWaitlistSignup();
  analytics.trackCTAClick("Download", "MobileNav");
  const names = calls.filter((c) => c.fn === "track").map((c) => c.args[0]);
  assert.deepEqual(names, ["Waitlist Signup Completed", "CTA Clicked"]);
});

test("user id is a random uuid, stable across calls, never the email", () => {
  analytics.initializeAnalytics();
  analytics.initializeAnalytics();
  const ids = calls
    .filter((c) => c.fn === "setUserId" || c.fn === "init")
    .map((c) => (c.fn === "init" ? c.args[1] : c.args[0]));
  assert.ok(ids.length >= 2);
  assert.match(
    String(ids[0]),
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
  );
  assert.equal(new Set(ids).size, 1);
});

test("falls back to Amplitude's anonymous id when storage is unavailable", () => {
  storageBroken = true;
  assert.doesNotThrow(() => analytics.initializeAnalytics());
  const userIds = calls
    .filter((c) => c.fn === "setUserId")
    .map((c) => c.args[0]);
  assert.ok(userIds.length >= 1);
  assert.ok(userIds.every((id) => id === undefined));
});

test("WaitListForm does not hand the email to analytics", () => {
  const form = readFileSync(
    new URL("../components/waitlist/WaitListForm.tsx", import.meta.url),
    "utf8",
  );
  assert.match(form, /trackWaitlistSignup\(\)/);
});

test("privacy notice names every tracker and the contact addresses", () => {
  const notice = readFileSync(
    new URL("../app/privacy-policy/DataCollectionNotice.tsx", import.meta.url),
    "utf8",
  );
  for (const term of [
    "Amplitude",
    "Meta Pixel",
    "Contentsquare",
    "team@storytimeapp.me",
    "support@storytimeapp.me",
  ]) {
    assert.ok(notice.includes(term), term);
  }
});

const OLD_EMAIL = "returning.parent@example.test";
const oldAmpValue = JSON.stringify({
  deviceId: "old-device-id",
  userId: OLD_EMAIL,
  cookieDomain: ".storytimeapp.me",
});

const seedOldAmplitudeState = () => {
  jar.push({ name: "AMP_abc123", value: oldAmpValue, domain: ".storytimeapp.me" });
  jar.push({ name: "AMP_MKTG_abc123", value: "x", domain: ".storytimeapp.me" });
  jar.push({ name: "unrelated", value: "keep", domain: null });
  store.set("AMP_abc123", oldAmpValue);
  store.set("other_key", "keep");
};

test("first run removes the old Amplitude cookie and storage that hold the email", () => {
  seedOldAmplitudeState();
  analytics.initializeAnalytics();
  assert.ok(!document.cookie.includes(OLD_EMAIL));
  assert.ok(!document.cookie.includes("AMP_"));
  assert.ok(!JSON.stringify([...store.entries()]).includes(OLD_EMAIL));
  assert.ok([...store.keys()].every((k) => !k.startsWith("AMP_")));
  assert.ok(document.cookie.includes("unrelated=keep"));
  assert.equal(store.get("other_key"), "keep");
  assert.ok(!everythingSent().includes(OLD_EMAIL));
});

test("old cookie is removed whether it was set on the dotted apex, apex or host", () => {
  for (const domain of [".storytimeapp.me", "storytimeapp.me", "waitlist.storytimeapp.me", null]) {
    jar = [{ name: "AMP_zzz", value: oldAmpValue, domain }];
    store.clear();
    analytics.initializeAnalytics();
    assert.equal(document.cookie.includes("AMP_zzz"), false, String(domain));
  }
});

test("a returning browser that already has an id keeps its Amplitude state", () => {
  store.set("st_anon_id", "11111111-1111-4111-8111-111111111111");
  jar.push({ name: "AMP_abc123", value: "new-state", domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(document.cookie.includes("AMP_abc123=new-state"));
});

test("signup error event carries a fixed category, never the raw message", () => {
  (analytics.trackWaitlistSignupError as (...a: unknown[]) => void)(
    `Email ${SENTINEL_EMAIL} is already registered`,
  );
  const sent = everythingSent();
  assert.ok(!sent.includes(SENTINEL_EMAIL));
  assert.ok(sent.includes("Waitlist Signup Error"));
});

test("WaitListForm reports signup errors without the message", () => {
  const form = readFileSync(
    new URL("../components/waitlist/WaitListForm.tsx", import.meta.url),
    "utf8",
  );
  assert.match(form, /trackWaitlistSignupError\(\)/);
});

test("Meta Pixel automatic advanced matching is switched off before init", () => {
  const pixel = readFileSync(
    new URL("../components/MetaPixel.tsx", import.meta.url),
    "utf8",
  );
  const off = pixel.indexOf("fbq('set', 'autoConfig', false");
  const init = pixel.indexOf("fbq('init'");
  assert.ok(off > -1 && init > off);
});

const notice = () =>
  readFileSync(
    new URL("../app/privacy-policy/DataCollectionNotice.tsx", import.meta.url),
    "utf8",
  );

test("privacy notice states facts and does not claim compliance", () => {
  const text = notice();
  assert.doesNotMatch(text, /We comply/);
  assert.match(text, /IP address/);
  assert.match(text, /attribution/);
  assert.match(text, /2026-11-08|8 November 2026/);
  assert.doesNotMatch(text, /phone/i);
});
