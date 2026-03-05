"use client";

import { useState } from "react";
import WhatWeOffer from "../WhatWeOffer";
import Categories from "../Categories";
import InfoSection from "../InfoSection";
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
        <InfoSection
          openDownloadModal={openDownloadModal}
          title="Built with kids in mind + AI integration"
          description="A combination of intentionality, AI integration and simplicity, we have created an amazing digital storybook to aid your kids all the way through in their day to day lives."
          imageSrc="/landingpage/story-reading.png"
          imageAlt="Story reading"
          imagePosition="left"
        />
        <InfoSection
          openDownloadModal={openDownloadModal}
          title="Enjoy series of curated stories kids love"
          description="From bedtime stories to imaginative adventures, our growing library features age-appropriate stories updated weekly and designed to build reading skills while sparking curiosity and creativity. Every story is thoughtfully reviewed to ensure quality, safety, and meaningful learning."
          imageSrc="/landingpage/curative-story.png"
          imageAlt="Curated stories"
          imagePosition="right"
        />
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
