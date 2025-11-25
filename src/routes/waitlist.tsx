import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import WaitlistHeroSection from "../components/waitlist/WaitlistHeroSection";
import Explore from "../components/Explore";
import WaitListFooter from "../components/waitlist/WaitlistFooter";
import WaitListForm from "../components/waitlist/WaitListForm";

export const Route = createFileRoute("/waitlist")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isWaitlistOverlayOpen, setIsWaitlistOverLayOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <WaitlistHeroSection openModal={() => setIsWaitlistOverLayOpen(true)} />
      <Explore />
      <WaitListFooter />
      {isWaitlistOverlayOpen && (
        <WaitListForm onClose={() => setIsWaitlistOverLayOpen(false)} />
      )}
    </div>
  );
}
