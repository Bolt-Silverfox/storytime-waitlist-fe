import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lady from "/squeeze/lady.svg";
import speaker from "/squeeze/speaker.svg";
import jane from "/squeeze/jane.svg";
import jacob from "/squeeze/jacob.svg";
import tim from "/squeeze/tim.svg";

interface Profile {
  name: string;
  ageRange: string;
  avatar?: string;
  bgColor: string;
}

interface SqueezeCardTwoProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SqueezeCardTwo = ({ isExpanded, onToggle }: SqueezeCardTwoProps) => {
  const [profiles] = useState<Profile[]>([
    { name: "Jane", avatar: jane, ageRange: "5-8 years", bgColor: "#fbbf24" }, // yellow - top center
    {
      name: "Jacob",
      avatar: jacob,
      ageRange: "9-12 years",
      bgColor: "#0d9488",
    }, // teal - bottom left
    { name: "Tim", avatar: tim, ageRange: "1-4 years", bgColor: "#d1d5db" }, // gray - bottom right
  ]);

  return (
    <motion.div
      className="relative h-full cursor-pointer overflow-hidden rounded-[24px] bg-[#fff6cb] p-8 transition-all duration-500"
      style={{
        width: isExpanded ? "30.75rem" : "8.5rem",
        border: `4px solid ${isExpanded ? "rgba(241,0,0,0.2)" : "rgba(255,211,0,0.2)"}`,
      }}
      onClick={onToggle}
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
            <div className="flex h-[330px] w-[32px] items-center justify-center">
              <motion.p
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: -90, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-Qilka text-[32px] leading-[32px] font-bold whitespace-nowrap text-[#8b7404] not-italic"
              >
                Personalized profiles
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
                  alt="Personalized profiles icon"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[9px]">
                <h3 className="font-Qilka text-[32px] leading-[32px] font-bold text-[#212121] not-italic">
                  Personalized profiles
                </h3>
                <p className="font-abezee text-[16px] leading-[20px] font-normal text-[#616161] not-italic">
                  Personalized profile for your kids of different ages
                </p>
              </div>
            </motion.div>

            {/* Profile Cards */}
            <div className="relative flex h-[237px] items-start justify-center">
              {/* Jane - Top Center */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-5 left-[165px] flex w-[90px] flex-col items-center"
              >
                <div className="relative mb-4 size-[89px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: profiles[0].bgColor }}
                  />
                  {profiles[0].avatar && (
                    <img
                      src={profiles[0].avatar}
                      alt={profiles[0].name}
                      className="relative z-10 h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="flex w-full flex-col items-center gap-1">
                  <p className="font-Qilka text-[22px] leading-[22px] font-bold text-[#212121] not-italic">
                    {profiles[0].name}
                  </p>
                  <p className="font-abezee leading-[22px] font-normal text-[#616161] not-italic">
                    {profiles[0].ageRange}
                  </p>
                </div>
              </motion.div>

              {/* Jacob - Bottom Left */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-[102px] left-5 flex w-[93px] flex-col items-center"
              >
                <div className="relative mb-4 size-[94px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: profiles[1].bgColor }}
                  />
                  {profiles[1].avatar && (
                    <img
                      src={profiles[1].avatar}
                      alt={profiles[1].name}
                      className="relative z-10 h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="flex w-full flex-col items-center gap-1">
                  <p className="font-Qilka text-[22px] leading-[22px] font-bold text-[#212121] not-italic">
                    {profiles[1].name}
                  </p>
                  <p className="font-abezee leading-[22px] font-normal text-[#616161] not-italic">
                    {profiles[1].ageRange}
                  </p>
                </div>
              </motion.div>

              {/* Tim - Bottom Right */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-[102px] right-5 flex w-[93px] flex-col items-center"
              >
                <div className="relative mb-4 size-[89px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: profiles[2].bgColor }}
                  />
                  {profiles[2].avatar && (
                    <img
                      src={profiles[2].avatar}
                      alt={profiles[2].name}
                      className="relative z-10 h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="flex w-full flex-col items-center gap-1">
                  <p className="font-Qilka text-[22px] leading-[22px] font-bold text-[#212121] not-italic">
                    {profiles[2].name}
                  </p>
                  <p className="font-abezee leading-[22px] font-normal text-[#616161] not-italic">
                    {profiles[2].ageRange}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SqueezeCardTwo;
