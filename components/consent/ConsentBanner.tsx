"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useConsent } from "./useConsent";
import { startAnalyticsOnce, trackPageView } from "../../lib/analytics";
import { setConsent, subscribeConsentPreferences } from "../../lib/consent";
import { enforceDenied } from "../../lib/trackers";

const choiceButtonClass =
  "bg-dark min-w-32 cursor-pointer rounded-full px-6 py-2 font-abezee md:py-3 text-base text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a07ec]";

export default function ConsentBanner() {
  const consent = useConsent();
  const pathname = usePathname();
  const [reopened, setReopened] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);
  const keyboardInUse = useRef(false);

  useEffect(() => {
    if (consent === "denied") enforceDenied();
    if (consent === "granted") startAnalyticsOnce();
  }, [consent]);

  useEffect(() => {
    const onKey = () => {
      keyboardInUse.current = true;
    };
    const onPointer = () => {
      keyboardInUse.current = false;
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

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
    const heading = headingRef.current;
    if (!visible || !heading) return;
    heading.dataset.ring = String(keyboardInUse.current);
    heading.focus();
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
    startAnalyticsOnce();
    if (!alreadyGranted) {
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
      className="text-text-dark fixed inset-x-0 bottom-0 z-40 flex max-h-[40vh] flex-col border-t-2 border-black/10 bg-white p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:p-6"
    >
      <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-col gap-3 md:gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-h-0 flex-col gap-y-2 overflow-y-auto">
          <h2
            id="consent-title"
            ref={headingRef}
            tabIndex={-1}
            className="font-Qilka text-base font-bold outline-none data-[ring=true]:outline-2 data-[ring=true]:outline-offset-2 data-[ring=true]:outline-[#7a07ec]"
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
