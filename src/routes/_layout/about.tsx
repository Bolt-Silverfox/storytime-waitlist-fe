import { createFileRoute } from "@tanstack/react-router";
import AboutHero from "../../components/about/AboutHero";
import CTASection from "../../components/CTASection";
import AboutDetails from "../../components/about/AboutDetails";
import Mission from "../../components/about/Mission";
import Intentions from "../../components/about/Intentions";

export const Route = createFileRoute("/_layout/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AboutHero />

      <div className="mx-auto max-w-7xl px-4">
        <AboutDetails />
        <Mission />
        <Intentions />
      </div>

      <CTASection />
    </>
  );
}
