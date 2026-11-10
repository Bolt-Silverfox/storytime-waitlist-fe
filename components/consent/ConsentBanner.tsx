"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useConsent } from "./useConsent";
import { initializeAnalytics, trackPageView } from "../../lib/analytics";
import { setConsent, subscribeConsentPreferences } from "../../lib/consent";
import { enforceDenied } from "../../lib/trackers";

const choiceButtonClass =
  "bg-dark min-w-32 cursor-pointer rounded-full px-6 py-3 font-abezee text-base text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a07ec]";

export default function ConsentBanner() {
  const consent = useConsent();
  const pathname = usePathname();
  const [reopened, setReopened] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (consent === "denied") enforceDenied();
  }, [consent]);

  useEffect(
    () =>
      subscribeConsentPreferences(() => {
        returnFocusTo.current = document.activeElement as HTMLElement | null;
        setReopened(true);
      }),
    [],
  );

  const visible = consent === "unset" || (reopened && consent !== "pending");

  useEffect(() => {
    if (visible) headingRef.current?.focus();
  }, [visible]);

  const close = () => {
    setReopened(false);
    const target =
      returnFocusTo.current ?? document.getElementById("main-content");
    returnFocusTo.current = null;
    target?.focus();
  };

  const accept = () => {
    const alreadyGranted = consent === "granted";
    setConsent("granted");
    if (!alreadyGranted) {
      initializeAnalytics();
      if (pathname) trackPageView(pathname, document.title);
    }
    close();
  };

  const reject = () => {
    setConsent("denied");
    close();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
      onKeyDown={(event) => {
        if (event.key === "Escape" && consent !== "unset") close();
      }}
      className="text-text-dark fixed inset-x-0 bottom-0 z-40 max-h-[70vh] overflow-y-auto border-t-2 border-black/10 bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-y-2">
          <h2
            id="consent-title"
            ref={headingRef}
            tabIndex={-1}
            className="font-Qilka text-base font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a07ec]"
          >
            Your cookie choice
          </h2>
          <p id="consent-description" className="font-abezee text-sm leading-6">
            With your permission we load Amplitude (analytics), Meta Pixel (ad
            measurement) and Contentsquare (session replays). They may set
            cookies and send details of your visit to those companies. None
            load until you accept, and the waitlist form works either way.
            Sentry (errors and performance) is not affected by this choice. We
            keep your choice for 6 months; change it with Cookie settings in
            the footer.{" "}
            <Link href="/privacy-policy" className="text-secondary underline">
              Read the privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-row gap-3">
          <button type="button" className={choiceButtonClass} onClick={reject}>
            Reject
          </button>
          <button type="button" className={choiceButtonClass} onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
