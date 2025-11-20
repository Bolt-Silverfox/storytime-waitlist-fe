import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => (
  <div className="flex min-h-dvh min-w-dvw flex-col gap-y-[61px]">
    <Header />
    <div className="flex flex-1 flex-col">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
