import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import AdminHeader from "../../../components/admin/AdminHeader";

export const Route = createFileRoute("/admin/dashboard")({
  component: RouteComponent,
  beforeLoad: ({ location }) => {
    if (
      location.pathname === "/admin/dashboard" ||
      location.pathname === "/admin/dashboard/"
    ) {
      throw redirect({
        to: "/admin/dashboard/overview",
      });
    }
  },
});

function RouteComponent() {
  return (
    <div className="flex min-h-dvh min-w-dvw flex-col gap-y-6 px-4">
      <AdminHeader />
      <main className="mx-auto flex w-full max-w-[1376px] flex-1">
        <Outlet />
      </main>
    </div>
  );
}
