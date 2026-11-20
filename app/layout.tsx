import type { Metadata } from "next";
import { Suspense } from "react";
import ClientProviders from "../components/providers/ClientProviders";
import { rootMetadata, viewport } from "../lib/seo.ts";
import MetaPixel from "../components/MetaPixel";
import "../index.css";

export const metadata: Metadata = rootMetadata;
export { viewport };

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
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}
