import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FaqComponent = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-abezee w-full max-w-[622px] text-[20px] leading-9">
      {/* QUESTION ROW */}
      <div className="flex items-start justify-between gap-4 md:gap-6">
        <div
          onClick={() => setOpen(!open)}
          className="relative w-full min-h-18 md:min-h-24 px-4 md:px-[34px] rounded-[14px] flex items-center cursor-pointer"
        >* clicking on logo doesn't redirect to home
* remove max-width, use padding

          <svg
            className="absolute inset-0 -z-10 h-full w-full rounded-[14px]"
            viewBox="0 0 622 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M584 0C604.987 0 622 17.0132 622 38C622 58.9868 604.987 76 584 76H60.0146L3.72168 96.6152L11.7842 65.5088C4.52409 58.5879 0 48.8223 0 38C0 17.0132 17.0132 0 38 0H584Z"
              fill="#FFF2EC"
            />
          </svg>

          <p className="pl-8 -mt-4 md:pl-12 text-[16px] md:text-2xl leading-5">
            {question}
          </p>* clicking on logo d* clicking on logo doesn't redirect to home
* remove max-width, use padding
oesn't redirect to home
* remove max-width, use padding

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="bg-[#FFF2EC] p-4 md:p-5 rounded-full mt-0.5 md:mt-2 cursor-pointer flex items-center justify-center"
        >
          {open ? (
            <Minus color="#EC4007" size={20} strokeWidth={4} />
          ) : (
            <Plus color="#EC4007" size={20} strokeWidth={4} />
          )}
        </button>
      </div>

      {/* ANSWER SECTION */}
      <AnimatePresence initial={false}>
        {open && (
          <div className="relative mt-2 w-full px-4 md:px-[34px] rounded-[14px] overflow-hidden">
            {/* STATIC SVG background */}
            <svg
              className="absolute inset-0 w-full h-full rounded-[14px] -z-10"
              viewBox="0 0 622 347"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M30 0C13.4315 0 0 13.4315 0 30V300.313C0 316.882 13.4315 330.313 30 330.313H581.278L620.542 346.546L614.388 320.281C619.121 314.977 622 307.982 622 300.313V30C622 13.4315 608.569 0 592 0H30Z"
                fill="#FFF2EC"
              />
            </svg>

            {/* INNER CONTENT ANIMATES → no jump */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="text-[16px] md:text-2xl leading-relaxed pr-2 md:pr-4 py-4 md:py-[22px]">
                {answer}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqComponent;
