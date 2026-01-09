import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lady from "/squeeze/lady.svg";
import speaker from "/squeeze/speaker.svg";

interface AnswerOption {
  id: string;
  text: string;
}

interface SqueezeCardSixProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SqueezeCardSix = ({ isExpanded, onToggle }: SqueezeCardSixProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("Elephant");

  const answerOptions: AnswerOption[] = [
    { id: "frog", text: "Frog" },
    { id: "elephant", text: "Elephant" },
    { id: "lion", text: "Lion" },
  ];

  return (
    <motion.div
      className="relative h-full cursor-pointer overflow-hidden rounded-[24px] bg-[#cbffe0] p-8 transition-all duration-500"
      style={{
        width: isExpanded ? "30.75rem" : "8.5rem",
        border: `4px solid ${isExpanded ? "rgba(4,139,58,0.2)" : "rgba(4,139,58,0.2)"}`,
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
                className="font-Qilka text-[32px] leading-[32px] font-bold whitespace-nowrap text-[#048b3a] not-italic"
              >
                Interactive mode
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
                  alt="Interactive mode icon"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[9px]">
                <h3 className="font-Qilka text-[32px] leading-[32px] font-bold text-[#212121] not-italic">
                  Interactive mode
                </h3>
                <p className="font-abezee text-[16px] leading-[20px] font-normal text-[#616161] not-italic">
                  Get your kids to read stories and also answer questions to the
                  story.
                </p>
              </div>
            </motion.div>

            {/* Question Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Question Mark Icon */}
              <div className="relative size-20 shrink-0">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-green-500">
                  <span className="text-4xl font-bold text-white">?</span>
                </div>
              </div>

              {/* Question and Answers */}
              <div className="flex w-full flex-col gap-6">
                {/* Question */}
                <div className="flex w-full items-center">
                  <p className="font-Qilka flex-1 text-[18px] leading-[22px] font-bold text-[#212121] not-italic">
                    4. Which friend goes "toot!"?
                  </p>
                </div>

                {/* Answer Options */}
                <div className="flex w-full flex-col gap-4">
                  {answerOptions.map((option) => {
                    const isSelected = selectedAnswer === option.text;
                    return (
                      <button
                        key={option.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAnswer(option.text);
                        }}
                        className="flex w-full items-center gap-3"
                      >
                        {/* Radio Button */}
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-[20px] border-2 border-[#646577] p-1.5">
                          <div
                            className={`size-full rounded-full transition-all ${
                              isSelected ? "bg-[#ecc607]" : "bg-[#ffcbf7]"
                            }`}
                          />
                        </div>
                        {/* Answer Text */}
                        <p className="font-abezee text-[16px] leading-[22px] font-normal text-[#616161] not-italic">
                          {option.text}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SqueezeCardSix;
