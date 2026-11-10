"use client";

import { useEffect } from "react";
import { useConsent } from "./consent/useConsent";
import { loadContentsquare } from "../lib/trackers";

export default function ContentsquareTag() {
  const consent = useConsent();

  useEffect(() => {
    if (consent === "granted") loadContentsquare();
  }, [consent]);

  return null;
}
