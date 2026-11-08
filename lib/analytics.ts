import * as amplitude from "@amplitude/analytics-browser";

const ANON_ID_KEY = "st_anon_id";

const expireCookie = (name: string, domain?: string) => {
  const scope = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${scope}`;
};

const clearAmplitudeState = () => {
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

const getAnonymousId = (): string | undefined => {
  try {
    const existing = localStorage.getItem(ANON_ID_KEY);
    if (existing) return existing;
    clearAmplitudeState();
    const id = crypto.randomUUID();
    localStorage.setItem(ANON_ID_KEY, id);
    return id;
  } catch {
    return undefined;
  }
};

export const initializeAnalytics = () => {
  const apiKey = "e48a8fa48803c43c9e5e3888517e897c";

  if (!apiKey) {
    console.warn("Amplitude API key not found. Analytics will not be tracked.");
    return;
  }

  try {
    const anonymousId = getAnonymousId();
    amplitude.init(apiKey, anonymousId, {
      defaultTracking: {
        sessions: true,
        pageViews: false,
        formInteractions: false,
        fileDownloads: false,
      },
      // Reduce logging in development to avoid spam from adblockers
      logLevel:
        process.env.NODE_ENV === "development"
          ? amplitude.Types.LogLevel.None
          : amplitude.Types.LogLevel.Warn,
    });
    amplitude.setUserId(anonymousId);
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
  try {
    amplitude.track(eventName, eventProperties);
  } catch (error) {
    console.error("Failed to track event:", error);
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle?: string) => {
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
