const DEFAULT_SITE_URL = "https://waitlist.storytimeapp.me";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
).replace(/\/+$/, "");
