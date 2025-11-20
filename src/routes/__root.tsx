import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <div className="flex min-h-dvh min-w-dvw flex-col gap-y-[61px]">
    <div className="flex flex-1 flex-col">
      <Outlet />
    </div>
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
