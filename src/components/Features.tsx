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
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for ultra-smooth scrolling (only on desktop)
    if (window.innerWidth >= 1024) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }


    // Desktop scroll trigger
    if (window.innerWidth >= 1024 && triggerRef.current) {
      // Kill any existing ScrollTriggers on this element
      ScrollTrigger.getAll().forEach(trigger => {
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
        scrub: 2, // Increased for smoother transition
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * featuresData.length),
            featuresData.length - 1,
          );
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
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
      };
    }

    return () => {
      lenisRef.current?.destroy();
    };
  }, [activeIndex]);

  const activeFeature = featuresData[activeIndex];

  return (
    <section ref={sectionRef} className="mt-8 md:mt-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-Qilka mb-4 text-center text-[32px] font-bold text-[#231F1E] md:text-[56px]"
      >
        Check out our amazing features
      </motion.h2>

      {/* Mobile View */}
      <div className="mx-auto w-full rounded-3xl bg-white p-6 md:p-8 lg:hidden">
        {/* img */}
        <div className="mb-10 flex justify-center rounded-4xl bg-[#FFE9DF]">
          <div className="flex justify-center overflow-hidden p-4">
            <img
              src={activeFeature.image}
              alt="image"
              className="-mb-10 h-[420px] object-contain"
            />
          </div>
        </div>

        {/* list */}
        <div className="mb-10 space-y-5 p-7">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="font-abezee flex cursor-pointer items-center gap-3"
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full font-bold transition-colors duration-300 ${index === activeIndex
                  ? "bg-[#EC4007] text-white"
                  : "bg-[#EC400733] text-[#EC4007]"
                  }`}
              >
                {feature.id}
              </div>
              <span className={`text-[20px] transition-colors duration-300 ${index === activeIndex ? "text-[#EC4007]" : "text-gray-700"}`}>{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="">
          <h3 className="font-Qilka mb-4 text-[32px] font-bold text-[#231F1E]">
            {activeFeature.title}
          </h3>

          <p className="font-abezee mb-6 text-[18px] leading-[32px]">
            {activeFeature.description}
          </p>

          <button
            onClick={openDownloadModal}
            className="font-abezee w-[280px] cursor-pointer rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
          >
            Download now
          </button>
        </div>
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
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-bold transition-all duration-300 ${index === activeIndex
                    ? "bg-[#EC4007] text-white shadow-lg shadow-orange-300"
                    : "bg-[#EC400733] text-[#EC4007]"
                    }`}
                >
                  {feature.id}
                </div>
                <span
                  className={`font-medium transition-all duration-300 ${index === activeIndex ? "text-[#EC4007]" : "text-gray-700"
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
