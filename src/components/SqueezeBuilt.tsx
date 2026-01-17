import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SqueezeCardOne from "./squueze-cards/squeeze-card-one";
import SqueezeCardThree from "./squueze-cards/squeeze-card-three";
import SqueezeCardFour from "./squueze-cards/squeeze-card-four";
import SqueezeCardSix from "./squueze-cards/squeeze-card-six";
import JoinEarlyModal from "./JoinEarlyModal";

gsap.registerPlugin(ScrollTrigger);

const SqueezeBuilt = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(0);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const totalCards = 4;

  useEffect(() => {
    // Check if mobile helper function
    const checkIsMobile = () => window.innerWidth < 768;

    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.06,
      wheelMultiplier: 0.8,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 10000);
    };
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    gsap.defaults({ ease: "power2.out" });

    // Create ScrollTrigger on desktop
    if (!isMobile) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${totalCards * 600}vh`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1.5,
        scrub: 1,
        fastScrollEnd: false,
        preventOverlaps: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const cardIndex = Math.min(
            Math.floor(progress * totalCards),
            totalCards - 1,
          );
          setExpandedCardIndex(cardIndex);
        },
      });
    }

    // Handle window resize
    const handleResize = () => {
      const newIsMobile = checkIsMobile();
      setIsMobile(newIsMobile);

      if (newIsMobile) {
        // On mobile, kill ScrollTrigger if it exists
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        }
      } else {
        // On desktop, create ScrollTrigger if it doesn't exist, otherwise refresh
        if (!scrollTriggerRef.current) {
          scrollTriggerRef.current = ScrollTrigger.create({
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${totalCards * 600}vh`,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1.5,
            scrub: 1,
            fastScrollEnd: false,
            preventOverlaps: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const cardIndex = Math.min(
                Math.floor(progress * totalCards),
                totalCards - 1,
              );
              setExpandedCardIndex(cardIndex);
            },
          });
        } else {
          scrollTriggerRef.current.refresh();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, [isMobile]);

  return (
    <section aria-labelledby="Built section">
      <div
        ref={triggerRef}
        className="mx-auto mb-10 flex max-w-[1400px] flex-col items-center justify-center gap-8 px-5 py-10 md:mb-20 md:gap-[4.38rem] md:px-10 md:py-20"
      >
        <h2 className="font-Qilka text-center text-3xl leading-tight font-bold text-[#212121] not-italic md:text-4xl md:leading-normal lg:text-5xl lg:leading-13.75">
          Built for kids.
          <br />
          Designed for parents.
        </h2>
        <div className="flex w-full flex-col items-center gap-4 md:h-143 md:flex-row md:items-start md:justify-center md:gap-6">
          <SqueezeCardOne
            isExpanded={isMobile ? true : expandedCardIndex === 0}
            onToggle={() => {}}
          />
          <SqueezeCardThree
            isExpanded={isMobile ? true : expandedCardIndex === 1}
            onToggle={() => {}}
          />
          <SqueezeCardFour
            isExpanded={isMobile ? true : expandedCardIndex === 2}
            onToggle={() => {}}
          />
          <SqueezeCardSix
            isExpanded={isMobile ? true : expandedCardIndex === 3}
            onToggle={() => {}}
          />
        </div>
        <button
          onClick={() => setIsJoinModalOpen(true)}
          className="font-abezee cursor-pointer rounded-[6.25rem] bg-[#EC4007] px-6 py-2 text-lg leading-normal font-normal text-white not-italic transition-all hover:bg-[#d13706] md:px-8 md:py-2.5 md:text-xl md:leading-[2.26325rem]"
        >
          Join Early Access
        </button>
      </div>
      {isJoinModalOpen && (
        <JoinEarlyModal onClose={() => setIsJoinModalOpen(false)} />
      )}
    </section>
  );
};

export default SqueezeBuilt;
