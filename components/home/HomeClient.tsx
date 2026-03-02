"use client";

import { useState } from "react";
import WhatWeOffer from "../WhatWeOffer";
import Categories from "../Categories";
import Details from "../Details";
import ParentalControls from "../ParentalControl";
import Features from "../Features";
import Testimonial from "../Testimonial";
import Questions from "../Questions";
import CTASection from "../CTASection";
import HeroSection from "../HeroSection";
import DownloadModal from "../DownloadModal";

export default function HomeClient() {
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
