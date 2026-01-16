import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lady from "/squeeze/lady.svg";
import speaker from "/squeeze/speaker.svg";
import cosmo from "/squeeze/cosmo.png";
import fanice from "/squeeze/fanice.png";
import nimbus from "/squeeze/nimbus.png";
import activeSwitch from "/squeeze/active-switch.svg";
import inactiveSwitch from "/squeeze/inactive-switch.svg";

interface VoiceCharacter {
  name: string;
  avatar?: string;
  bgColor: string;
  active: boolean;
}

interface SqueezeCardOneProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SqueezeCardOne = ({ isExpanded, onToggle }: SqueezeCardOneProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [characters, setCharacters] = useState<VoiceCharacter[]>([
    { name: "Cosmo", avatar: cosmo, bgColor: "#fbbf24", active: true }, // yellow-400
    { name: "Fanice", avatar: fanice, bgColor: "#0d9488", active: false }, // teal-600
    { name: "Nimbus", avatar: nimbus, bgColor: "#d1d5db", active: false }, // gray-300
  ]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCharacter = (index: number) => {
    setCharacters((prev) =>
      prev.map((char, i) => ({
        ...char,
        active: i === index ? !char.active : false,
      })),
    );
  };

  // On mobile, always show expanded state
  const shouldBeExpanded = isMobile ? true : isExpanded;

  return (
    <motion.div
      className={`relative cursor-pointer overflow-hidden rounded-[24px] bg-[#ffd5d5] p-8 transition-all duration-500 ${
        shouldBeExpanded
          ? "h-[600px] w-[95vw] md:h-full md:w-152"
          : "h-[500px] w-[95vw] md:h-full md:w-38"
      }`}
      style={{
        border: `4px solid ${shouldBeExpanded ? "rgba(241,0,0,0.2)" : "rgba(255,211,0,0.2)"}`,
      }}
      onClick={onToggle}
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
            className="flex h-full flex-col items-center justify-center gap-[103px]"
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
                alt="Lady character"
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* Vertical Text */}
            <div className="flex h-[339px] w-[32px] items-center justify-center">
              <motion.p
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: -90, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-Qilka text-[32px] leading-[32px] font-bold whitespace-nowrap text-[#ff4a4a] not-italic"
              >
                Multiple voice options
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
                  alt="Voice options icon"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[9px]">
                <h3 className="font-Qilka text-[32px] leading-[32px] font-bold text-[#212121] not-italic">
                  Multiple voice options
                </h3>
                <p className="font-abezee text-[16px] leading-[20px] font-normal text-[#616161] not-italic">
                  Calm, expressive narration for every story mood
                </p>
              </div>
            </motion.div>

            {/* Character Avatars */}
            <div className="relative flex items-start justify-center">
              {/* Cosmo - Top Center */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-[13px] left-1/2 flex -translate-x-1/2 flex-col items-center"
              >
                <div className="relative mb-[-24px] size-[116px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    // style={{ backgroundColor: characters[0].bgColor }}
                  />
                  {characters[0].avatar && (
                    <img
                      src={characters[0].avatar}
                      alt={characters[0].name}
                      className="relative z-10 h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="relative z-20 flex w-[133.865px] items-center justify-center gap-[7.096px] rounded-[59.135px] bg-white px-[11.827px] py-[7.096px]">
                  <p className="font-Qilka text-[18.923px] leading-[14.192px] font-bold whitespace-nowrap text-[#212121] not-italic">
                    {characters[0].name}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCharacter(0);
                    }}
                    className="flex size-[27.467px] items-center justify-center transition-all"
                  >
                    <img
                      src={characters[0].active ? activeSwitch : inactiveSwitch}
                      alt={characters[0].active ? "Active" : "Inactive"}
                      className="h-full w-full"
                    />
                  </button>
                </div>
              </motion.div>

              {/* Fanice - Bottom Left */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-[163px] -left-5 flex flex-col items-center md:left-[43px]"
              >
                <div className="relative mb-[-24px] size-[116px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: characters[1].bgColor }}
                  />
                  {characters[1].avatar && (
                    <img
                      src={characters[1].avatar}
                      alt={characters[1].name}
                      className="relative z-10 h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="relative z-20 flex w-[133.865px] items-center justify-center gap-[7.096px] rounded-[59.135px] bg-white px-[11.827px] py-[7.096px]">
                  <p className="font-Qilka text-[18.923px] leading-[14.192px] font-bold whitespace-nowrap text-[#212121] not-italic">
                    {characters[1].name}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCharacter(1);
                    }}
                    className="flex size-[27.467px] items-center justify-center transition-all"
                  >
                    <img
                      src={characters[1].active ? activeSwitch : inactiveSwitch}
                      alt={characters[1].active ? "Active" : "Inactive"}
                      className="h-full w-full"
                    />
                  </button>
                </div>
              </motion.div>

              {/* Nimbus - Bottom Right */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-[163px] -right-5 flex flex-col items-center md:right-[43px]"
              >
                <div className="relative mb-[-24px] size-[116px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: characters[2].bgColor }}
                  />
                  {characters[2].avatar && (
                    <img
                      src={characters[2].avatar}
                      alt={characters[2].name}
                      className="relative z-10 h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="relative z-20 flex w-[133.865px] items-center justify-center gap-[7.096px] rounded-[59.135px] bg-white px-[11.827px] py-[7.096px]">
                  <p className="font-Qilka text-[18.923px] leading-[14.192px] font-bold whitespace-nowrap text-[#212121] not-italic">
                    {characters[2].name}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCharacter(2);
                    }}
                    className="flex size-[27.467px] items-center justify-center transition-all"
                  >
                    <img
                      src={characters[2].active ? activeSwitch : inactiveSwitch}
                      alt={characters[2].active ? "Active" : "Inactive"}
                      className="h-full w-full"
                    />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SqueezeCardOne;
