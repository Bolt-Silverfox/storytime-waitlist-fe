import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <div className="overflow-x-hidden w-full min-h-dvh flex flex-col gap-y-[61px]">
    <Outlet />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
