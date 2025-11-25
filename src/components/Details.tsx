import { motion } from "framer-motion";

export default function Details() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 md:mt-40"
    >
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="flex h-64 w-full items-center justify-center overflow-hidden rounded-[40px] bg-[#D6E0FC] md:h-[466px] md:rounded-[60px]"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative -mb-16 md:-mb-25">
              <img
                src="mobile-2.png"
                className="h-48 object-contain md:h-[507px]"
                alt="mobile"
              />
            </div>

            <div className="relative mb-30 md:mb-47">
              <img
                src="mobile-1.png"
                className="h-36 object-contain md:h-[386px]"
                alt="mobile"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between gap-4 md:gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-Qilka text-2xl leading-tight font-bold text-[#231F1E] md:text-[48px]"
          >
            Built with kids in mind + AI integration
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-abezee text-base leading-relaxed text-[#4F4C4B] md:text-[24px] md:leading-[32px]"
          >
            A combination of intentionality, AI integration and simplicity, we
            have created an amazing digital storybook to aid your kids all the
            way through in their day to day lives.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                "_blank",
              )
            }
            className="font-abezee h-[60px] w-[251px] rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl md:h-[64px] md:w-[280px]"
          >
            Download now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
