import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SqueezeProvider } from "../contexts/SqueezeContext";
import { useEffect } from "react";
import { trackPageView } from "../lib/analytics";

const RootLayout = () => {
  // Track page views on navigation
  useEffect(() => {
    trackPageView(window.location.pathname, document.title);
  }, []);

  return (
    <SqueezeProvider>
      <div className="flex min-h-dvh w-full max-w-dvw flex-col">
        <Outlet />
      </div>
      <Toaster />
    </SqueezeProvider>
  );
};

export const Route = createRootRoute({ component: RootLayout });
