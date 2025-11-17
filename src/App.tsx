import { useState } from "react";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WaitListForm from "./components/WaitListForm";

function App() {
   const [isWaitlistOverlayOpen, setIsWaitlistOverlayOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <HeroSection openWaitlist={() => setIsWaitlistOverlayOpen(true)} />
      <Explore />
      <Footer />
      {isWaitlistOverlayOpen && (
        <WaitListForm onClose={() => setIsWaitlistOverlayOpen(false)} />
      )}
    </div>
  );
}

export default App;
