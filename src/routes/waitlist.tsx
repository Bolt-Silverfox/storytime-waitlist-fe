import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import Explore from "../components/Explore";
import WaitListFooter from "../components/WaitlistFooter";
import WaitListForm from "../components/WaitListForm";

export const Route = createFileRoute("/waitlist")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isWaitlistOverlayOpen, setIsWaitlistOverLayOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <HeroSection openModal={() => setIsWaitlistOverLayOpen(true)} />
      <Explore />
      <WaitListFooter />
      {isWaitlistOverlayOpen && (
        <WaitListForm onClose={() => setIsWaitlistOverLayOpen(false)} />
      )}
    </div>
  );
}
