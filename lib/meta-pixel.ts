"use client";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Debug logging helper
const debugLog = (...args: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log("[MetaPixel]", ...args);
  }
};

// Track custom events
export const trackMetaPixelEvent = (
  eventName: string,
  params?: Record<string, any>,
) => {
  if (!FB_PIXEL_ID) {
    debugLog("No pixel ID configured for event tracking", eventName);
    return;
  }

  if (typeof window !== "undefined" && (window as any).fbq) {
    try {
      if (params) {
        (window as any).fbq("track", eventName, params);
      } else {
        (window as any).fbq("track", eventName);
      }
      debugLog("Tracked event:", eventName, params);
    } catch (error) {
      debugLog("Error tracking event:", error);
    }
  } else {
    debugLog("fbq not available for event:", eventName);
  }
};

// Standard Meta Pixel events
export const trackLead = (params?: Record<string, any>) => {
  trackMetaPixelEvent("Lead", params);
};

export const trackCompleteRegistration = (params?: Record<string, any>) => {
  trackMetaPixelEvent("CompleteRegistration", params);
};

export const trackViewContent = (params?: Record<string, any>) => {
  trackMetaPixelEvent("ViewContent", params);
};

export const trackAddToCart = (params?: Record<string, any>) => {
  trackMetaPixelEvent("AddToCart", params);
};

export const trackPurchase = (params?: Record<string, any>) => {
  trackMetaPixelEvent("Purchase", params);
};

// Standard events for waitlist
export const trackWaitlistSignup = (email: string, name?: string) => {
  trackCompleteRegistration({
    email,
    ...(name && { name }),
    content_name: "Waitlist Signup",
    status: true,
  });
};

export const trackWaitlistFormView = () => {
  trackViewContent({
    content_name: "Waitlist Form",
    content_category: "engagement",
  });
};