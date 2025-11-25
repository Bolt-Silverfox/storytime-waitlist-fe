import { motion } from "framer-motion";

export default function WhatWeOffer() {
  const features = [
    {
      title: "AI-powered voices with playful, natural tones",
      icon: "offer-1.png",
      bgColor: "#D6E0FC",
      color: "#5435AB",
      elipse: "#B6C1E0",
    },
    {
      title: "Parent controls for safe content selection",
      icon: "offer-2.png",
      bgColor: "#D6FCE1",
      color: "#35AB5E",
      elipse: "#ADEDBF",
    },
    {
      title: "Safe & Curated Content for your kids",
      icon: "offer-3.png",
      bgColor: "#FCF8D6",
      color: "#AB9535",
      elipse: "#EEE8B3",
    },
  ];

  return (
    <section className="mt-20 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-Qilka mb-8 text-center text-[32px] font-bold text-[#231F1E] md:mb-15 md:text-[56px]"
      >
        What we offer your kids
      </motion.h2>

      <div className="mx-auto grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "backOut",
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="mx-auto flex w-full flex-col justify-between rounded-[31.28px] px-6 py-10 shadow-lg md:h-[520px] md:p-8"
            style={{ background: feature.bgColor }}
          >
            <div
              style={{ background: feature.elipse }}
              className="relative mx-auto mb-4 flex h-[262px] w-[262px] items-center justify-center rounded-full md:mb-4 md:h-[262px] md:w-[262px]"
            >
              <img
                src="Vector.png"
                className="absolute h-3 w-3 md:h-5 md:w-[20px]"
                style={{ top: "30px", left: "95px" }}
              />

              <img
                src="Vector.png"
                className="absolute h-4 w-5 md:h-[25px] md:w-[23px]"
                style={{ top: "150px", left: "180px" }}
              />

              <img
                src="Vector.png"
                className="absolute h-5 w-6 md:h-[24px] md:w-[30px]"
                style={{ top: "190px", left: "270px" }}
              />

              <img
                src="Vector.png"
                className="absolute h-6 w-5 md:h-[24px] md:w-[29px]"
                style={{ top: "130px", left: "15px" }}
              />

              <div className="text-center">
                <img
                  className="h-[275px] w-[365px] object-contain md:h-[305px] md:w-[392px]"
                  src={feature.icon}
                  alt="card-icon"
                />
              </div>
            </div>

            <h3
              style={{ color: feature.color }}
              className="font-abezee text-[24px] leading-[41.71px] md:text-[32px] md:leading-[41.71px]"
            >
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
