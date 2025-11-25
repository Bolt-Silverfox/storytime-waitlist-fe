import { motion } from "framer-motion";

export default function Features() {
  const features = [
    { id: 1, text: "Voice options", active: true },
    { id: 2, text: "Smart story filters" },
    { id: 3, text: "Read story along AI" },
    { id: 4, text: "Smart story filters" },
    { id: 5, text: "Favorite stories" },
    { id: 6, text: "Interactive mode" },
  ];

  return (
    <section className="mt-20 md:mt-40">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-Qilka mb-15 text-center text-[32px] font-bold text-[#231F1E] md:text-[56px]"
      >
        Check out our amazing features
      </motion.h2>

      {/* mb */}
      <div className="mx-auto w-full rounded-3xl bg-white p-6 md:p-8 lg:hidden">
        {/* img */}
        <div className="mb-10 flex justify-center rounded-[32px] bg-[#FFE9DF]">
          <div className="flex justify-center overflow-hidden p-4">
            <img
              src="voice-mob.png"
              alt="image"
              className="-mb-10 h-[420px] object-contain"
            />
          </div>
        </div>

        {/* list */}
        <div className="mb-10 space-y-5 p-7">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="font-abezee flex items-center gap-3"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                  feature.active
                    ? "bg-[#EC4007] text-white"
                    : "bg-[#EC400733] text-[#EC4007]"
                }`}
              >
                {feature.id}
              </div>
              <span className="text-[20px] text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="">
          <h3 className="font-Qilka mb-4 text-[32px] font-bold text-[#231F1E]">
            Voice options
          </h3>

          <p className="font-abezee mb-6 text-[18px] leading-[32px]">
            Calming expressive voices tailored to their story
          </p>

          <button
            onClick={() =>
              window.open(
                "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                "_blank",
              )
            }
            className="font-abezee w-[280px] rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
          >
            Download now
          </button>
        </div>
      </div>

      {/* dsktop */}
      <div className="mx-auto hidden w-full rounded-3xl bg-[#FFF2EC] md:p-12 lg:block">
        <div className="grid grid-cols-3 items-center gap-8">
          {/* covered */}
          <div className="space-y-[24px]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="font-abezee flex items-center gap-3 p-3 text-[24px]"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                    feature.active
                      ? "bg-[#EC4007] text-white"
                      : "bg-[#EC400733] text-[#EC4007]"
                  }`}
                >
                  {feature.id}
                </div>
                <span className="font-medium text-gray-700">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* solved */}
          <div className="flex w-full items-center justify-center bg-[#FFF2EC]">
            <img src="voice-mob.png" className="-mb-12" alt="image" />
          </div>

          {/* solved */}
          <div className="text-left">
            <h3 className="font-Qilka mb-4 text-[48px] font-bold text-[#231F1E]">
              Voice options
            </h3>

            <p className="font-abezee mb-6 text-[24px] leading-[40px]">
              Calming expressive voices tailored to their story
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                  "_blank",
                )
              }
              className="font-abezee w-[280px] rounded-full bg-[#EC4007] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
            >
              Download now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
