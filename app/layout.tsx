import type { Metadata } from "next";
import ClientProviders from "../components/providers/ClientProviders";
import "../index.css";

export const metadata: Metadata = {
  title: "Storytime | Interactive Stories for Kids",
  description:
    "Join the early access list for Storytime, an interactive storytelling app with animated stories and AI read-along voices for kids.",
  icons: {
    icon: "/favicon.png",
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
