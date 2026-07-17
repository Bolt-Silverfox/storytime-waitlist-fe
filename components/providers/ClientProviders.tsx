"use client";

import { Toaster } from "sonner";
import { SqueezeProvider } from "../../contexts/SqueezeContext";
import { useEffect } from "react";
import { trackPageView, initializeAnalytics } from "../../lib/analytics";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import BackToTopButton from "../../components/BackToTopButton";
import { usePathname } from "next/navigation";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname) {
      trackPageView(pathname, document.title);
    }
  }, [pathname]);

  return (
    <SqueezeProvider>
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <BackToTopButton />
        <Footer />
      </div>
      <Toaster />
    </SqueezeProvider>
  );
}
