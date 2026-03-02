import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const footer = document.querySelector("footer");
      const windowHeight = window.innerHeight;
      let shouldShow = scrollY > 400; // Show after scrolling 400px

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // Hide if the button would overlap the footer's social icons
        if (footerRect.top < windowHeight - 80) {
          shouldShow = false;
        }
      }
      setVisible(shouldShow);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-40 rounded-full bg-[#EC4007] p-4 shadow-lg transition hover:bg-orange-600 focus:outline-none"
      style={{ boxShadow: "0 4px 16px 0 rgba(236,64,7,0.18)" }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </button>
  ) : null;
};

export default BackToTopButton;
