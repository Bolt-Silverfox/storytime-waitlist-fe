import { useState } from "react";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WaitListForm from "./components/WaitListForm";

function App() {
  const [isWaitlistOverlayOpen, setIsWaitlistOverLayOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <HeroSection openModal={() => setIsWaitlistOverLayOpen(true)} />
      <Explore />
      <Footer />
      {isWaitlistOverlayOpen && (
        <WaitListForm onClose={() => setIsWaitlistOverLayOpen(false)} />
      )}
    </div>
  );
}

export default App;
