"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const featuresData = [
  {
    id: 1,
    text: "Voice options",
    title: "Voice options",
    description: "Calming expressive voices tailored to their story",
    image: "/voice-mob.png",
  },
  {
    id: 2,
    text: "Read story along with AI",
    title: "Read story along with AI",
    description: "Read story along with AI, get quick insight into words.",
    image: "/landingpage/read-along.png",
  },
  {
    id: 3,
    text: "Passive Mode",
    title: "Passive Mode",
    description: "Select between interactive and passive listening.",
    image: "/landingpage/passive-mode.png",
  },
  {
    id: 4,
    text: "Interactive mode",
    title: "Interactive mode",
    description: "Select between interactive and passive listening.",
    image: "/landingpage/interactive-mode.png",
  },
];

type FeaturesProps = {
  openDownloadModal: () => void;
};

export default function Features({ openDownloadModal }: FeaturesProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      if (!isPaused && carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        const scrollEnd = scrollWidth - clientWidth;

        if (scrollLeft >= scrollEnd - 10) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = carousel.clientWidth + 16;
          carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="mt-20 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-Qilka mb-4 text-center text-[32px] font-bold text-[#231F1E] md:text-[56px]"
      >
        Check out our amazing features
      </motion.h2>

      <div
        ref={carouselRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="flex w-full min-w-full flex-none snap-center flex-col justify-between rounded-[32px] bg-[#FFF8F5] p-6 shadow-sm lg:p-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="font-abezee flex h-8 w-8 items-center justify-center rounded-full bg-[#EC4007] font-bold text-white lg:h-12 lg:w-12 lg:text-xl">
                {feature.id}
              </div>
              <h3 className="font-abezee text-[20px] text-[#231F1E] lg:text-[32px]">
                {feature.title}
              </h3>
            </div>

            <div className="mb-6 flex flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={feature.image}
                alt={feature.title}
                className="h-[350px] w-full object-contain md:h-[400px] lg:h-[500px]"
                width={600}
                height={500}
              />
            </div>

            <div className="mt-auto">
              <h3 className="font-Qilka mb-2 text-[24px] font-bold text-[#231F1E] md:text-[28px] lg:text-[48px]">
                {feature.title}
              </h3>
              <p className="font-abezee mb-6 text-[16px] leading-[26px] text-[#4F4C4B] md:text-[18px] lg:text-[24px] lg:leading-[40px]">
                {feature.description}
              </p>
              <button
                onClick={openDownloadModal}
                className="font-abezee w-full cursor-pointer rounded-full bg-[#EC4007] py-4 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl lg:w-[280px]"
              >
                Download now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
