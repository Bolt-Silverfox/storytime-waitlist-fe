import { useState } from "react";
import { motion } from "framer-motion";
import thumbSrc from "../assets/video-thumbnail.png";

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);

  const videoSrc =
    "https://res.cloudinary.com/dwatri50n/video/upload/v1763801270/New_Project_23_Copy_2_C9EFB8A_eqtzzo.mp4";

  const lists = [
    "Adventure",
    "Mystery",
    "Comedy",
    "Fantasy",
    "SciFi",
    "Action",
    "Adventure",
    "Mystery",
    "Comedy",
  ];

  return (
    <section className="mx-auto pt-10 pb-0 md:pt-20">
      <div className="mx-auto flex max-w-[954px] flex-col gap-6 overflow-x-hidden px-4 xl:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-Qilka text-center text-[32px] leading-[50px] md:text-[48px] xl:text-[56px]"
        >
          Storytime4kids - where magical stories grow smarter kids
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-abezee mx-auto max-w-[616px] text-center text-[20px] text-[#231F1ECC] md:text-[22px] xl:text-[24px]"
        >
          Magical stories for kids, from bedtime snuggles to learning
          adventures.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary font-abezee mx-auto flex h-[69px] w-[211px] items-center justify-center gap-3 rounded-full text-center text-white"
        >
          <img src="play-store.png" className="h-[32px] w-[29px]" alt="" />
          <div className="pl-1">
            <p className="text-center text-[12px]">Download on</p>
            <p className="text-center">Google play</p>
          </div>
        </motion.button>
      </div>

      <div className="relative -top-50 -mb-50 flex h-[750px] flex-col border-black bg-[url('/landingpage/cloud.png')] bg-cover bg-center md:h-[700px] xl:h-[773px]">
        <div className="flex justify-between">
          <motion.img
            src="/landingpage/fairy.png"
            alt="fairy"
            className="hidden h-[200px] max-w-[250px] scale-x-[-1] md:block md:h-[250px] md:max-w-[320px] xl:h-[298px] xl:max-w-[383px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src="/landingpage/bird.png"
            alt="bird"
            className="relative -top-30 hidden h-[200px] md:block md:h-[250px] md:max-w-[320px] xl:h-[298px] xl:max-w-[383px]"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="overflow-hidden">
          <motion.img
            src="/landingpage/star.png"
            alt="star"
            className="absolute top-16 right-[20%] hidden h-6 w-6 md:right-[25%] md:block xl:right-72"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src="/landingpage/star.png"
            alt="star"
            className="absolute -top-30 right-[15%] hidden h-6 w-6 md:right-[20%] md:block xl:right-48"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          <motion.img
            src="/landingpage/star.png"
            alt="star"
            className="absolute top-30 left-[20%] hidden h-6 w-6 md:left-[25%] md:block xl:left-72"
            animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
          <motion.img
            src="/landingpage/star.png"
            alt="star"
            className="absolute -top-1 left-[15%] hidden h-6 w-6 md:left-[20%] md:block xl:left-48"
            animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />
          <motion.img
            src="/landingpage/star.png"
            alt="star"
            className="absolute -top-40 left-[10%] hidden h-6 w-6 md:left-[15%] md:block xl:left-28"
            animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            className="absolute top-56 left-1/2 mb-10 flex h-auto w-[90%] max-w-[499px] -translate-x-1/2 cursor-pointer flex-col items-center justify-between rounded-[40px] bg-white p-6 shadow-xl md:top-52 md:w-[70%] md:flex-row md:p-5 xl:top-64 xl:h-[211px] xl:p-6"
          >
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="relative mb-4 h-[140px] w-full overflow-hidden rounded-[27px] md:mb-0 md:h-[150px] md:w-[150px] xl:h-[163px] xl:w-[163px]"
              >
                <img
                  src={thumbSrc}
                  alt="story video thumbnail"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FF6A1A] shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              </button>
            ) : (
              <video
                className="mb-4 h-[140px] w-full rounded-[27px] object-cover object-center md:mb-0 md:h-[150px] md:w-[150px] xl:h-[163px] xl:w-[163px]"
                controls
                autoPlay
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}

            <div className="container flex h-auto w-full flex-col rounded-[27px] md:w-[60%] xl:h-[163px] xl:w-[264px]">
              <div className="h-auto w-full xl:h-28">
                <p className="font-Qilka text-[18px] text-[#231F1E] md:text-[19px] xl:text-[20px]">
                  Experience and listen to over 200+ unique stories across
                  different genres
                </p>
              </div>
              <div className="font-abezee mt-2 h-auto text-[14px] text-[#4F4C4B] md:text-[15px] xl:h-8 xl:text-[16px]">
                <p>Be a part of the StoryTime community</p>
              </div>
            </div>
          </motion.section>

          <div className="absolute inset-x-0 bottom-10 mt-10 flex flex-col items-center justify-center md:bottom-15 xl:bottom-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              className="font-Qilka mx-auto mb-8 h-auto max-w-[476px] px-4 text-center text-[24px] text-[#FFEDE2] md:mb-12 md:text-[28px] xl:mb-15 xl:h-[74px] xl:text-[32px]"
            >
              Experience storytelling like never before in
            </motion.p>
            <div className="scrollbar-hide w-full overflow-x-auto px-4">
              <div className="flex justify-center gap-2 md:gap-3">
                {lists.map((list, i) => (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + i * 0.1,
                      ease: "backOut",
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="rounded-full bg-white/70 px-8 py-2.5 text-sm whitespace-nowrap md:px-12 md:py-3 md:text-base xl:px-16 xl:py-3.5"
                    key={i}
                  >
                    {list}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
