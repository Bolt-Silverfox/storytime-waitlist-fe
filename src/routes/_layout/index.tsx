import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import WhatWeOffer from "../../components/WhatWeOffer";
import Categories from "../../components/Categories";
import Details from "../../components/Details";
import ParentalControls from "../../components/ParentalControl";
import Features from "../../components/Features";
import Testimonial from "../../components/Testimonial";
import Questions from "../../components/Questions";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";
import DownloadModal from "../../components/DownloadModal";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const openDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-7xl px-4">
        <WhatWeOffer />
        <Categories />
        <Details openDownloadModal={openDownloadModal} />
        <ParentalControls openDownloadModal={openDownloadModal} />
        <Features openDownloadModal={openDownloadModal} />
        <Testimonial />
        <Questions />
      </div>
      <CTASection />
      {isDownloadModalOpen && (
        <DownloadModal onClose={() => setIsDownloadModalOpen(false)} />
      )}
    </>
  );
}
