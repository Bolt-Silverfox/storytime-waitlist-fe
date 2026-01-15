import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import AboutHero from "../../components/about/AboutHero";
import CTASection from "../../components/CTASection";
import AboutDetails from "../../components/about/AboutDetails";
import Mission from "../../components/about/Mission";
import Intentions from "../../components/about/Intentions";
import DownloadModal from "../../components/DownloadModal";

export const Route = createFileRoute("/_layout/about")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const openDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  return (
    <>
      <AboutHero />

      <div className="mx-auto max-w-7xl px-4">
        <AboutDetails />
        <Mission />
        <Intentions openDownloadModal={openDownloadModal} />
      </div>

      <CTASection />
      {isDownloadModalOpen && (
        <DownloadModal onClose={() => setIsDownloadModalOpen(false)} />
      )}
    </>
  );
}
