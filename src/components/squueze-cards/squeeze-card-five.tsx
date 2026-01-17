import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lady from "/squeeze/lady.svg";
import speaker from "/squeeze/speaker.svg";

interface SqueezeCardFiveProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SqueezeCardFive = ({ isExpanded, onToggle }: SqueezeCardFiveProps) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const weekDays = [
    { short: "Sun", full: "Sunday" },
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
    { short: "Sat", full: "Saturday" },
  ];

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <motion.div
      className="relative h-full cursor-pointer overflow-hidden rounded-[24px] bg-[#cbceff] p-8 transition-all duration-500"
      style={{
        width: isExpanded ? "30.75rem" : "8.5rem",
        border: `4px solid ${isExpanded ? "rgba(4,11,139,0.2)" : "rgba(4,11,139,0.2)"}`,
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
                className="font-Qilka text-[32px] leading-[32px] font-bold whitespace-nowrap text-[#040b8b] not-italic"
              >
                Daily challenges
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
                  alt="Daily challenges icon"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[9px]">
                <h3 className="font-Qilka text-[32px] leading-[32px] font-bold text-[#212121] not-italic">
                  Daily challenges
                </h3>
                <p className="font-abezee text-[16px] leading-[20px] font-normal text-[#616161] not-italic">
                  Get your kids to learn new words, learn new sentences with
                  daily challenge.
                </p>
              </div>
            </motion.div>

            {/* Challenge Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="flex h-[316px] w-full flex-col items-center justify-center rounded-[10px] bg-[#4807ec] px-6 pt-6 pb-7">
                <div className="flex w-full flex-col gap-[23px]">
                  {/* Challenge Header */}
                  <div className="flex w-full flex-col items-center gap-6">
                    <div className="flex w-full flex-col items-center gap-1 text-center text-white">
                      <h4 className="font-Qilka text-[24px] leading-[32px] font-bold not-italic">
                        Jacob's Challenge
                      </h4>
                      <div className="font-abezee text-[14px] leading-[20px] font-normal not-italic">
                        <p className="mb-0">
                          Track and encourage Jacob to keep up with the
                        </p>
                        <p>good work</p>
                      </div>
                    </div>

                    {/* Week Days Grid */}
                    <div className="flex w-full flex-col gap-[14px]">
                      {/* First Row */}
                      <div className="flex w-full gap-2">
                        {weekDays.slice(0, 4).map((day) => (
                          <button
                            key={day.short}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDay(day.short);
                            }}
                            className={`flex flex-1 items-center justify-center rounded-[1000px] border-[0.5px] px-4 py-2 transition-all ${
                              selectedDays.includes(day.short)
                                ? "border-[#814fff] bg-[rgba(93,32,248,0.8)]"
                                : "border-[#814fff] bg-[rgba(93,32,248,0.5)]"
                            }`}
                          >
                            <p className="font-abezee text-[14px] leading-[20px] font-normal whitespace-nowrap text-white not-italic">
                              {day.short}
                            </p>
                          </button>
                        ))}
                      </div>
                      {/* Second Row */}
                      <div className="flex w-full gap-2">
                        {weekDays.slice(4, 7).map((day) => (
                          <button
                            key={day.short}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDay(day.short);
                            }}
                            className={`flex w-[77px] items-center justify-center rounded-[1000px] border-[0.5px] px-4 py-2 transition-all ${
                              selectedDays.includes(day.short)
                                ? "border-[#814fff] bg-[rgba(93,32,248,0.8)]"
                                : "border-[#814fff] bg-[rgba(93,32,248,0.5)]"
                            }`}
                          >
                            <p className="font-abezee text-[14px] leading-[20px] font-normal whitespace-nowrap text-white not-italic">
                              {day.short}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative h-0 w-full">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-px w-full bg-white/20" />
                    </div>
                  </div>

                  {/* See Challenge Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle navigation to challenge details
                    }}
                    className="flex h-8 w-full items-center gap-1 rounded-[33px] border-[0.5px] border-[#814fff] bg-[#6021ff] px-3 py-2"
                  >
                    <p className="font-abezee flex-1 text-[12px] leading-normal font-normal text-white not-italic">
                      See Jacobs' challenge
                    </p>
                    <div className="flex size-4 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        className="h-full w-full rotate-180"
                      >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SqueezeCardFive;
