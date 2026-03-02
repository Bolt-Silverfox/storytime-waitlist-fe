import type { Metadata } from "next";
import ClientProviders from "../components/providers/ClientProviders";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://storytime.app"),
  title: "Storytime | Interactive Stories for Kids",
  description:
    "Join the early access list for Storytime, an interactive storytelling app with animated stories and AI read-along voices for kids.",
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
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://storytime.app",
    title: "Storytime | Interactive Stories for Kids",
    description:
      "Join the early access list for Storytime, an interactive storytelling app with animated stories and AI read-along voices for kids.",
    siteName: "Storytime",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Storytime - Interactive Stories for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storytime | Interactive Stories for Kids",
    description:
      "Join the early access list for Storytime, an interactive storytelling app with animated stories and AI read-along voices for kids.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://storytime.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://t.contentsquare.net/uxa/3c5a706e6e6fd.js"
          async
        ></script>
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
