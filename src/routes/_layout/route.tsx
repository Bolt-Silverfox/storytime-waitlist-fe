import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-dvh min-w-dvw flex-col gap-y-[61px]">
      <Header />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
