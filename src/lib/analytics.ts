import * as amplitude from "@amplitude/analytics-browser";

// Initialize Amplitude
export const initializeAnalytics = () => {
  const apiKey = import.meta.env.VITE_AMPLITUDE_API_KEY;

  if (!apiKey) {
    console.warn("Amplitude API key not found. Analytics will not be tracked.");
    return;
  }

  try {
    amplitude.init(apiKey, {
      defaultTracking: {
        sessions: true,
        pageViews: false, // We'll handle page views manually with router
        formInteractions: false,
        fileDownloads: false,
      },
    });
    console.log("Amplitude initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Amplitude:", error);
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

// Identify user by email or ID
export const identifyUser = (
  userId: string,
  userProperties?: Record<string, any>,
) => {
  try {
    amplitude.setUserId(userId);
    if (userProperties) {
      setUserProperties(userProperties);
    }
  } catch (error) {
    console.error("Failed to identify user:", error);
  }
};

// Waitlist-specific tracking functions
export const trackWaitlistFormViewed = () => {
  trackEvent("Waitlist Form Viewed", {
    timestamp: new Date().toISOString(),
  });
};

export const trackWaitlistSignup = (name: string, email: string) => {
  // Identify the user
  identifyUser(email, {
    name,
    email,
    signup_date: new Date().toISOString(),
  });

  // Track the signup event
  trackEvent("Waitlist Signup Completed", {
    name,
    email,
    timestamp: new Date().toISOString(),
  });
};

export const trackWaitlistSignupError = (error: string) => {
  trackEvent("Waitlist Signup Error", {
    error_message: error,
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
