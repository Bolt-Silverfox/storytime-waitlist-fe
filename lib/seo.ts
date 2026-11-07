import type { Metadata, Viewport } from "next";
import { SITE_URL } from "./site.ts";

export const DEFAULT_TITLE = "Storytime | Interactive Stories for Kids";
const DEFAULT_DESCRIPTION =
  "Join the early access list for Storytime, an interactive storytelling app with animated stories and AI read-along voices for kids.";
const SHARE_IMAGE = "/og-image.jpg";

export const THEME_COLOR = "#ec4007";

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "kids stories",
    "interactive stories",
    "AI voices",
    "children books",
    "storytelling app",
  ],
  authors: [{ name: "Storytime" }],
  creator: "Storytime",
  publisher: "Storytime",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: "Storytime",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Storytime - Interactive Stories for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
};
