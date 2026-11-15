export const DEFAULT_SITE_URL = "https://waitlist.storytimeapp.me";

const resolveSiteUrl = (override: string | undefined) => {
  if (!override) return DEFAULT_SITE_URL;
  try {
    const url = new URL(override);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.origin
      : DEFAULT_SITE_URL;
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const SITE_URL = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const IS_PRODUCTION_SITE = SITE_URL === DEFAULT_SITE_URL;
