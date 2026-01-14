import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import activeSwitch from "/squeeze/active-switch.svg";
import inactiveSwitch from "/squeeze/inactive-switch.svg";
import lady from "/squeeze/lady.svg";
import cosmo from "/squeeze/cosmo.png";
import speaker from "/squeeze/speaker.svg";
import switchIcon from "/squeeze/purple-switch.svg";

interface SqueezeCardThreeProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SqueezeCardThree = ({ isExpanded, onToggle }: SqueezeCardThreeProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [characterActive, setCharacterActive] = useState(true);
  const [characterName, setCharacterName] = useState("Cosmos");
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Audio visualization bar heights (animated)
  const barHeights = [5.381, 8.969, 23.918, 8.969, 5.381];

  // On mobile, always show expanded state
  const shouldBeExpanded = isMobile ? true : isExpanded;

  return (
    <motion.div
      className={`relative cursor-pointer overflow-hidden rounded-[24px] bg-[#e2ffcb] p-8 transition-all duration-500 ${
        shouldBeExpanded
          ? "h-[600px] w-[95vw] md:h-full md:w-152"
          : "h-[500px] w-[95vw] md:h-full md:w-38"
      }`}
      style={{
        border: `4px solid ${shouldBeExpanded ? "rgba(65,139,4,0.2)" : "rgba(65,139,4,0.2)"}`,
      }}
      onClick={() => !isEditingName && onToggle()}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {!shouldBeExpanded ? (
          // Collapsed State
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col items-center justify-center gap-6"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative size-[60px] shrink-0"
            >
              <img
                src={lady}
                alt="lady icon"
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* Vertical Text */}
            <div className="flex min-h-0 w-[32px] flex-1 items-center justify-center">
              <motion.p
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: -90, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-Qilka text-[32px] leading-[32px] font-bold whitespace-nowrap text-[#418b04] not-italic"
              >
                AI read-along
              </motion.p>
            </div>
          </motion.div>
        ) : (
          // Expanded State
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 flex flex-col gap-[9px]"
            >
              {/* Icon */}
              <div className="relative size-[60px] shrink-0">
                <img
                  src={speaker}
                  alt="AI read-along icon"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[9px]">
                <h3 className="font-Qilka text-[32px] leading-[32px] font-bold text-[#212121] not-italic">
                  AI read-along
                </h3>
                <p className="font-abezee text-[16px] leading-[20px] font-normal text-[#616161] not-italic">
                  Personalized profile for your kids of different ages
                </p>
              </div>
            </motion.div>

            {/* Character and Controls Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-[42px]"
            >
              {/* Character Avatar */}
              <div className="flex flex-col items-center pt-10 pb-6">
                <div className="relative mb-[-24px] size-[96px] shrink-0">
                  <div className="absolute inset-0 rounded-full" />
                  <img
                    src={cosmo}
                    alt="cosmo avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-20 flex w-[133.865px] items-center justify-center gap-[7.096px] rounded-[59.135px] bg-white px-[11.827px] py-[7.096px]">
                  <p className="font-Qilka text-[18.923px] leading-[14.192px] font-bold whitespace-nowrap text-[#212121] not-italic">
                    Cosmo
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCharacterActive(!characterActive);
                    }}
                    className="flex size-[27.467px] items-center justify-center transition-all"
                  >
                    <img
                      src={characterActive ? activeSwitch : inactiveSwitch}
                      alt={characterActive ? "Active" : "Inactive"}
                      className="h-full w-full"
                    />
                  </button>
                </div>
              </div>

              {/* Audio Visualization and Name Input */}
              <div className="flex w-full flex-col gap-[25px]">
                {/* Audio Visualization and Name Input Row */}
                <div className="flex h-[58px] w-full items-center gap-32 md:gap-[193px]">
                  {/* Audio Visualization */}
                  <div className="relative size-[58px] shrink-0 rounded-[76.686px] bg-[rgba(134,110,255,0.3)]">
                    <div className="absolute top-1/2 left-1/2 size-[46.639px] -translate-x-1/2 -translate-y-1/2 rounded-[76.686px] bg-[rgba(134,110,255,0.5)]">
                      <div className="absolute top-1/2 left-1/2 size-[34.082px] -translate-x-1/2 -translate-y-1/2 rounded-[76.686px] bg-[#866eff]">
                        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[2.99px]">
                          {barHeights.map((height, index) => (
                            <motion.div
                              key={index}
                              className="w-[2.99px] rounded-[59.196px] bg-white"
                              style={{ height: `${height}px` }}
                              animate={{
                                height: [
                                  `${height}px`,
                                  `${height * 1.5}px`,
                                  `${height}px`,
                                ],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: index * 0.1,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Character Name Input */}
                  <div className="relative flex h-[40px] w-[153px] shrink-0 items-center rounded-[99px] border border-[#866eff] bg-[rgba(134,110,255,0.1)] px-[13px] shadow-[0px_-1px_19.6px_0px_rgba(254,195,175,0.25)]">
                    {isEditingName ? (
                      <input
                        type="text"
                        value={characterName}
                        onChange={(e) => setCharacterName(e.target.value)}
                        onBlur={() => setIsEditingName(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") setIsEditingName(false);
                        }}
                        className="font-Qilka flex-1 bg-transparent text-[20px] leading-[28px] font-bold text-[#866eff] outline-none"
                        autoFocus
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <>
                        <p className="font-Qilka text-[20px] leading-[28px] font-bold whitespace-nowrap text-[#866eff] not-italic">
                          {characterName}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsEditingName(true);
                          }}
                          className="ml-auto size-[24px] shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#866eff"
                            strokeWidth="2"
                            className="h-full w-full"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Read Along Toggle Card */}
                <div className="flex h-[48px] w-full items-center justify-between rounded-[16px] border border-[#faf4f2] bg-white px-4 py-2">
                  <p className="font-abezee text-[16px] leading-[22px] font-normal text-[#212121] not-italic">
                    Read along with {characterName}
                  </p>
                  <img
                    src={switchIcon}
                    alt="switch icon"
                    className="size-[27.467px]"
                  />
                  {/* <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setReadAlongActive(!readAlongActive);
                    }}
                    className={`flex size-[27.467px] items-center rounded-[99px] transition-all ${
                      readAlongActive
                        ? "bg-[#4807ec] pr-1 pl-6"
                        : "bg-[#e0e0e0] pr-6 pl-1"
                    }`}
                  >
                    <img
                      src={switchIcon}
                      alt="switch icon"
                      className="h-full w-full"
                    />
                  </button> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SqueezeCardThree;
