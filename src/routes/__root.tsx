import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SqueezeProvider } from "../contexts/SqueezeContext";

const RootLayout = () => (
  <SqueezeProvider>
    <div className="flex min-h-dvh w-full max-w-dvw flex-col">
      <Outlet />
    </div>
    <Toaster />
  </SqueezeProvider>
);

export const Route = createRootRoute({ component: RootLayout });
