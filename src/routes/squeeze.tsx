import { createFileRoute, Link } from "@tanstack/react-router";
import SqueezeFeaturesSection from "../components/SqueezeFeatures";
import SqueezeHero from "../components/SqueezeHero";

export const Route = createFileRoute("/squeeze")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <main className="mx-auto mb-20 max-w-7xl px-5 md:px-10">
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
        <SqueezeFeaturesSection />
      </main>
    </div>
  );
}
