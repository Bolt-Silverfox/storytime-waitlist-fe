export type ConsentChoice = "granted" | "denied";

const COOKIE_NAME = "st_consent";
const MAX_AGE_SECONDS = 180 * 24 * 60 * 60;
const CHANGE_EVENT = "st:consent-change";
const OPEN_EVENT = "st:consent-open";

let fallbackChoice: ConsentChoice | null = null;

const readCookie = (name: string): string | null => {
  try {
    for (const part of document.cookie.split(";")) {
      const eq = part.indexOf("=");
      if (part.slice(0, eq).trim() === name) return part.slice(eq + 1).trim();
    }
  } catch {
    return null;
  }
  return null;
};

export const getConsent = (): ConsentChoice | null => {
  if (typeof document === "undefined") return null;
  const value = readCookie(COOKIE_NAME);
  return value === "granted" || value === "denied" ? value : fallbackChoice;
};

export const setConsent = (choice: ConsentChoice) => {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${choice}; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
  fallbackChoice = readCookie(COOKIE_NAME) === choice ? null : choice;
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

export const subscribeConsent = (onChange: () => void) => {
  const onVisible = () => {
    if (document.visibilityState === "visible") onChange();
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("focus", onChange);
  document.addEventListener("visibilitychange", onVisible);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("focus", onChange);
    document.removeEventListener("visibilitychange", onVisible);
  };
};

export const openConsentPreferences = () => {
  window.dispatchEvent(new Event(OPEN_EVENT));
};

export const subscribeConsentPreferences = (onOpen: () => void) => {
  window.addEventListener(OPEN_EVENT, onOpen);
  return () => window.removeEventListener(OPEN_EVENT, onOpen);
};
