import { motion } from "framer-motion";
import growBg from "/squeeze/grow-bg.png";
import lilaBig from "/squeeze/lila-big.png";
import milaBig from "/squeeze/mila-big.png";
import talesBig from "/squeeze/tales-big.png";
import { useState } from "react";
import JoinEarlyModal from "./JoinEarlyModal";

const SqueezeGrow = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  return (
    <section
      className="min-h-screenw-full relative overflow-hidden bg-cover bg-center bg-no-repeat pb-48 md:min-h-[800px]"
      style={{
        backgroundImage: `url(${growBg})`,
      }}
      aria-labelledby="Grow section"
    >
      {/* Content Container */}
      <div className="mx-auto w-184 flex-col items-center justify-center gap-8 px-5 py-20 md:min-h-[800px] md:gap-12 md:py-32">
        {/* Heading */}
        <div className="px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-Qilka text-center text-5xl leading-13.75 font-bold text-black not-italic"
          >
            A growing library of stories kids love
          </motion.h2>
          <p className="font-abezee mt-4 text-center text-xl leading-8 font-normal text-[#4F4C4B] not-italic">
            New stories added regularly, from short reads to bedtime favorites,
            all designed for young readers.
          </p>
        </div>

        <div className="relative mt-[4.38rem] flex flex-wrap items-center justify-center">
          <motion.img
            src={milaBig}
            alt="MILA"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="cursor-pointer transition-all"
          />
          <motion.img
            src={talesBig}
            alt="Tales from Whispering Woods"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all"
          />
          <motion.img
            src={lilaBig}
            alt="Lila and the Magic Seed"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="cursor-pointer transition-all"
          />
        </div>
        <div className="mt-[4.38rem] flex flex-col items-center justify-center gap-10">
          <p className="text-center text-base leading-8 font-normal text-[#EC4007] italic">
            And many more stories waiting to be discovered…
          </p>
          <button className="font-abezee cursor-pointer rounded-[6.25rem] bg-[#EC4007] px-8 py-2.5 text-center text-xl leading-[2.26325rem] font-normal text-white not-italic">
            Join Early Access
          </button>{" "}
        </div>
      </div>
      {isJoinModalOpen && (
        <JoinEarlyModal onClose={() => setIsJoinModalOpen(false)} />
      )}
    </section>
  );
};

export default SqueezeGrow;
