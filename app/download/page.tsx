"use client";

import { useEffect } from "react";
import Link from "next/link";
import DownloadButtons from "../../components/DownloadButtons";

// Store links (kept in sync with components/DownloadButtons.tsx).
const APP_STORE_URL =
  "https://apps.apple.com/ng/app/storytime-books-quizzes/id6756060805";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=net.emerj.storytime";

// Single URL for the QR code (storytimeapp.me/download). A phone that scans it
// is sent straight to its own store; desktops see both options. This is why the
// QR is ours and not a paid redirect service — the routing lives here.
export default function DownloadPage() {
  useEffect(() => {
    const ua = navigator.userAgent || "";
    // Desktop-class Safari on iPadOS reports a macOS-like UA (no "iPad" token),
    // so it's only distinguishable by touch support. Treat that as iPad.
    const isIpadOsDesktop =
      /macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
    if (/android/i.test(ua)) {
      window.location.replace(PLAY_STORE_URL);
    } else if (/iphone|ipad|ipod/i.test(ua) || isIpadOsDesktop) {
      window.location.replace(APP_STORE_URL);
    }
    // Desktop / unknown: no redirect — the store buttons below are shown.
  }, []);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 bg-white px-6 text-center">
      <Link href="/">
        <img
          src="/icons/new-logo-blue.svg"
          alt="Storytime logo"
          className="h-16 w-[178px]"
        />
      </Link>
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-Qilka text-2xl font-bold text-[#212121] md:text-3xl">
          Download Storytime
        </h1>
        <p className="font-abezee max-w-md text-base text-[#4F4C4B] md:text-lg">
          Choose your app store to download the Storytime App.
        </p>
      </div>
      {/* The store buttons are the fallback whenever the redirect doesn't run
          (desktop, no-JS, or a store the UA check missed). On phones the
          redirect above navigates away before this matters. */}
      <DownloadButtons color="dark" />
    </div>
  );
}
