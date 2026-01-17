import { motion } from "framer-motion";
import { trackCTAClick } from "../lib/analytics";

type ParentalControlsProps = {
  openDownloadModal: () => void;
};

export default function ParentalControls({
  openDownloadModal,
}: ParentalControlsProps) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 md:mt-10"
    >
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
        <div className="order-2 flex flex-col justify-between gap-4 md:order-1 md:gap-8">
          <h2 className="font-Qilka text-2xl leading-tight font-bold text-[#231F1E] md:text-[48px]">
            Interact with the stories you read
          </h2>

          <p className="font-abezee text-base leading-relaxed text-[#4F4C4B] md:text-[24px] md:leading-[32px]">
            Don’t just read and listen to stories, interact and see how well you comprehend the stories. This helps your child with their attentive and cognitive skill.
          </p>

          <button
            onClick={openDownloadModal}
            className="font-abezee h-14 w-full rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl md:h-[64px] md:w-[280px]"
          >
            Download now
          </button>
        </div>

        <div className="order-1 flex w-full items-center justify-center md:justify-end overflow-hidden">
          <img
            src="landingpage/interactive-story.png"
            className="object-contain"
            alt="mobile"
          />
        </div>
      </div>
    </motion.div>
  );
}
