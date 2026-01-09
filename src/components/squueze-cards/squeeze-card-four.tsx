import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lady from "/squeeze/lady.svg";
import speaker from "/squeeze/speaker.svg";

interface SqueezeCardFourProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SqueezeCardFour = ({ isExpanded, onToggle }: SqueezeCardFourProps) => {
  const [characterName, setCharacterName] = useState("Fanice");
  const [isEditingName, setIsEditingName] = useState(false);

  // Audio visualization bar heights (animated) - orange themed
  const barHeights = [5.381, 8.969, 23.918, 8.969, 5.381];

  const storyText = `Once upon a time, in a bright green forest full of tall trees and singing birds, there lived a kind, fluffy bear named Bobo.

Bobo loved the forest. He loved the...`;

  return (
    <motion.div
      className="relative h-full cursor-pointer overflow-hidden rounded-[24px] bg-[#ffcbf7] p-8 transition-all duration-500"
      style={{
        width: isExpanded ? "30.75rem" : "8.5rem",
        border: `4px solid ${isExpanded ? "rgba(139,4,118,0.2)" : "rgba(139,4,118,0.2)"}`,
      }}
      onClick={() => !isEditingName && onToggle()}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
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
                className="font-Qilka text-[32px] leading-[32px] font-bold whitespace-nowrap text-[#8b0476] not-italic"
              >
                Passive mode
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
                  alt="Plain mode icon"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[9px]">
                <h3 className="font-Qilka text-[32px] leading-[32px] font-bold text-[#212121] not-italic">
                  Plain mode
                </h3>
                <p className="font-abezee text-[16px] leading-[20px] font-normal text-[#616161] not-italic">
                  Read stories without answering questions pertaining to the
                  story.
                </p>
              </div>
            </motion.div>

            {/* Character and Story Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {/* Character Name Card */}
              <div className="flex flex-col items-start rounded-[50px] border-[0.5px] border-[#e0e0e0] bg-white px-2 py-[10px]">
                <div className="flex w-full items-center gap-6">
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex items-center pl-3">
                      {isEditingName ? (
                        <input
                          type="text"
                          value={characterName}
                          onChange={(e) => setCharacterName(e.target.value)}
                          onBlur={() => setIsEditingName(false)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") setIsEditingName(false);
                          }}
                          className="font-Qilka flex-1 bg-transparent text-[18px] leading-[22px] font-bold text-[#212121] outline-none"
                          autoFocus
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        <p className="font-Qilka text-[18px] leading-[22px] font-bold whitespace-nowrap text-[#212121] not-italic">
                          {characterName}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditingName(true);
                      }}
                      className="size-6 shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#212121"
                        strokeWidth="2"
                        className="h-full w-full"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                  </div>
                  {/* Audio Visualization */}
                  <div className="relative size-[58px] shrink-0 rounded-[76.686px] bg-[#ffe1d5]">
                    <div className="absolute top-1/2 left-1/2 size-[46.639px] -translate-x-1/2 -translate-y-1/2 rounded-[76.686px] bg-[#ffbb9d]">
                      <div className="bg-primary absolute top-1/2 left-1/2 size-[34.082px] -translate-x-1/2 -translate-y-1/2 rounded-[76.686px]">
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
                </div>
              </div>

              {/* Story Text Card */}
              <div className="flex flex-col items-center rounded-[24px] bg-[#febbf4] px-4 py-[13px] backdrop-blur-[14.2px]">
                <div className="flex w-full flex-col items-start">
                  <div className="font-Qilka text-[20px] leading-[36px] font-bold text-[#212121] not-italic">
                    {storyText.split("\n").map((line, index) => (
                      <p key={index} className={index === 0 ? "mb-0" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SqueezeCardFour;
