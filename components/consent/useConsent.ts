"use client";

import { useSyncExternalStore } from "react";
import { getConsent, subscribeConsent, type ConsentChoice } from "../../lib/consent";

export type ConsentState = ConsentChoice | "unset" | "pending";

const getSnapshot = (): ConsentState => getConsent() ?? "unset";
const getServerSnapshot = (): ConsentState => "pending";

export const useConsent = (): ConsentState =>
  useSyncExternalStore(subscribeConsent, getSnapshot, getServerSnapshot);
