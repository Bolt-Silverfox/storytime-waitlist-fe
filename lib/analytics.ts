import * as amplitude from "@amplitude/analytics-browser";
import { getConsent } from "./consent.ts";

const ANON_ID_KEY = "st_anon_id";

const expireCookie = (name: string, domain?: string) => {
  const scope = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${scope}`;
};

const AMP_COOKIE = /^AMP_(?!MKTG|TEST)/;

const readAmplitudeCookies = () =>
  document.cookie
    .split(";")
    .map((part) => {
      const eq = part.indexOf("=");
      return { name: part.slice(0, eq).trim(), value: part.slice(eq + 1).trim() };
    })
    .filter(({ name }) => AMP_COOKIE.test(name));

const purgeAmplitudeCookies = () => {
  try {
    const labels = location.hostname.split(".");
    const domains: (string | undefined)[] = [undefined];
    for (let i = 0; i < labels.length - 1; i++) {
      const suffix = labels.slice(i).join(".");
      domains.push(suffix, `.${suffix}`);
    }
    const names = document.cookie
      .split(";")
      .map((part) => part.split("=")[0].trim())
      .filter((name) => name.startsWith("AMP_"));
    for (const name of names) {
      for (const domain of domains) expireCookie(name, domain);
    }
  } catch {
    return;
  }
};

const purgeAmplitudeStorage = () => {
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("AMP_")) keys.push(key);
    }
    keys.forEach((key) => localStorage.removeItem(key));
  } catch {
    return;
  }
};

const purgeAmplitudeState = () => {
  purgeAmplitudeCookies();
  purgeAmplitudeStorage();
};

const EMAIL_SHAPED = /[^\s"@%]+(@|%40)[^\s"@%]+\.[a-z]{2,}/i;
const PAGE_LOCATION_KEY = "[Amplitude] Page Location";

const unsentQueueHoldsOtherUser = (anonymousId: string) => {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key?.startsWith("AMP_unsent_")) continue;
      try {
        const raw = localStorage.getItem(key) ?? "[]";
        if (EMAIL_SHAPED.test(raw) || raw.includes(PAGE_LOCATION_KEY)) return true;
        const events: unknown = JSON.parse(raw);
        if (!Array.isArray(events)) return true;
        const foreign = events.some((event) => {
          const userId = (event as { user_id?: unknown } | null)?.user_id;
          return Boolean(userId) && userId !== anonymousId;
        });
        if (foreign) return true;
      } catch {
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
};

const decodeCookieUserId = (value: string): unknown => {
  try {
    return JSON.parse(value).userId;
  } catch {
    return JSON.parse(decodeURIComponent(atob(value))).userId;
  }
};

const cookieHoldsOtherUser = (anonymousId: string | undefined) => {
  try {
    return readAmplitudeCookies().some(({ value }) => {
      try {
        const userId = decodeCookieUserId(value);
        return Boolean(userId) && userId !== anonymousId;
      } catch {
        return true;
      }
    });
  } catch {
    return false;
  }
};

const createAnonymousId = (): string => {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
};

const getAnonymousId = (): string | undefined => {
  let stored: string | null | undefined;
  try {
    stored = localStorage.getItem(ANON_ID_KEY);
  } catch {
    stored = undefined;
  }
  if (stored) {
    if (cookieHoldsOtherUser(stored)) purgeAmplitudeState();
    else if (unsentQueueHoldsOtherUser(stored)) purgeAmplitudeStorage();
    return stored;
  }
  if (stored === undefined) {
    if (cookieHoldsOtherUser(undefined)) purgeAmplitudeState();
    return undefined;
  }
  try {
    const id = createAnonymousId();
    localStorage.setItem(ANON_ID_KEY, id);
    purgeAmplitudeState();
    return id;
  } catch {
    purgeAmplitudeStorage();
    if (cookieHoldsOtherUser(undefined)) purgeAmplitudeCookies();
    return undefined;
  }
};

const consentGiven = () => getConsent() === "granted";

const attempt = (action: () => void) => {
  try {
    action();
  } catch {
    return;
  }
};

let started = false;

export const isAnalyticsStarted = () => started;

export const disableAnalytics = () => {
  started = false;
  attempt(() => amplitude.setOptOut(true));
  purgeAmplitudeState();
  attempt(() => localStorage.removeItem(ANON_ID_KEY));
};

export const initializeAnalytics = () => {
  if (!consentGiven()) return;
  const apiKey = "e48a8fa48803c43c9e5e3888517e897c";

  if (!apiKey) {
    console.warn("Amplitude API key not found. Analytics will not be tracked.");
    return;
  }

  try {
    const anonymousId = getAnonymousId();
    amplitude.init(apiKey, anonymousId, {
      autocapture: {
        sessions: true,
        pageViews: false,
        formInteractions: false,
        fileDownloads: false,
        pageUrlEnrichment: false,
        attribution: false,
      },
      fetchRemoteConfig: false,
      // Reduce logging in development to avoid spam from adblockers
      logLevel:
        process.env.NODE_ENV === "development"
          ? amplitude.Types.LogLevel.None
          : amplitude.Types.LogLevel.Warn,
    });
    amplitude.setUserId(anonymousId);
    started = true;
    console.log("Amplitude initialized successfully");
  } catch (error) {
    if (process.env.NODE_ENV === "production") {
      console.error("Failed to initialize Amplitude:", error);
    }
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
   
  eventProperties?: Record<string, any>,
) => {
  if (!consentGiven()) return;
  try {
    amplitude.track(eventName, eventProperties);
  } catch (error) {
    console.error("Failed to track event:", error);
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (!consentGiven()) return;
  try {
    amplitude.track("Page Viewed", {
      page_path: pagePath,
      page_title: pageTitle || document.title,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Failed to track page view:", error);
  }
};

// Set user properties
 
export const setUserProperties = (properties: Record<string, any>) => {
  if (!consentGiven()) return;
  try {
    const identifyEvent = new amplitude.Identify();
    Object.entries(properties).forEach(([key, value]) => {
      identifyEvent.set(key, value);
    });
    amplitude.identify(identifyEvent);
  } catch (error) {
    console.error("Failed to set user properties:", error);
  }
};

// Waitlist-specific tracking functions
export const trackWaitlistFormViewed = () => {
  trackEvent("Waitlist Form Viewed", {
    timestamp: new Date().toISOString(),
  });
};

export const trackWaitlistSignup = () => {
  trackEvent("Waitlist Signup Completed", {
    timestamp: new Date().toISOString(),
  });
};

export const trackWaitlistSignupError = () => {
  trackEvent("Waitlist Signup Error", {
    error_category: "signup_failed",
    timestamp: new Date().toISOString(),
  });
};

// CTA tracking
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent("CTA Clicked", {
    cta_name: ctaName,
    cta_location: ctaLocation,
    timestamp: new Date().toISOString(),
  });
};
