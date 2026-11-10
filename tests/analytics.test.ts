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
let cookieBroken = false;
let cookieReadsBeforeBreak = Infinity;
const normalizeDomain = (d: string | null) => (d ? d.replace(/^\./, "") : null);

Object.defineProperty(globalThis, "location", {
  configurable: true,
  value: { hostname: "waitlist.storytimeapp.me" },
});
Object.defineProperty(globalThis, "document", {
  configurable: true,
  value: {
    get cookie() {
      if (cookieBroken || cookieReadsBeforeBreak-- <= 0)
        throw new Error("cookies denied");
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
let writeBroken = false;
Object.defineProperty(globalThis, "localStorage", {
  configurable: true,
  value: {
    getItem: (k: string) => {
      if (storageBroken) throw new Error("denied");
      return store.get(k) ?? null;
    },
    setItem: (k: string, v: string) => {
      if (storageBroken || writeBroken) throw new Error("denied");
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
  jar = [{ name: "st_consent", value: "granted", domain: null }];
  cookieBroken = false;
  cookieReadsBeforeBreak = Infinity;
  storageBroken = false;
  writeBroken = false;
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
    jar = [
      { name: "st_consent", value: "granted", domain: null },
      { name: "AMP_zzz", value: oldAmpValue, domain },
    ];
    store.clear();
    analytics.initializeAnalytics();
    assert.equal(document.cookie.includes("AMP_zzz"), false, String(domain));
  }
});

test("a returning browser that already has an id keeps its Amplitude state", () => {
  const id = "11111111-1111-4111-8111-111111111111";
  const state = JSON.stringify({ deviceId: "d", userId: id });
  store.set("st_anon_id", id);
  jar.push({ name: "AMP_abc123", value: state, domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(document.cookie.includes(`AMP_abc123=${state}`));
});

test("signup error event carries a fixed category, never the raw message", () => {
  (analytics.trackWaitlistSignupError as (...a: unknown[]) => void)(
    `Email ${SENTINEL_EMAIL} is already registered`,
  );
  const sent = everythingSent();
  assert.ok(!sent.includes(SENTINEL_EMAIL));
  const errorEvent = calls.find(
    (c) => c.fn === "track" && c.args[0] === "Waitlist Signup Error",
  );
  assert.equal(
    (errorEvent?.args[1] as { error_category?: string }).error_category,
    "signup_failed",
  );
});

test("WaitListForm reports signup errors without the message", () => {
  const form = readFileSync(
    new URL("../components/waitlist/WaitListForm.tsx", import.meta.url),
    "utf8",
  );
  assert.match(form, /trackWaitlistSignupError\(\)/);
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
  assert.doesNotMatch(text, /attribution|referred/i);
  assert.doesNotMatch(text, /8 November|2026/);
  assert.match(text, /before this change/);
  assert.match(text, /no longer send it/);
  assert.match(text, /from our code/);
  assert.doesNotMatch(text, /that has been stopped/);
  assert.doesNotMatch(text, /phone/i);
});

const ANON = "22222222-2222-4222-8222-222222222222";

test("an email cookie written after st_anon_id exists is purged before init", () => {
  store.set("st_anon_id", ANON);
  jar.push({ name: "AMP_abc123", value: oldAmpValue, domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(!document.cookie.includes(OLD_EMAIL));
  assert.ok(!document.cookie.includes("AMP_abc123"));
  assert.equal(store.get("st_anon_id"), ANON);
  assert.ok(!everythingSent().includes(OLD_EMAIL));
});

test("a base64 encoded email cookie is also purged", () => {
  store.set("st_anon_id", ANON);
  const encoded = Buffer.from(encodeURIComponent(oldAmpValue)).toString("base64");
  jar.push({ name: "AMP_abc123", value: encoded, domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(!document.cookie.includes("AMP_abc123"));
});

test("an undecodable Amplitude cookie is purged", () => {
  store.set("st_anon_id", ANON);
  jar.push({ name: "AMP_abc123", value: "%%%not-json", domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(!document.cookie.includes("AMP_abc123"));
});

test("a cookie whose userId is our anonymous id is kept", () => {
  store.set("st_anon_id", ANON);
  const own = JSON.stringify({ deviceId: "d", userId: ANON });
  jar.push({ name: "AMP_abc123", value: own, domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(document.cookie.includes("AMP_abc123"));
});

test("a cookie without a userId is kept", () => {
  store.set("st_anon_id", ANON);
  jar.push({ name: "AMP_abc123", value: JSON.stringify({ deviceId: "d" }), domain: null });
  analytics.initializeAnalytics();
  assert.ok(document.cookie.includes("AMP_abc123"));
});

test("cookies are purged even when localStorage throws", () => {
  storageBroken = true;
  jar.push({ name: "AMP_abc123", value: oldAmpValue, domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(!document.cookie.includes(OLD_EMAIL));
});

test("localStorage is purged even when the cookie purge throws", () => {
  store.set("AMP_abc123", oldAmpValue);
  cookieReadsBeforeBreak = 1;
  assert.doesNotThrow(() => analytics.initializeAnalytics());
  assert.ok(![...store.keys()].some((k) => k.startsWith("AMP_")));
});

test("with storage blocked, a cookie without another user is not reset on every load", () => {
  storageBroken = true;
  const state = JSON.stringify({ deviceId: "d" });
  jar.push({ name: "AMP_abc123", value: state, domain: null });
  analytics.initializeAnalytics();
  assert.ok(document.cookie.includes(`AMP_abc123=${state}`));
});

test("storage readable but not writable: an anonymous cookie is kept across loads", () => {
  writeBroken = true;
  const state = JSON.stringify({ deviceId: "d" });
  jar.push({ name: "AMP_abc123", value: state, domain: null });
  analytics.initializeAnalytics();
  analytics.initializeAnalytics();
  assert.ok(document.cookie.includes(`AMP_abc123=${state}`));
});

test("storage readable but not writable: an email cookie is purged", () => {
  writeBroken = true;
  jar.push({ name: "AMP_abc123", value: oldAmpValue, domain: ".storytimeapp.me" });
  analytics.initializeAnalytics();
  assert.ok(!document.cookie.includes(OLD_EMAIL));
});

test("storage readable but not writable: an unsent queue holding the email is purged", () => {
  writeBroken = true;
  store.set("AMP_unsent_abc123", JSON.stringify([{ user_id: OLD_EMAIL }]));
  analytics.initializeAnalytics();
  assert.ok(!JSON.stringify([...store.entries()]).includes(OLD_EMAIL));
});

test("privacy notice does not claim no data is collected from children", () => {
  const text = notice();
  assert.doesNotMatch(text, /do not collect any information from children/);
  assert.match(text, /do not knowingly collect personal information from children/);
  assert.doesNotMatch(text, /do not collect any personal information from children/);
  assert.doesNotMatch(text, /does not receive the page address/);
  assert.match(text, /receives the path of each page you visit/);
  assert.match(text, /session replays can capture what you type unless/i);
  assert.match(text, /record visits from anyone who opens it/);
});

test("error and loading pages report to Sentry, retry through the boundary's retry prop and respect reduced motion", () => {
  const read = (f: string) =>
    readFileSync(new URL(`../app/${f}`, import.meta.url), "utf8");
  const error = read("error.tsx");
  assert.match(error, /Sentry\.captureException\(error\)/);
  assert.match(error, /onClick=\{retry\}/);
  assert.doesNotMatch(error, /router\.refresh|reset\(\)/);
  assert.match(read("loading.tsx"), /motion-safe:animate-spin/);
});

test("lib/meta-pixel.ts no longer exists", () => {
  assert.throws(() =>
    readFileSync(new URL("../lib/meta-pixel.ts", import.meta.url)),
  );
});

test("Amplitude is initialised with url enrichment and attribution off and no remote config", () => {
  analytics.initializeAnalytics();
  const init = calls.find((c) => c.fn === "init");
  const options = init?.args[2] as Record<string, unknown>;
  assert.ok(!("defaultTracking" in options));
  assert.deepEqual(options.autocapture, {
    sessions: true,
    pageViews: false,
    formInteractions: false,
    fileDownloads: false,
    pageUrlEnrichment: false,
    attribution: false,
  });
  assert.equal(options.fetchRemoteConfig, false);
});

test("with a query in location, init config disables url enrichment and our events carry no query", () => {
  Object.defineProperty(globalThis, "location", {
    configurable: true,
    value: {
      hostname: "waitlist.storytimeapp.me",
      href: "https://waitlist.storytimeapp.me/contact-us?email=x%40example.test",
    },
  });
  analytics.initializeAnalytics();
  analytics.trackCTAClick("Download", "MobileNav");
  analytics.trackWaitlistSignup();
  const init = calls.find((c) => c.fn === "init");
  const autocapture = (init?.args[2] as { autocapture: Record<string, unknown> })
    .autocapture;
  assert.equal(autocapture.pageUrlEnrichment, false);
  assert.equal(autocapture.attribution, false);
  assert.equal((init?.args[2] as { fetchRemoteConfig?: boolean }).fetchRemoteConfig, false);
  const sent = everythingSent();
  assert.ok(!sent.includes("email=x"));
  assert.ok(!sent.includes("Page Location"));
  Object.defineProperty(globalThis, "location", {
    configurable: true,
    value: { hostname: "waitlist.storytimeapp.me" },
  });
});

test("contact form controls stay disabled until the component has mounted", () => {
  const form = readFileSync(
    new URL("../components/ContactUs.tsx", import.meta.url),
    "utf8",
  );
  assert.equal(form.match(/disabled=\{isLoading \|\| !mounted\}/g)?.length, 4);
  assert.match(form, /\(\) => true,\s*\(\) => false,/);
});

test("storage works but crypto.randomUUID is missing: a v4 id is still created and kept", () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, "crypto");
  Object.defineProperty(globalThis, "crypto", {
    configurable: true,
    value: {
      getRandomValues: (a: Uint8Array) => {
        for (let i = 0; i < a.length; i++) a[i] = (i * 37 + 11) % 256;
        return a;
      },
    },
  });
  try {
    store.set("AMP_unsent_abc", JSON.stringify([{ user_id: OLD_EMAIL }]));
    analytics.initializeAnalytics();
    analytics.initializeAnalytics();
    const id = store.get("st_anon_id");
    assert.match(
      String(id),
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
    const ids = calls.filter((c) => c.fn === "init").map((c) => c.args[1]);
    assert.deepEqual(ids, [id, id]);
    assert.ok(!JSON.stringify([...store.entries()]).includes(OLD_EMAIL));
  } finally {
    if (original) Object.defineProperty(globalThis, "crypto", original);
  }
});

test("the privacy link opens in a new tab safely in every form", () => {
  for (const file of [
    "components/waitlist/WaitListForm.tsx",
    "components/JoinEarlyModal.tsx",
    "components/ContactUs.tsx",
    "components/resources/ResourceSignUp.tsx",
  ]) {
    const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    const link = source.match(/<Link[^>]*href="\/privacy-policy"[^>]*>/)?.[0];
    assert.ok(link, file);
    assert.match(link, /target="_blank"/, file);
    assert.match(link, /rel="noopener noreferrer"/, file);
  }
});

test("error message is announced and the loading text is visible", () => {
  const read = (f: string) =>
    readFileSync(new URL(`../app/${f}`, import.meta.url), "utf8");
  assert.match(read("error.tsx"), /role="alert"/);
  assert.doesNotMatch(read("loading.tsx"), /sr-only/);
  assert.match(read("loading.tsx"), /Loading/);
});

test("the main CI header no longer describes deploy-production as unmerged", () => {
  const header = readFileSync(
    new URL("../.github/workflows/deploy-frontend.yml", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(header, /not merged yet|open as PR #171/);
});

const queueOf = (...userIds: (string | undefined)[]) =>
  JSON.stringify(userIds.map((user_id) => ({ event_type: "e", user_id })));

test("a queued event holding another user id is purged before init", () => {
  store.set("st_anon_id", ANON);
  store.set("AMP_unsent_key", queueOf(OLD_EMAIL, ANON));
  analytics.initializeAnalytics();
  assert.ok(!JSON.stringify([...store.entries()]).includes(OLD_EMAIL));
  assert.equal(store.get("st_anon_id"), ANON);
});

test("an unparsable queue is purged", () => {
  store.set("st_anon_id", ANON);
  store.set("AMP_unsent_key", "{not json");
  analytics.initializeAnalytics();
  assert.equal(store.has("AMP_unsent_key"), false);
});

test("a queue holding only the stored id is kept across three loads", () => {
  store.set("st_anon_id", ANON);
  const queue = queueOf(ANON, undefined);
  store.set("AMP_unsent_key", queue);
  for (let i = 0; i < 3; i++) analytics.initializeAnalytics();
  assert.equal(store.get("AMP_unsent_key"), queue);
  const ids = calls.filter((c) => c.fn === "init").map((c) => c.args[1]);
  assert.deepEqual(ids, [ANON, ANON, ANON]);
});

test("the waitlist overlay scrolls and centres safely on short viewports", () => {
  const form = readFileSync(
    new URL("../components/waitlist/WaitListForm.tsx", import.meta.url),
    "utf8",
  );
  assert.match(form, /fixed inset-0[^"]*justify-center-safe[^"]*overflow-y-auto|fixed inset-0[^"]*overflow-y-auto[^"]*justify-center-safe/);
});

test("a queued event without user_id but containing an email-shaped value is purged", () => {
  for (const leak of ["bob@example.test", "bob%40example.test"]) {
    store.clear();
    store.set("st_anon_id", ANON);
    store.set(
      "AMP_unsent_key",
      JSON.stringify([{ event_type: "e", event_properties: { loc: `/c?email=${leak}` } }]),
    );
    analytics.initializeAnalytics();
    assert.equal(store.has("AMP_unsent_key"), false, leak);
  }
});

test("a normal anonymous queue is kept over three loads", () => {
  store.set("st_anon_id", ANON);
  const queue = JSON.stringify([
    { event_type: "CTA Clicked", event_properties: { cta_name: "Download" } },
  ]);
  store.set("AMP_unsent_key", queue);
  for (let i = 0; i < 3; i++) analytics.initializeAnalytics();
  assert.equal(store.get("AMP_unsent_key"), queue);
});

test("a queue holding a Page Location property is purged even without an email", () => {
  store.set("st_anon_id", ANON);
  store.set(
    "AMP_unsent_key",
    JSON.stringify([
      {
        event_type: "e",
        event_properties: {
          "[Amplitude] Page Location":
            "https://waitlist.storytimeapp.me/contact-us?name=Bob+Smith&message=call+me+on+08012345678",
        },
      },
    ]),
  );
  analytics.initializeAnalytics();
  assert.equal(store.has("AMP_unsent_key"), false);
});

test("an anonymous queue with a non email-shaped @ is kept over three loads with stable ids", () => {
  store.set("st_anon_id", ANON);
  const queue = JSON.stringify([
    {
      event_type: "Page Viewed",
      event_properties: { page_path: "/resources/a%40b", page_title: "Q @ A | Storytime" },
    },
  ]);
  store.set("AMP_unsent_key", queue);
  for (let i = 0; i < 3; i++) analytics.initializeAnalytics();
  assert.equal(store.get("AMP_unsent_key"), queue);
  const ids = calls.filter((c) => c.fn === "init").map((c) => c.args[1]);
  assert.deepEqual(ids, [ANON, ANON, ANON]);
});
