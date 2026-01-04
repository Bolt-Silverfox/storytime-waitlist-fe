import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { trackCTAClick } from "../lib/analytics";

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
    text: "Smart story filters",
    title: "Smart story filters",
    description: "Find the perfect story with intelligent filtering options",
    image: "voice-mob.png",
  },
  {
    id: 3,
    text: "Read story along AI",
    title: "Read story along AI",
    description: "Interactive reading experience with AI assistance",
    image: "voice-mob.png",
  },
  {
    id: 4,
    text: "Smart story filters",
    title: "Smart story filters",
    description: "Advanced filtering for personalized story discovery",
    image: "voice-mob.png",
  },
  {
    id: 5,
    text: "Favorite stories",
    title: "Favorite stories",
    description: "Save and organize your favorite stories for easy access",
    image: "voice-mob.png",
  },
  {
    id: 6,
    text: "Interactive mode",
    title: "Interactive mode",
    description: "Engage with stories in a whole new interactive way",
    image: "voice-mob.png",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const mobileListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile scroll animation for features list (vertical scroll, no UI change)
    if (window.innerWidth < 1024 && mobileListRef.current) {
      const mobileTrigger = ScrollTrigger.create({
        trigger: mobileListRef.current,
        start: "top top",
        end: `+=${featuresData.length * 120}`, // 120px per item
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * featuresData.length),
            featuresData.length - 1,
          );
          setActiveIndex(newIndex);
        },
        snap: {
          snapTo: (value) => {
            const step = 1 / featuresData.length;
            return Math.round(value / step) * step;
          },
          duration: { min: 0.1, max: 0.2 },
          ease: "power1.inOut",
        },
      });
      return () => {
        mobileTrigger.kill();
      };
    }
    // Initialize Lenis for ultra-smooth scrolling
    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.06,
      wheelMultiplier: 0.8,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 10000);
    };
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    // Set default ease for all GSAP animations
    gsap.defaults({ ease: "power2.out" });

    // Create the scroll trigger for pinning and progress tracking
    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "center center",
      end: `+=${featuresData.length * 40}vh`, // Each item takes up 40vh of scroll (shorter)
      pin: true,
      pinSpacing: true,
      anticipatePin: 1.5,
      scrub: 1,
      fastScrollEnd: false,
      preventOverlaps: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * featuresData.length),
          featuresData.length - 1,
        );
        setActiveIndex(newIndex);
      },
      snap: {
        snapTo: (value) => {
          const step = 1 / featuresData.length;
          return Math.round(value / step) * step;
        },
        duration: { min: 0.1, max: 0.3 },
        ease: "power1.inOut",
      },
    });

    return () => {
      trigger.kill();
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, []);

  const activeFeature = featuresData[activeIndex];

  return (
    <section ref={sectionRef} className="mt-20 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-Qilka mb-15 text-center text-[32px] font-bold text-[#231F1E] md:text-[56px]"
      >
        Check out our amazing features
      </motion.h2>

      {/* Mobile View */}
      <div
        ref={mobileListRef}
        className="mx-auto w-full rounded-3xl bg-white p-6 md:p-8 lg:hidden"
      >
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
              className="font-abezee flex items-center gap-3"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                  index === activeIndex
                    ? "bg-[#EC4007] text-white"
                    : "bg-[#EC400733] text-[#EC4007]"
                }`}
              >
                {feature.id}
              </div>
              <span className="text-[20px] text-gray-700">{feature.text}</span>
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
            onClick={() => {
              trackCTAClick("Download", "Features");
              window.open(
                "https://play.google.com/store/apps/details?id=net.emerj.storytime",
                "_blank",
              );
            }}
            className="font-abezee w-[280px] rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
          >
            Download now
          </button>
        </div>
      </div>

      {/* Desktop View - Scroll Locked */}
      <div
        ref={triggerRef}
        className="mx-auto hidden w-full items-center rounded-3xl bg-[#FFF2EC] md:p-12 lg:flex"
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
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-abezee flex cursor-pointer items-center gap-3 p-3 text-[24px]"
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-bold transition-all duration-500 ease-out ${
                    index === activeIndex
                      ? "bg-[#EC4007] text-white shadow-lg shadow-orange-300"
                      : "bg-[#EC400733] text-[#EC4007]"
                  }`}
                >
                  {feature.id}
                </div>
                <span
                  className={`font-medium transition-all duration-500 ease-out ${
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
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          </div>

          {/* Feature Details */}
          <div className="text-left">
            <motion.h3
              key={`title-${activeFeature.id}`}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-Qilka mb-4 text-[48px] font-bold text-[#231F1E]"
            >
              {activeFeature.title}
            </motion.h3>

            <motion.p
              key={`desc-${activeFeature.id}`}
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-abezee mb-6 text-[24px] leading-[40px]"
            >
              {activeFeature.description}
            </motion.p>

            <button
              onClick={() => {
                trackCTAClick("Download", "Features");
                window.open(
                  "https://play.google.com/store/apps/details?id=net.emerj.storytime",
                  "_blank",
                );
              }}
              className="font-abezee w-[280px] rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
            >
              Download now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
