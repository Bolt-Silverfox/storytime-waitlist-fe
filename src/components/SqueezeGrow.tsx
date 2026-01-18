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
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat pb-12 sm:pb-24 md:min-h-[800px] md:pb-48"
      style={{
        backgroundImage: `url(${growBg})`,
      }}
      aria-labelledby="Grow section"
    >
      {/* Content Container */}
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center gap-6 px-4 py-12 sm:gap-8 sm:px-5 sm:py-16 md:min-h-[800px] md:gap-12 md:py-32">
        {/* Heading */}
        <div className="mx-auto w-full px-2 sm:px-4 md:w-[700px] md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-Qilka text-center text-4xl leading-tight font-bold text-black not-italic sm:text-3xl sm:leading-normal md:text-4xl md:leading-13.75 lg:text-5xl"
          >
            A growing library of stories kids love
          </motion.h2>
          <p className="font-abezee mt-3 text-center text-xl leading-8 font-normal text-[#4F4C4B] not-italic sm:mt-4 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:text-xl">
            New stories added regularly, from short reads to bedtime favorites,
            all designed for young readers.
          </p>
        </div>

        <div className="relative mt-6 flex w-full items-center justify-center overflow-hidden pt-20 md:mt-[0.38rem]">
          <motion.img
            src={milaBig}
            alt="MILA"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="h-auto w-[220px] max-w-[50%] cursor-pointer transition-all sm:w-[240px] md:w-auto md:max-w-none"
          />
          <motion.img
            src={talesBig}
            alt="Tales from Whispering Woods"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="absolute top-[50%] left-1/2 h-auto w-[260px] max-w-[60%] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all sm:w-[280px] md:w-auto md:max-w-none"
          />
          <motion.img
            src={lilaBig}
            alt="Lila and the Magic Seed"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="h-auto w-[220px] max-w-[50%] cursor-pointer transition-all sm:w-[240px] md:w-auto md:max-w-none"
          />
        </div>
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 px-4 sm:mt-8 sm:gap-6 md:mt-[4.38rem] md:gap-10">
          <p className="w-full text-center text-sm leading-6 font-normal text-[#EC4007] italic sm:text-base sm:leading-7 md:leading-8">
            And many more stories waiting to be discovered…
          </p>
          <button
            onClick={() => setIsJoinModalOpen(true)}
            className="font-abezee w-full max-w-[280px] cursor-pointer rounded-[6.25rem] bg-[#EC4007] px-6 py-2 text-center text-base font-normal text-white not-italic transition-all hover:bg-[#d13706] sm:w-auto sm:px-7 sm:py-2.5 sm:text-lg md:px-8 md:text-xl md:leading-[2.26325rem]"
          >
            Join Early Access
          </button>
          <div className="mx-auto mt-10 mb-20 flex items-center justify-center gap-4 sm:mb-16 sm:gap-5 md:gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61585584201713"
              target="blank"
            >
              <img
                src="/baseline-facebook.svg"
                alt="Facebook"
                className="h-auto w-8 cursor-pointer transition-transform hover:scale-110 sm:w-9 md:w-[38px]"
              />
            </a>

            <a href="https://www.instagram.com/teamstorytimehq/" target="blank">
              <img
                src="/baseline-instagram.svg"
                alt="Instagram"
                className="h-auto w-8 cursor-pointer transition-transform hover:scale-110 sm:w-9 md:w-[38px]"
              />
            </a>

            <a href="https://www.tiktok.com/@teamstorytimehq" target="blank">
              <img
                src="/baseline-tiktok.svg"
                alt="Tiktok"
                className="h-auto w-8 cursor-pointer transition-transform hover:scale-110 sm:w-9 md:w-[38px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/storytimehq/"
              target="blank"
            >
              <img
                src="/baseline-linkedin.svg"
                alt="Linkedin"
                className="h-auto w-8 cursor-pointer transition-transform hover:scale-110 sm:w-9 md:w-[38px]"
              />
            </a>
            <a href="https://x.com/storytimehq" target="blank">
              <img
                src="/baseline-twitter.svg"
                alt="Twitter"
                className="h-auto w-8 cursor-pointer transition-transform hover:scale-110 sm:w-9 md:w-[38px]"
              />
            </a>
          </div>
        </div>
      </div>
      {isJoinModalOpen && (
        <JoinEarlyModal onClose={() => setIsJoinModalOpen(false)} />
      )}
    </section>
  );
};

export default SqueezeGrow;
