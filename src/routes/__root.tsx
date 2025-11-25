import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <div className="flex min-h-dvh w-full max-w-dvw flex-col gap-y-[61px]">
    <Outlet />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
