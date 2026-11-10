import { test, mock, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, mkdtempSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { JSDOM } from "jsdom";

const dom = new JSDOM(
  '<!doctype html><html><body><main id="main-content" tabindex="-1"></main></body></html>',
  { url: "https://waitlist.storytimeapp.me/", pretendToBeVisual: true },
);
const win = dom.window as unknown as Window & Record<string, any>;
for (const [key, value] of Object.entries({
  window: win,
  document: win.document,
  location: win.location,
  localStorage: win.localStorage,
  sessionStorage: win.sessionStorage,
  Event: win.Event,
  KeyboardEvent: win.KeyboardEvent,
  HTMLElement: win.HTMLElement,
  HTMLIFrameElement: win.HTMLIFrameElement,
  Node: win.Node,
  IS_REACT_ACT_ENVIRONMENT: true,
})) {
  Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
}

const events: string[] = [];
const amplitudeCalls: { fn: string; args: unknown[] }[] = [];
const sdk = {
  initialized: false,
  optOut: false,
  persistedOptOut: false,
  queue: [] as (() => void)[],
};
const resetSdk = () => {
  sdk.initialized = false;
  sdk.optOut = false;
  sdk.persistedOptOut = false;
  sdk.queue = [];
};
const simulatePageLoad = () => {
  sdk.initialized = false;
  sdk.queue = [];
  sdk.optOut = sdk.persistedOptOut;
};
const amplitudeFn =
  (fn: string) =>
  (...args: unknown[]) => {
    amplitudeCalls.push({ fn, args });
    if (fn === "init") {
      sdk.initialized = true;
      sdk.optOut = sdk.persistedOptOut;
      sdk.queue.splice(0).forEach((run) => run());
    }
    if (fn === "setOptOut") {
      const value = args[0] as boolean;
      if (value) events.push("amplitude-optout");
      const apply = () => {
        sdk.optOut = value;
        sdk.persistedOptOut = value;
      };
      if (sdk.initialized) apply();
      else sdk.queue.push(apply);
    }
  };
class FakeIdentify {
  set() {
    return this;
  }
}
mock.module("@amplitude/analytics-browser", {
  namedExports: {
    init: amplitudeFn("init"),
    track: amplitudeFn("track"),
    identify: amplitudeFn("identify"),
    setUserId: amplitudeFn("setUserId"),
    setOptOut: amplitudeFn("setOptOut"),
    Identify: FakeIdentify,
    Types: { LogLevel: { None: 0, Warn: 2 } },
  },
});
const route = { pathname: "/about" };
mock.module("next/navigation", {
  namedExports: {
    usePathname: () => route.pathname,
    useSearchParams: () => new URLSearchParams(),
  },
});
const React = await import("react");
mock.module("next/link", {
  defaultExport: ({ href, children, ...rest }: Record<string, any>) =>
    React.createElement("a", { href, ...rest }, children),
});
mock.module("next/image", {
  defaultExport: ({ src, alt }: Record<string, any>) => React.createElement("img", { src, alt }),
});
mock.module("../lib/navigation.ts", {
  namedExports: { reloadPage: () => events.push("reload") },
});
process.env.NEXT_PUBLIC_META_PIXEL_ID = "123456789";

const { act, createElement } = React;
const { createRoot } = await import("react-dom/client");
const { renderToString } = await import("react-dom/server");
const consent = await import("../lib/consent.ts");
const analytics = await import("../lib/analytics.ts");
const trackers = await import("../lib/trackers.ts");
const { default: ConsentBanner } = await import("../components/consent/ConsentBanner.tsx");
const { default: MetaPixel } = await import("../components/MetaPixel.tsx");
const { default: ContentsquareTag } = await import("../components/ContentsquareTag.tsx");
const { useConsent } = await import("../components/consent/useConsent.ts");

const listenerLog: string[] = [];
for (const target of [win, win.document] as unknown as EventTarget[]) {
  const add = target.addEventListener.bind(target);
  const remove = target.removeEventListener.bind(target);
  const label = target === (win as unknown as EventTarget) ? "window" : "document";
  target.addEventListener = ((type: string, ...rest: [never]) => {
    listenerLog.push(`+${label}:${type}`);
    return add(type, ...rest);
  }) as never;
  target.removeEventListener = ((type: string, ...rest: [never]) => {
    listenerLog.push(`-${label}:${type}`);
    return remove(type, ...rest);
  }) as never;
}

const nativeCookie = Object.getOwnPropertyDescriptor(win.Document.prototype, "cookie")!;
const cookieWrites: string[] = [];
let cookiesBlocked = false;
let cookiesThrow = false;
Object.defineProperty(win.document, "cookie", {
  configurable: true,
  get() {
    return cookiesBlocked ? "" : nativeCookie.get!.call(this);
  },
  set(value: string) {
    if (cookiesThrow) throw new Error("cookies denied");
    cookieWrites.push(value);
    if (/expires=Thu, 01 Jan 1970/i.test(value)) events.push("cookie-purge");
    if (!cookiesBlocked) nativeCookie.set!.call(this, value);
  },
});

const plantCookie = (name: string, domain?: string) =>
  nativeCookie.set!.call(
    win.document,
    `${name}=1; path=/${domain ? `; domain=${domain}` : ""}`,
  );
const plantConsent = (value: string) => nativeCookie.set!.call(win.document, `st_consent=${value}; path=/`);
const cookieNames = () =>
  nativeCookie
    .get!.call(win.document)
    .split(";")
    .map((p: string) => p.split("=")[0].trim())
    .filter(Boolean);

const clearCookies = () => {
  for (const name of cookieNames()) {
    for (const domain of [undefined, "storytimeapp.me", ".storytimeapp.me", "waitlist.storytimeapp.me"]) {
      nativeCookie.set!.call(
        win.document,
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`,
      );
    }
  }
};

const mounted: { unmount: () => Promise<void>; container: HTMLElement }[] = [];
const mount = async (...elements: unknown[]) => {
  const container = win.document.createElement("div");
  win.document.body.appendChild(container);
  const root = createRoot(container);
  const render = (els: unknown[]) =>
    act(async () => {
      root.render(createElement(React.Fragment, null, ...(els as never[])));
    });
  await render(elements);
  const handle = {
    container,
    rerender: () => render(elements.map((e) => React.cloneElement(e as never))),
    unmount: () => act(async () => root.unmount()),
  };
  mounted.push(handle);
  return handle;
};

beforeEach(() => {
  events.length = 0;
  amplitudeCalls.length = 0;
  cookieWrites.length = 0;
  cookiesBlocked = false;
  cookiesThrow = false;
  route.pathname = "/about";
});

afterEach(async () => {
  for (const handle of mounted.splice(0)) await handle.unmount();
  cookiesBlocked = false;
  cookiesThrow = false;
  consent.setConsent("denied");
  clearCookies();
  win.localStorage.clear();
  win.sessionStorage.clear();
  win.document.head.querySelectorAll("script").forEach((s) => s.remove());
  win.document.body.querySelectorAll("[data-test]").forEach((s) => s.remove());
  analytics.disableAnalytics();
  resetSdk();
  events.length = 0;
  for (const key of ["fbq", "_fbq", "_uxa"]) delete win[key];
});

const sentToAmplitude = () =>
  amplitudeCalls.filter((c) => ["init", "track", "identify", "setUserId"].includes(c.fn));
const runAllAnalytics = () => {
  analytics.initializeAnalytics();
  analytics.trackEvent("X", { a: 1 });
  analytics.trackPageView("/about", "About");
  analytics.setUserProperties({ a: 1 });
  analytics.trackWaitlistSignup();
  analytics.trackCTAClick("Download", "Nav");
};
const scripts = () =>
  [...win.document.head.querySelectorAll("script")].map((s) => s.getAttribute("src"));
const button = (label: string) =>
  [...win.document.querySelectorAll("button")].find((b) => b.textContent?.trim() === label) as HTMLButtonElement;
const click = (el: HTMLElement) => act(async () => el.click());
const isOpen = () => win.document.querySelector('[role="dialog"]') !== null;
const activeId = () => win.document.activeElement?.id ?? "";
const dialog = () => win.document.querySelector('[role="dialog"]') as HTMLElement | null;
const FBQ_SRC = "https://connect.facebook.net/en_US/fbevents.js";
const CS_SRC = "https://t.contentsquare.net/uxa/3c5a706e6e6fd.js";
const queued = () =>
  ((win.fbq as { queue: unknown[] }).queue ?? []).map((a) => [...(a as unknown[])].join(":"));

test("no stored choice reads as null and Amplitude stays off", () => {
  assert.equal(consent.getConsent(), null);
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
});

test("rejecting keeps Amplitude off", () => {
  consent.setConsent("denied");
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
});

test("accepting lets Amplitude init and track", () => {
  consent.setConsent("granted");
  runAllAnalytics();
  assert.equal(amplitudeCalls.filter((c) => c.fn === "init").length, 1);
  assert.ok(amplitudeCalls.some((c) => c.fn === "track"));
});

test("an unrecognised stored value counts as no choice", () => {
  plantConsent("yes");
  assert.equal(consent.getConsent(), null);
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
});

test("the choice is a first-party cookie that expires in about six months and can be changed", () => {
  consent.setConsent("granted");
  const written = cookieWrites.find((w) => w.startsWith("st_consent="))!;
  assert.match(written, /st_consent=granted/);
  assert.match(written, /path=\//i);
  assert.match(written, /samesite=lax/i);
  assert.match(written, /secure/i);
  assert.doesNotMatch(written, /domain=/i);
  const maxAge = Number(/max-age=(\d+)/i.exec(written)?.[1]);
  assert.ok(maxAge >= 150 * 86400 && maxAge <= 190 * 86400, `max-age ${maxAge}`);
  assert.equal(consent.getConsent(), "granted");
  consent.setConsent("denied");
  assert.equal(consent.getConsent(), "denied");
});

test("with cookies blocked the choice is still honoured for this page view", () => {
  cookiesBlocked = true;
  consent.setConsent("denied");
  assert.equal(consent.getConsent(), "denied");
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
  consent.setConsent("granted");
  assert.equal(consent.getConsent(), "granted");
  runAllAnalytics();
  assert.ok(amplitudeCalls.some((c) => c.fn === "track"));
});

test("Meta Pixel does not load without consent or after rejecting", () => {
  trackers.loadMetaPixel("123456789");
  consent.setConsent("denied");
  trackers.loadMetaPixel("123456789");
  assert.deepEqual(scripts(), []);
  assert.equal(win.fbq, undefined);
});

test("Meta Pixel loads once after consent, auto-config off before init", () => {
  consent.setConsent("granted");
  trackers.loadMetaPixel("123456789");
  trackers.loadMetaPixel("123456789");
  assert.deepEqual(scripts(), [FBQ_SRC]);
  assert.deepEqual(queued(), [
    "set:autoConfig:false:123456789",
    "init:123456789",
    "track:PageView",
  ]);
});

test("Meta Pixel refuses a non-numeric id even with consent", () => {
  consent.setConsent("granted");
  trackers.loadMetaPixel("1');alert(1);//");
  assert.deepEqual(scripts(), []);
});

test("Contentsquare does not load without consent or after rejecting, and loads once after accepting", () => {
  trackers.loadContentsquare();
  consent.setConsent("denied");
  trackers.loadContentsquare();
  assert.deepEqual(scripts(), []);
  consent.setConsent("granted");
  trackers.loadContentsquare();
  trackers.loadContentsquare();
  assert.deepEqual(scripts(), [CS_SRC]);
});

const loadEverything = () => {
  consent.setConsent("granted");
  analytics.initializeAnalytics();
  trackers.loadMetaPixel("123456789");
  trackers.loadContentsquare();
  win._uxa = [];
  win._uxa.push = (...args: unknown[]) => {
    events.push(`cs:${JSON.stringify(args)}`);
    return 0;
  };
  amplitudeCalls.length = 0;
  events.length = 0;
};

test("withdrawing opts Contentsquare and Amplitude out before any purge, and purges before the reload", () => {
  loadEverything();
  win.localStorage.setItem("csAnalysisEventsPersisted", "x");
  win.localStorage.setItem("_cs_optout", "x");
  win.localStorage.setItem("keep_me", "x");
  win.sessionStorage.setItem("_cs_ex", "x");
  win.sessionStorage.setItem("_cs_cvars", "x");
  plantCookie("AMP_abc");
  plantCookie("_cs_id");
  consent.setConsent("denied");

  trackers.enforceDenied();

  const firstPurge = events.indexOf("cookie-purge");
  assert.ok(firstPurge >= 0, "cookies purged");
  assert.ok(events.indexOf('cs:[["optout"]]') >= 0, "contentsquare opted out");
  assert.ok(events.indexOf('cs:[["optout"]]') < firstPurge);
  assert.ok(events.indexOf("amplitude-optout") >= 0 && events.indexOf("amplitude-optout") < firstPurge);
  assert.ok(events.indexOf("reload") > events.lastIndexOf("cookie-purge"));
  for (const key of ["csAnalysisEventsPersisted", "_cs_optout"]) assert.equal(win.localStorage.getItem(key), null);
  for (const key of ["_cs_ex", "_cs_cvars"]) assert.equal(win.sessionStorage.getItem(key), null);
  assert.equal(win.localStorage.getItem("keep_me"), "x");
  assert.equal(win.localStorage.getItem("st_anon_id"), null);
  assert.deepEqual(sentToAmplitude(), []);
});

test("withdrawing clears tracker cookies set on the host and on parent domains, nothing else", () => {
  plantCookie("_fbp", "storytimeapp.me");
  plantCookie("_fbc", ".storytimeapp.me");
  plantCookie("_cs_id");
  plantCookie("_cs_s", "waitlist.storytimeapp.me");
  plantCookie("AMP_abc", ".storytimeapp.me");
  plantCookie("AMP_def", "storytimeapp.me");
  plantCookie("unrelated");
  consent.setConsent("denied");
  trackers.enforceDenied();
  assert.deepEqual(cookieNames().sort(), ["st_consent", "unrelated"]);
});

test("enforcing a rejection reloads only when a tracker was running on this page", () => {
  consent.setConsent("denied");
  trackers.enforceDenied();
  assert.ok(!events.includes("reload"));
  consent.setConsent("granted");
  trackers.loadContentsquare();
  consent.setConsent("denied");
  trackers.enforceDenied();
  assert.ok(events.includes("reload"));
});

const App = () =>
  createElement(
    React.Fragment,
    null,
    createElement(MetaPixel),
    createElement(ContentsquareTag),
    createElement(ConsentBanner),
  );

test("server render emits no banner and no tracker whatever the stored choice is", () => {
  for (const value of [null, "granted", "denied"]) {
    clearCookies();
    if (value) plantConsent(value);
    assert.equal(renderToString(createElement(App)), "", String(value));
  }
});

test("useConsent is pending on the server and resolves after mount", async () => {
  const Probe = () => createElement("span", { "data-test": "" }, useConsent());
  assert.match(renderToString(createElement(Probe)), /pending/);
  const view = await mount(createElement(Probe));
  assert.equal(view.container.textContent, "unset");
  plantConsent("granted");
  await act(async () => win.dispatchEvent(new win.Event("focus")));
  assert.equal(view.container.textContent, "granted");
});

test("on a first visit the banner appears with focus on its heading, and nothing tracks", async () => {
  await mount(createElement(App));
  assert.ok(dialog());
  assert.equal(activeId(), "consent-title");
  assert.deepEqual(scripts(), []);
  assert.equal(win.fbq, undefined);
  assert.deepEqual(sentToAmplitude(), []);
  assert.equal(win.document.getElementById("consent-title")!.dataset.ring, "false");
});

test("the heading shows a focus ring only when the keyboard was in use", async () => {
  plantConsent("denied");
  await mount(createElement(App));
  await act(async () => win.dispatchEvent(new win.KeyboardEvent("keydown", { key: "Tab" })));
  await act(async () => consent.openConsentPreferences());
  const heading = win.document.getElementById("consent-title")!;
  assert.equal(heading.dataset.ring, "true");
  assert.match(heading.className, /data-\[ring=true\]:outline-2/);
  await act(async () =>
    dialog()!.dispatchEvent(new win.KeyboardEvent("keydown", { key: "Escape", bubbles: true })),
  );
  await act(async () => win.dispatchEvent(new win.Event("pointerdown")));
  await act(async () => consent.openConsentPreferences());
  assert.equal(win.document.getElementById("consent-title")!.dataset.ring, "false");
});

test("Accept and Reject are styled identically and the banner stays under modal overlays", async () => {
  await mount(createElement(App));
  assert.equal(button("Accept").className, button("Reject").className);
  assert.match(dialog()!.className, /\bz-40\b/);
  assert.equal(dialog()!.getAttribute("aria-modal"), "false");
  assert.ok(dialog()!.getAttribute("aria-labelledby"));
  assert.ok(dialog()!.getAttribute("aria-describedby"));
});

test("the banner wording matches what runs: three gated tools, Sentry for errors and performance", async () => {
  await mount(createElement(App));
  const text = dialog()!.textContent!;
  for (const term of ["Amplitude", "Meta Pixel", "Contentsquare", "Sentry", "performance", "6 months", "Cookie settings"]) {
    assert.ok(text.includes(term), term);
  }
});

test("Accept stores the choice, starts every tracker, records this page view and hands focus to the page", async () => {
  await mount(createElement(App));
  await click(button("Accept"));
  assert.equal(consent.getConsent(), "granted");
  assert.equal(isOpen(), false);
  assert.equal(amplitudeCalls.filter((c) => c.fn === "init").length, 1);
  const pageView = amplitudeCalls.find((c) => c.fn === "track");
  assert.deepEqual(
    [pageView?.args[0], (pageView?.args[1] as { page_path: string }).page_path],
    ["Page Viewed", "/about"],
  );
  assert.deepEqual(scripts().sort(), [CS_SRC, FBQ_SRC].sort());
  assert.equal(activeId(), "main-content");
});

test("Reject on a first visit stores the choice, loads nothing, clears earlier identifiers and does not reload", async () => {
  plantCookie("_fbp", "storytimeapp.me");
  plantCookie("_cs_id");
  plantCookie("AMP_abc", ".storytimeapp.me");
  win.localStorage.setItem("st_anon_id", "old");
  await mount(createElement(App));
  await click(button("Reject"));
  assert.equal(consent.getConsent(), "denied");
  assert.equal(isOpen(), false);
  assert.deepEqual(scripts(), []);
  assert.deepEqual(sentToAmplitude(), []);
  assert.deepEqual(cookieNames().sort(), ["st_consent"]);
  assert.equal(win.localStorage.getItem("st_anon_id"), null);
  assert.ok(!events.includes("reload"));
  assert.equal(activeId(), "main-content");
});

test("a returning visitor who rejected has leftover tracker cookies cleared on load", async () => {
  plantConsent("denied");
  plantCookie("_fbp");
  await mount(createElement(App));
  assert.equal(isOpen(), false);
  assert.deepEqual(cookieNames(), ["st_consent"]);
});

test("a returning visitor who accepted gets trackers without a banner", async () => {
  plantConsent("granted");
  await mount(createElement(App));
  assert.equal(isOpen(), false);
  assert.deepEqual(scripts().sort(), [CS_SRC, FBQ_SRC].sort());
});

test("Reject after accepting stops everything and reloads, in that order", async () => {
  plantConsent("granted");
  await mount(createElement(App));
  win._uxa = [];
  win._uxa.push = (...args: unknown[]) => {
    events.push(`cs:${JSON.stringify(args)}`);
    return 0;
  };
  const opener = win.document.createElement("button");
  opener.setAttribute("data-test", "");
  opener.id = "opener";
  win.document.body.appendChild(opener);
  opener.focus();
  await act(async () => consent.openConsentPreferences());
  assert.ok(dialog());
  plantCookie("_cs_id");
  plantCookie("AMP_abc", ".storytimeapp.me");
  events.length = 0;
  await click(button("Reject"));
  assert.equal(consent.getConsent(), "denied");
  assert.ok(events.includes('cs:[["optout"]]'));
  assert.ok(events.indexOf("reload") > events.indexOf("cookie-purge"));
  assert.ok(events.indexOf('cs:[["optout"]]') < events.indexOf("cookie-purge"));
});

test("Reopening from the footer shows the banner, Escape closes it and focus returns to the opener", async () => {
  plantConsent("denied");
  await mount(createElement(App));
  const opener = win.document.createElement("button");
  opener.setAttribute("data-test", "");
  opener.id = "opener";
  win.document.body.appendChild(opener);
  opener.focus();
  await act(async () => consent.openConsentPreferences());
  assert.ok(dialog());
  assert.equal(activeId(), "consent-title");
  await act(async () =>
    dialog()!.dispatchEvent(new win.KeyboardEvent("keydown", { key: "Escape", bubbles: true })),
  );
  assert.equal(isOpen(), false);
  assert.equal(activeId(), "opener");
  assert.equal(consent.getConsent(), "denied");
});

test("Accepting again while already accepted does not start Amplitude a second time", async () => {
  plantConsent("granted");
  await mount(createElement(App));
  assert.equal(amplitudeCalls.filter((c) => c.fn === "init").length, 1);
  amplitudeCalls.length = 0;
  await act(async () => consent.openConsentPreferences());
  await click(button("Accept"));
  assert.equal(amplitudeCalls.filter((c) => c.fn === "init").length, 0);
  assert.equal(amplitudeCalls.filter((c) => c.fn === "track").length, 0);
  assert.equal(isOpen(), false);
});

test("with cookies blocked, Accept and Reject still close the banner and are honoured for the page", async () => {
  cookiesBlocked = true;
  await mount(createElement(App));
  assert.ok(dialog());
  await click(button("Reject"));
  assert.equal(isOpen(), false);
  assert.deepEqual(scripts(), []);
  await act(async () => consent.openConsentPreferences());
  await click(button("Accept"));
  assert.equal(isOpen(), false);
  assert.deepEqual(scripts().sort(), [CS_SRC, FBQ_SRC].sort());
});

test("a rejection made in another tab stops this tab when it regains focus", async () => {
  plantConsent("granted");
  await mount(createElement(App));
  events.length = 0;
  amplitudeCalls.length = 0;
  nativeCookie.set!.call(win.document, "st_consent=denied; path=/");
  runAllAnalytics();
  assert.deepEqual(sentToAmplitude(), []);
  await act(async () => win.dispatchEvent(new win.Event("focus")));
  assert.ok(events.includes("reload"));
  assert.ok(events.includes("cookie-purge") || cookieNames().length === 1);
});

test("Meta Pixel sends a page view per navigation only while consent stands", async () => {
  plantConsent("granted");
  const view = await mount(createElement(MetaPixel));
  assert.equal(queued().filter((q) => q === "track:PageView").length, 1);
  route.pathname = "/faq";
  await view.rerender();
  assert.equal(queued().filter((q) => q === "track:PageView").length, 2);
  nativeCookie.set!.call(win.document, "st_consent=denied; path=/");
  route.pathname = "/about";
  await view.rerender();
  assert.equal(queued().filter((q) => q === "track:PageView").length, 2);
});

test("Meta Pixel and Contentsquare render nothing and load nothing without consent", async () => {
  await mount(createElement(MetaPixel), createElement(ContentsquareTag));
  plantConsent("denied");
  await act(async () => win.dispatchEvent(new win.Event("focus")));
  assert.deepEqual(scripts(), []);
  assert.equal(win.fbq, undefined);
});

const read = (p: string) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");

test("the layout and Meta Pixel component carry no hard-coded tracker URLs or noscript beacon", () => {
  assert.doesNotMatch(read("app/layout.tsx"), /contentsquare\.net/i);
  assert.doesNotMatch(read("components/MetaPixel.tsx"), /noscript|facebook\.com\/tr|connect\.facebook\.net/);
});

test("the footer reopens the choice through the real control", async () => {
  const { default: Footer } = await import("../components/shared/Footer.tsx");
  plantConsent("denied");
  await mount(createElement(Footer), createElement(ConsentBanner));
  assert.equal(isOpen(), false);
  await click(button("Cookie settings"));
  assert.ok(dialog());
});

test("the privacy notice describes consent, retention of the choice, withdrawal and Sentry", () => {
  const text = read("app/privacy-policy/DataCollectionNotice.tsx");
  assert.match(text, /only run if you press Accept/);
  assert.match(text, /st_consent/);
  assert.match(text, /6 months/);
  assert.match(text, /Cookie settings/);
  assert.match(text, /does not delete information they already received/);
  assert.match(text, /Sentry always receives them/);
  assert.match(text, /JavaScript errors/);
  assert.doesNotMatch(text, /the tools above record visits from anyone/);
});

test("rejecting before Amplitude started, then accepting, leaves Amplitude on now and on the next load", () => {
  consent.setConsent("denied");
  trackers.enforceDenied();
  consent.setConsent("granted");
  analytics.initializeAnalytics();
  assert.equal(sdk.optOut, false);
  simulatePageLoad();
  analytics.initializeAnalytics();
  assert.equal(sdk.optOut, false);
});

test("accepting with no earlier rejection leaves Amplitude on", () => {
  consent.setConsent("granted");
  analytics.initializeAnalytics();
  assert.equal(sdk.optOut, false);
});

test("rejecting after Amplitude started opts it out", () => {
  consent.setConsent("granted");
  analytics.initializeAnalytics();
  consent.setConsent("denied");
  trackers.enforceDenied();
  assert.equal(sdk.optOut, true);
});

test("a tab that was waiting for a choice starts every tracker once when another tab accepts", async () => {
  await mount(createElement(App));
  assert.ok(dialog());
  plantConsent("granted");
  await act(async () => win.dispatchEvent(new win.Event("focus")));
  assert.equal(isOpen(), false);
  assert.equal(amplitudeCalls.filter((c) => c.fn === "init").length, 1);
  assert.deepEqual(scripts().sort(), [CS_SRC, FBQ_SRC].sort());
});

test("a tab that picks up another tab's accept records one page view for the page it is on", async () => {
  await mount(createElement(App));
  plantConsent("granted");
  await act(async () => win.dispatchEvent(new win.Event("focus")));
  await act(async () => win.dispatchEvent(new win.Event("focus")));
  const views = amplitudeCalls.filter((c) => c.fn === "track");
  assert.equal(views.length, 1);
  assert.deepEqual(
    [views[0].args[0], (views[0].args[1] as { page_path: string }).page_path],
    ["Page Viewed", "/about"],
  );
});

test("a returning visitor who accepted gets Amplitude started once and no extra page view from the banner", async () => {
  plantConsent("granted");
  await mount(createElement(App));
  assert.equal(amplitudeCalls.filter((c) => c.fn === "init").length, 1);
  assert.equal(amplitudeCalls.filter((c) => c.fn === "track").length, 0);
});

test("Accept records exactly one page view", async () => {
  await mount(createElement(App));
  await click(button("Accept"));
  assert.equal(amplitudeCalls.filter((c) => c.fn === "track").length, 1);
});

test("rejecting before Amplitude started never sends an opt-out to the SDK", () => {
  consent.setConsent("denied");
  trackers.enforceDenied();
  assert.equal(amplitudeCalls.filter((c) => c.fn === "setOptOut").length, 0);
});

test("accepting clears an opt-out the SDK already stored from an earlier visit", () => {
  sdk.persistedOptOut = true;
  consent.setConsent("granted");
  analytics.initializeAnalytics();
  assert.equal(sdk.optOut, false);
});

test("the banner removes every listener it adds when it unmounts", async () => {
  listenerLog.length = 0;
  const view = await mount(createElement(App));
  await view.unmount();
  mounted.splice(mounted.indexOf(view as never), 1);
  const net = new Map<string, number>();
  for (const entry of listenerLog) {
    const key = entry.slice(1);
    net.set(key, (net.get(key) ?? 0) + (entry[0] === "+" ? 1 : -1));
  }
  const leaked = [...net].filter(([key, n]) => n > 0 && /keydown|pointerdown|focus|visibilitychange|consent/.test(key));
  assert.deepEqual(leaked, []);
  for (const key of ["window:keydown", "window:pointerdown", "window:focus", "document:visibilitychange"]) {
    assert.ok(net.has(key), `${key} was registered`);
  }
});


test("a choice made in another tab is picked up when this tab becomes visible, without a focus event", async () => {
  await mount(createElement(App));
  plantConsent("granted");
  await act(async () => win.document.dispatchEvent(new win.Event("visibilitychange")));
  assert.equal(isOpen(), false);
  assert.deepEqual(scripts().sort(), [CS_SRC, FBQ_SRC].sort());
});

test("Escape does not dismiss the banner while no choice has been made", async () => {
  await mount(createElement(App));
  await act(async () =>
    dialog()!.dispatchEvent(new win.KeyboardEvent("keydown", { key: "Escape", bubbles: true })),
  );
  assert.ok(dialog());
  assert.equal(consent.getConsent(), null);
  assert.equal(activeId(), "consent-title");
});

test("a cookie write that throws still records the choice for this page", () => {
  cookiesThrow = true;
  assert.doesNotThrow(() => consent.setConsent("denied"));
  assert.equal(consent.getConsent(), "denied");
});

test("the banner keeps Reject and Accept outside the scrolling text and stays compact", async () => {
  await mount(createElement(App));
  const root = dialog()!;
  assert.match(root.className, /max-h-\[40vh\]/);
  const buttons = button("Reject").parentElement!;
  assert.match(buttons.className, /shrink-0/);
  assert.ok(!root.querySelector("[class*=overflow-y-auto]")!.contains(button("Reject")));
});

const headingClasses = async () => {
  plantConsent("denied");
  await mount(createElement(App));
  await act(async () => consent.openConsentPreferences());
  return win.document.getElementById("consent-title")!.className;
};

const builtCss = async (classes: string) => {
  const require = createRequire(import.meta.url);
  const { compile } = await import("tailwindcss");
  const compiler = await compile('@import "tailwindcss";', {
    base: process.cwd(),
    loadStylesheet: async (id: string, base: string) => {
      const file = id === "tailwindcss" ? require.resolve("tailwindcss/index.css") : path.resolve(base, id);
      return { path: file, base: path.dirname(file), content: readFileSync(file, "utf8") };
    },
  });
  return compiler.build(classes.split(/\s+/).filter(Boolean));
};

const findChrome = () =>
  [
    process.env.CHROME_BIN,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].find((bin) => bin && existsSync(bin));

test("the heading's compiled CSS never forces the outline style to none", async () => {
  const css = await builtCss(await headingClasses());
  assert.doesNotMatch(css, /--tw-outline-style:\s*none/);
});

test("the heading draws a 2px #7a07ec outline for keyboard users and none otherwise, as computed by Chrome", async (t) => {
  const chrome = findChrome();
  if (!chrome) return t.skip("no Chrome binary found (set CHROME_BIN)");
  const classes = await headingClasses();
  const css = await builtCss(classes);
  const dir = mkdtempSync(path.join(tmpdir(), "ring-"));
  const page = path.join(dir, "page.html");
  writeFileSync(
    page,
    `<!doctype html><title></title><style>${css}</style><h2 id="h" tabindex="-1" class="${classes}">x</h2><script>
const h=document.getElementById("h");const r={};
for(const ring of ["true","false"]){h.dataset.ring=ring;const c=getComputedStyle(h);r[ring]={style:c.outlineStyle,width:c.outlineWidth,color:c.outlineColor,offset:c.outlineOffset}}
document.title=JSON.stringify(r);</script>`,
  );
  const out = execFileSync(
    chrome,
    ["--headless=new", "--disable-gpu", "--no-sandbox", `--user-data-dir=${path.join(dir, "profile")}`, "--dump-dom", `file://${page}`],
    { encoding: "utf8", timeout: 60000 },
  );
  const result = JSON.parse(/<title>(.*?)<\/title>/s.exec(out)![1]);
  assert.deepEqual(result.true, {
    style: "solid",
    width: "2px",
    color: "rgb(122, 7, 236)",
    offset: "2px",
  });
  assert.ok(
    result.false.style === "none" ||
      result.false.width === "0px" ||
      result.false.color === "rgba(0, 0, 0, 0)",
    JSON.stringify(result.false),
  );
});
