import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-dvh max-w-dvw flex-col">
      <Header />
      <div className="flex w-full flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
