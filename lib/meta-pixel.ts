"use client";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Debug logging helper
const debugLog = (...args: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log("[MetaPixel]", ...args);
  }
};

/**
 * Hash an identifier with SHA-256 (lowercase + trim) for Meta Advanced Matching.
 * See https://www.facebook.com/business/help/your-pixel-and-advanced-matching
 */
async function hashForAdvancedMatching(value: string | undefined) {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  const data = new TextEncoder().encode(normalized);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

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

/**
 * Waitlist signup tracking. Email and name are forwarded to Meta via Advanced
 * Matching (fbq("init", id, {em, fn})) with SHA-256 hashes so plaintext
 * identifiers never leave the browser. The CompleteRegistration event itself
 * carries only non-PII parameters.
 */
export const trackWaitlistSignup = async (email: string, name?: string) => {
  if (
    typeof window !== "undefined" &&
    (window as any).fbq &&
    FB_PIXEL_ID
  ) {
    const advancedMatching: Record<string, string> = {};
    try {
      const em = await hashForAdvancedMatching(email);
      const fn = await hashForAdvancedMatching(name);
      if (em) advancedMatching.em = em;
      if (fn) advancedMatching.fn = fn;
      if (Object.keys(advancedMatching).length > 0) {
        (window as any).fbq("init", FB_PIXEL_ID, advancedMatching);
      }
    } catch (error) {
      // Advanced Matching is best-effort; the CompleteRegistration event
      // below must still fire even if hashing fails (e.g. not in a secure
      // context, or crypto.subtle is unavailable).
      debugLog("Error setting Advanced Matching:", error);
    }
  }

  trackCompleteRegistration({
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