import { createFileRoute, Link } from "@tanstack/react-router";
import SqueezeHero from "../components/SqueezeHero";
import SqueezeBed from "../components/SqueezeBed";
import SqueezeBuilt from "../components/SqueezeBuilt";
import SqueezeGrow from "../components/SqueezeGrow";

export const Route = createFileRoute("/squeeze")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <main className="">
        <header className="flex flex-row items-center justify-center bg-white py-8">
          <Link to="/">
            <img
              src="/icons/new-logo-blue.svg"
              alt="storytime logo image"
              className="block h-16 w-[178px]"
            />
          </Link>{" "}
        </header>
        <SqueezeHero />
        <SqueezeBed />
        <SqueezeBuilt />
        <SqueezeGrow />
        {/* <SqueezeFeaturesSection /> */}
      </main>
    </div>
  );
}
