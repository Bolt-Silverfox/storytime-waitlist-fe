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
  },
});

const analytics = await import("../lib/analytics.ts");

beforeEach(() => {
  calls.length = 0;
  store.clear();
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
  analytics.trackWaitlistSignupError("failed");
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
