import { disableAnalytics } from "./analytics.ts";
import { getConsent } from "./consent.ts";

const META_PIXEL_SCRIPT = "https://connect.facebook.net/en_US/fbevents.js";
const CONTENTSQUARE_SCRIPT = "https://t.contentsquare.net/uxa/3c5a706e6e6fd.js";
const CONTENTSQUARE_SCRIPT_ID = "contentsquare-tag";
const TRACKER_COOKIE = /^(_fbp|_fbc|_cs_.*)$/;

type Fbq = {
  (...args: unknown[]): void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
  callMethod?: (...args: unknown[]) => void;
};

export const loadMetaPixel = (pixelId: string) => {
  if (getConsent() !== "granted" || !/^\d+$/.test(pixelId)) return;
  const w = window as unknown as { fbq?: Fbq; _fbq?: Fbq };
  if (w.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  w.fbq = fbq;
  w._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  fbq("set", "autoConfig", false, pixelId);
  fbq("init", pixelId);
  fbq("track", "PageView");
  const script = document.createElement("script");
  script.async = true;
  script.src = META_PIXEL_SCRIPT;
  document.head.appendChild(script);
};

export const loadContentsquare = () => {
  if (getConsent() !== "granted") return;
  if (document.getElementById(CONTENTSQUARE_SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = CONTENTSQUARE_SCRIPT_ID;
  script.async = true;
  script.src = CONTENTSQUARE_SCRIPT;
  document.head.appendChild(script);
};

const cookieDomains = (): (string | undefined)[] => {
  const labels = location.hostname.split(".");
  const domains: (string | undefined)[] = [undefined];
  for (let i = 0; i < labels.length - 1; i++) {
    const suffix = labels.slice(i).join(".");
    domains.push(suffix, `.${suffix}`);
  }
  return domains;
};

const purgeTrackerCookies = () => {
  try {
    const names = document.cookie
      .split(";")
      .map((part) => part.split("=")[0].trim())
      .filter((name) => TRACKER_COOKIE.test(name));
    for (const name of names) {
      for (const domain of cookieDomains()) {
        const scope = domain ? `; domain=${domain}` : "";
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${scope}`;
      }
    }
  } catch {
    return;
  }
};

export const withdrawTrackers = () => {
  disableAnalytics();
  purgeTrackerCookies();
};
