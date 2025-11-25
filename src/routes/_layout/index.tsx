import { createFileRoute } from "@tanstack/react-router";
import WhatWeOffer from "../../components/WhatWeOffer";
import Categories from "../../components/Categories";
import Details from "../../components/Details";
import ParentalControls from "../../components/ParentalControl";
import Features from "../../components/Features";
import Testimonial from "../../components/Testimonial";
import Questions from "../../components/Questions";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-7xl px-4">
        <WhatWeOffer />
        <Categories />
        <Details />
        <ParentalControls />
        <Features />
        <Testimonial />
        <Questions />
      </div>
      <CTASection />
    </>
  );
}
