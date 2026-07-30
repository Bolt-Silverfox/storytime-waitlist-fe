"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Debug logging helper
const debugLog = (...args: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log("[MetaPixel]", ...args);
  }
};

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsKey = searchParams?.toString() ?? "";
  const isValidPixelId = !!FB_PIXEL_ID && /^\d+$/.test(FB_PIXEL_ID);

  debugLog("Init check", {
    hasPixelId: !!FB_PIXEL_ID,
    pixelId: FB_PIXEL_ID,
    isValidPixelId,
    env: process.env.NODE_ENV,
  });

  const hasTrackedInitialRender = useRef(false);

  useEffect(() => {
    if (!isValidPixelId) {
      debugLog("Invalid pixel ID, skipping");
      return;
    }

    if (!hasTrackedInitialRender.current) {
      debugLog("Initial render - marking hasTrackedInitialRender");
      hasTrackedInitialRender.current = true;
      return;
    }

    debugLog("Tracking PageView for path:", pathname);

    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "PageView");
        debugLog("PageView tracked");
      } catch (error) {
        debugLog("Error tracking PageView:", error);
      }
    } else {
      debugLog("fbq not available on window");
    }
  }, [pathname, searchParamsKey, isValidPixelId]);

  // Warn in development if pixel ID is missing
  if (process.env.NODE_ENV === "development" && !FB_PIXEL_ID) {
    console.warn(
      "[MetaPixel] NEXT_PUBLIC_META_PIXEL_ID is not set. Meta Pixel will not load.",
    );
  }

  if (!isValidPixelId) return null;

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
