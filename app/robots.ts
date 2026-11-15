import type { MetadataRoute } from "next";
import { IS_PRODUCTION_SITE, SITE_URL } from "../lib/site.ts";

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION_SITE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/.next/", "/node_modules/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
