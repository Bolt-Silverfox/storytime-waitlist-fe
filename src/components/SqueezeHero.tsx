import { useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import heroImage from "/squeeze/hero-image.png";
// import useSqueezeInfo from "../contexts/SqueezeContext";
import mila from "/squeeze/mila.png";
import tales from "/squeeze/tales.png";
import heroBg from "/squeeze/her-bg.png";
import JoinEarlyModal from "./JoinEarlyModal";
import DownloadModal from "./DownloadModal";

const SqueezeHero = () => {
  // const { setUserInfo, userInfo } = useSqueezeInfo();
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData) as {
  //     email: string;
  //     fullName: string;
  //   };
  //   setUserInfo(data);
  //   e.currentTarget.reset();
  // };

  const handleJoinClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsJoinModalOpen(true);
  };

  const handleDownloadClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDownloadModalOpen(true);
  };
  return (
    <section className="relative" aria-labelledby="Hero section">
      <div className="z-20 mx-auto flex min-h-[90vh] flex-col items-center justify-center gap-8 px-5 pb-28 md:min-h-screen md:max-w-[1400px] md:flex-row md:items-center md:justify-between md:gap-12 lg:min-h-[70vh] lg:px-10">
        <div className="flex-1 text-left">
          <h1 className="font-Qilka text-[2.5rem] leading-[normal] font-bold text-[#212121] not-italic md:text-5xl lg:text-[4rem] lg:leading-none">
            <span className="inline-flex items-center gap-2">
              Better{" "}
              <motion.img
                src={mila}
                alt="MILA book cover"
                className="inline-block h-12 w-auto drop-shadow-lg md:h-auto"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />{" "}
              screen
            </span>
            <br />
            time starts with
            <br />
            <span className="inline-flex items-center gap-2">
              better stories
              <motion.img
                src={tales}
                alt="Fairy Meadow book cover"
                className="hidden h-auto w-auto drop-shadow-lg md:inline-block"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              />
            </span>
          </h1>
          <p className="font-abezee w-full pt-4 text-xl leading-8 font-normal text-[#4F4C4B] not-italic md:w-[90%] md:pt-6 md:text-xl md:leading-8">
            Storytime turns reading into an interactive experience with animated
            stories, read-along voices, and simple activities that keep kids
            engaged and learning.
          </p>
          <div className="relative z-20 mt-6 flex flex-col gap-4 sm:flex-row md:mt-[2.81rem]">
            <button
              onClick={handleJoinClick}
              className="font-abezee cursor-pointer rounded-[6.25rem] bg-[#EC4007] px-6 py-2.5 text-base font-normal text-white not-italic transition-all hover:bg-[#d13706] sm:text-lg md:px-8 md:text-xl"
            >
              Join Early Access
            </button>
            <button
              onClick={handleDownloadClick}
              className="font-abezee cursor-pointer rounded-[6.25rem] border border-solid border-[#EC4007] px-6 py-2.5 text-base font-normal text-[#EC4007] not-italic transition-all hover:bg-[#EC4007] hover:text-white sm:text-lg md:px-8 md:text-xl"
            >
              Download App
            </button>
          </div>
        </div>
        <div className="w-full flex-1 md:w-auto">
          <motion.img
            src={heroImage}
            alt="Squeeze Hero"
            className="h-auto w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
      <img
        src={heroBg}
        alt="Hero background"
        className="absolute bottom-0 left-0 z-0 w-full"
      />
      {isJoinModalOpen && (
        <JoinEarlyModal onClose={() => setIsJoinModalOpen(false)} />
      )}
      {isDownloadModalOpen && (
        <DownloadModal onClose={() => setIsDownloadModalOpen(false)} />
      )}
    </section>
  );
};

export default SqueezeHero;
