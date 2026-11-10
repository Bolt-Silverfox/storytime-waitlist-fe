import type { Metadata } from "next";
import { Suspense } from "react";
import ClientProviders from "../components/providers/ClientProviders";
import { rootMetadata, viewport } from "../lib/seo.ts";
import MetaPixel from "../components/MetaPixel";
import ContentsquareTag from "../components/ContentsquareTag";
import ConsentBanner from "../components/consent/ConsentBanner";
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
      <body>
        <ClientProviders>{children}</ClientProviders>
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <ContentsquareTag />
        <ConsentBanner />
      </body>
    </html>
  );
}
