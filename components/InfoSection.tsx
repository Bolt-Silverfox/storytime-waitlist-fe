"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type InfoSectionProps = {
  openDownloadModal: () => void;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

export default function InfoSection({
  openDownloadModal,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: InfoSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 md:mt-40"
    >
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
        <div
          className={`flex w-full items-center justify-center overflow-hidden ${
            imagePosition === "left"
              ? "order-1 md:justify-start"
              : "order-1 md:order-2 md:justify-end"
          }`}
        >
          <Image
            src={imageSrc}
            className="object-contain"
            alt={imageAlt}
            width={600}
            height={400}
          />
        </div>

        <div
          className={`flex flex-col justify-between gap-4 md:gap-8 ${
            imagePosition === "left" ? "order-2" : "order-2 md:order-1"
          }`}
        >
          <h2 className="font-Qilka text-2xl font-bold leading-tight text-[#231F1E] md:text-3xl lg:text-[48px]">
            {title}
          </h2>

          <p className="font-abezee text-base leading-relaxed text-[#4F4C4B] md:text-lg md:leading-normal lg:text-[24px] lg:leading-[32px]">
            {description}
          </p>

          <button
            onClick={openDownloadModal}
            className="font-abezee h-14 w-full cursor-pointer rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl md:h-[64px] md:w-[280px]"
          >
            Download now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
