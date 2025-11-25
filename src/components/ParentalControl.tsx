import { motion } from "framer-motion";

export default function ParentalControls() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 md:mt-40"
    >
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
        <div className="order-2 flex flex-col justify-between gap-4 md:order-1 md:gap-8">
          <h2 className="font-Qilka text-2xl leading-tight font-bold text-[#231F1E] md:text-[48px]">
            Complete Parental Control
          </h2>

          <p className="font-abezee text-base leading-relaxed text-[#4F4C4B] md:text-[24px] md:leading-[32px]">
            Enjoy full parental control with age filters, category choices,
            story blocking, screen-time limits, and activity tracking to keep
            your child's story experience safe.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                "_blank",
              )
            }
            className="font-abezee h-14 w-full rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl md:h-[64px] md:w-[280px]"
          >
            Download now
          </button>
        </div>

        <div className="order-1 flex h-64 w-full items-center justify-center overflow-hidden rounded-[40px] bg-[#D6FCE1] md:order-2 md:h-[466px] md:rounded-[60px]">
          <div className="flex items-end gap-2 md:gap-4">
            <div className="relative -mb-6 md:-mb-7">
              <img
                src="jacob-mob.png"
                className="h-48 object-contain md:h-[507px]"
                alt="mobile"
              />
            </div>

            <div className="relative mb-30 md:mb-48">
              <img
                src="jacob-mob-ii.png"
                className="h-36 object-contain md:h-[386px]"
                alt="mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
