"use client";

import { useState } from "react";
import WaitlistHeroSection from "../../components/waitlist/WaitlistHeroSection";
import Explore from "../../components/Explore";
import WaitListFooter from "../../components/waitlist/WaitlistFooter";
import WaitListForm from "../../components/waitlist/WaitListForm";

export default function WaitlistClient() {
  const [isWaitlistOverlayOpen, setIsWaitlistOverLayOpen] = useState(false);
  return (
    <div className="">
      <WaitlistHeroSection openModal={() => setIsWaitlistOverLayOpen(true)} />
      <Explore />
      <WaitListFooter />
      {isWaitlistOverlayOpen && (
        <WaitListForm onClose={() => setIsWaitlistOverLayOpen(false)} />
      )}
    </div>
  );
}
