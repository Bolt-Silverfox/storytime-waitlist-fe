import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import WaitlistHeroSection from "../components/waitlist/WaitlistHeroSection";
import Explore from "../components/Explore";
import WaitListFooter from "../components/waitlist/WaitlistFooter";
import WaitListForm from "../components/waitlist/WaitListForm";
import { trackEvent, trackPageView } from "../lib/analytics";

export const Route = createFileRoute("/waitlist")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isWaitlistOverlayOpen, setIsWaitlistOverLayOpen] = useState(false);

  useEffect(() => {
    trackPageView("/waitlist", "Waitlist Page");
  }, []);

  const handleOpenModal = () => {
    trackEvent("Waitlist Modal Opened", {
      timestamp: new Date().toISOString(),
    });
    setIsWaitlistOverLayOpen(true);
  };

  const handleCloseModal = () => {
    trackEvent("Waitlist Modal Closed", {
      timestamp: new Date().toISOString(),
    });
    setIsWaitlistOverLayOpen(false);
  };

  return (
    <div className="">
      <WaitlistHeroSection openModal={handleOpenModal} />
      <Explore />
      <WaitListFooter />
      {isWaitlistOverlayOpen && <WaitListForm onClose={handleCloseModal} />}
    </div>
  );
}
