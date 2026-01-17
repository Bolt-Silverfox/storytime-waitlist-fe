import { useState } from "react";
import { motion } from "framer-motion";
import bedBg from "/squeeze/bed-bg.png";
import bedImage from "/squeeze/bed-image.png";

const SqueezeBed = () => {
  const [playing, setPlaying] = useState(false);

  const videoSrc =
    "https://res.cloudinary.com/dwatri50n/video/upload/v1763801270/New_Project_23_Copy_2_C9EFB8A_eqtzzo.mp4";

  return (
    <section
      className="relative min-h-[900px] w-full overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-[1237px]"
      style={{
        backgroundImage: `url(${bedBg})`,
      }}
      aria-labelledby="Bed section"
    >
      <div className="absolute inset-0 z-10 bg-[rgba(84,61,147,0.85)]" />

      <div className="relative z-20 mx-auto flex min-h-[800px] max-w-[1048px] flex-col items-center gap-8 px-5 pt-16 pb-10 md:min-h-[1237px] md:gap-[60px] md:pt-[106px]">
        <div className="flex w-full max-w-[575px] flex-col items-center gap-6">
          <div className="relative h-[120px] w-full shrink-0 md:h-[181px] md:w-[248px]">
            <img
              src={bedImage}
              alt="Bedtime story illustration"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="font-Qilka text-center text-[32px] leading-[40px] font-bold text-[#ffd609] not-italic md:text-[48px] md:leading-[55px]">
            Turn every moment into memorable adventures
          </h2>
        </div>

        {/* Video Section */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-[40px] bg-[#463478] md:h-[494px]">
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="relative h-full w-full"
            >
              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 flex size-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[58.5px] bg-[rgba(0,0,0,0.51)] p-5 md:size-[117px] md:p-[30px]">
                <motion.div
                  className="flex size-[40px] items-center justify-center md:size-[56px]"
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
                    fill="#FF6A1A"
                    viewBox="0 0 24 24"
                    className="h-full w-full"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </button>
          ) : (
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>

        {/* Description Text */}
        <p className="font-Qilka w-full max-w-[664px] text-center text-[18px] leading-[26px] font-bold text-[#eee5ff] not-italic md:text-[24px] md:leading-[32px]">
          From dragons and heroes to calm bedtime tales, every story invites
          your child to explore, imagine, and fall in love with reading.
        </p>
      </div>
    </section>
  );
};

export default SqueezeBed;
