import Explore from "./components/Explore";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
