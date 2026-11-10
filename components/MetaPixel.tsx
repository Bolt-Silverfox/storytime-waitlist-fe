"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useConsent } from "./consent/useConsent";
import { loadMetaPixel } from "../lib/trackers";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function MetaPixel() {
  const consent = useConsent();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsKey = searchParams?.toString() ?? "";
  const isValidPixelId = !!FB_PIXEL_ID && /^\d+$/.test(FB_PIXEL_ID);
  const hasTrackedInitialRender = useRef(false);

  useEffect(() => {
    if (consent === "granted" && isValidPixelId) loadMetaPixel(FB_PIXEL_ID);
  }, [consent, isValidPixelId]);

  useEffect(() => {
    if (consent !== "granted" || !isValidPixelId) return;
    if (!hasTrackedInitialRender.current) {
      hasTrackedInitialRender.current = true;
      return;
    }
    const fbq = (window as { fbq?: (...args: unknown[]) => void }).fbq;
    try {
      fbq?.("track", "PageView");
    } catch {
      return;
    }
  }, [consent, pathname, searchParamsKey, isValidPixelId]);

  return null;
}
