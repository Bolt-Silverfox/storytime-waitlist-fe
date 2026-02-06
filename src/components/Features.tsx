import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: 1,
    text: "Voice options",
    title: "Voice options",
    description: "Calming expressive voices tailored to their story",
    image: "voice-mob.png",
  },
  {
    id: 2,
    text: "Read story along with AI",
    title: "Read story along with AI",
    description: "Read story along with AI, get quick insight into words.",
    image: "landingpage/read-along.png",
  },
  {
    id: 3,
    text: "Passive Mode",
    title: "Passive Mode",
    description: "Select between interactive and passive listening.",
    image: "landingpage/passive-mode.png",
  },
  {
    id: 4,
    text: "Interactive mode",
    title: "Interactive mode",
    description: "Select between interactive and passive listening.",
    image: "landingpage/interactive-mode.png",
  },
];

type FeaturesProps = {
  openDownloadModal: () => void;
};

export default function Features({ openDownloadModal }: FeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      if (!isPaused && carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        const scrollEnd = scrollWidth - clientWidth;

        if (scrollLeft >= scrollEnd - 10) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = 336;
          carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    let rafId: number | null = null;

    if (window.innerWidth >= 1024) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    if (window.innerWidth >= 1024 && triggerRef.current) {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === triggerRef.current) {
          trigger.kill();
        }
      });

      const trigger = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${featuresData.length * 100}vh`,
        pin: true,
        pinSpacing: true,
        scrub: 2,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * featuresData.length),
            featuresData.length - 1,
          );
          setActiveIndex((prevIndex) => {
            if (newIndex !== prevIndex) {
              return newIndex;
            }
            return prevIndex;
          });
        },
        snap: {
          snapTo: 1 / (featuresData.length - 1),
          duration: { min: 0.2, max: 0.4 },
          ease: "power2.inOut",
        },
        invalidateOnRefresh: true,
      });

      return () => {
        trigger.kill();
        lenisRef.current?.destroy();
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
      };
    }

    return () => {
      lenisRef.current?.destroy();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const activeFeature = featuresData[activeIndex];

  return (
    <section ref={sectionRef} className="mt-20 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-Qilka mb-4 text-center text-[32px] font-bold text-[#231F1E] md:text-[56px]"
      >
        Check out our amazing features
      </motion.h2>

      {/* Mobile View - Carousel */}
      <div
        ref={carouselRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8 lg:hidden"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="flex min-w-[320px] flex-none snap-center flex-col justify-between rounded-[32px] bg-[#FFF8F5] p-6 shadow-sm min-[370px]:min-w-[340px] md:min-w-[400px]"
          >
            {/* Top Section: Number & Title */}
            <div className="mb-6 flex items-center gap-3">
              <div className="font-abezee flex h-8 w-8 items-center justify-center rounded-full bg-[#EC4007] font-bold text-white">
                {feature.id}
              </div>
              <h3 className="font-abezee text-[20px] text-[#231F1E]">
                {feature.title}
              </h3>
            </div>

            {/* Image */}
            <div className="mb-6 flex flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-[350px] w-full object-contain md:h-[400px]"
              />
            </div>

            {/* Bottom Section: Text & Button */}
            <div className="mt-auto">
              <h3 className="font-Qilka mb-2 text-[24px] font-bold text-[#231F1E] md:text-[28px]">
                {feature.title}
              </h3>
              <p className="font-abezee mb-6 text-[16px] leading-[26px] text-[#4F4C4B] md:text-[18px]">
                {feature.description}
              </p>
              <button
                onClick={openDownloadModal}
                className="font-abezee w-full cursor-pointer rounded-full bg-[#EC4007] py-4 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
              >
                Download now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Scroll Locked */}
      <div
        ref={triggerRef}
        className="mx-auto hidden min-h-screen w-full items-center rounded-3xl bg-[#FFF2EC] md:p-12 lg:flex"
      >
        <div className="grid w-full grid-cols-3 items-center gap-8">
          {/* Feature List */}
          <div className="space-y-[24px]">
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.id}
                animate={{
                  scale: index === activeIndex ? 1.05 : 1,
                  opacity: index === activeIndex ? 1 : 0.6,
                  x: index === activeIndex ? 8 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="font-abezee flex cursor-pointer items-center gap-3 p-3 text-[24px]"
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-bold transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#EC4007] text-white shadow-lg shadow-orange-300"
                      : "bg-[#EC400733] text-[#EC4007]"
                  }`}
                >
                  {feature.id}
                </div>
                <span
                  className={`font-medium transition-all duration-300 ${
                    index === activeIndex ? "text-[#EC4007]" : "text-gray-700"
                  }`}
                >
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="flex w-full items-center justify-center bg-[#FFF2EC]">
            <motion.img
              key={activeFeature.id}
              src={activeFeature.image}
              className="-mb-12 h-[500px] object-contain"
              alt="image"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          </div>

          {/* Feature Details */}
          <div className="text-left">
            <motion.h3
              key={`title-${activeFeature.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="font-Qilka mb-4 text-[48px] font-bold text-[#231F1E]"
            >
              {activeFeature.title}
            </motion.h3>

            <motion.p
              key={`desc-${activeFeature.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="font-abezee mb-6 text-[24px] leading-[40px]"
            >
              {activeFeature.description}
            </motion.p>

            <button
              onClick={openDownloadModal}
              className="font-abezee w-[280px] cursor-pointer rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
            >
              Download now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
