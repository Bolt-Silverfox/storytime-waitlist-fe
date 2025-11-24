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
    <section className="max-w-7xl mt-20 md:mt-40 mx-auto px-4">
      <h2 className="font-Qilka mb-15 text-center text-[32px] md:text-[56px] font-bold text-[#231F1E]">
        Check out our amazing features
      </h2>

     {/* mb */}
      <div className="w-full mx-auto bg-white rounded-3xl p-6 md:p-8 lg:hidden">

        {/* img */}
        <div className="flex justify-center mb-10  bg-[#FFE9DF] rounded-[32px] ">
          <div className="  p-4 flex justify-center overflow-hidden">
            <img src="voice-mob.png" alt="image" className="h-[420px] object-contain -mb-10" />
          </div>
        </div>

        {/* list */}
        <div className="space-y-5 p-7 mb-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-3 font-abezee  "
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  feature.active
                    ? "bg-[#EC4007] text-white"
                    : "bg-[#EC400733] text-[#EC4007]"
                }`}
              >
                {feature.id}
              </div>
              <span className="text-gray-700 text-[20px]">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        
        <div className="">
          <h3 className="font-Qilka text-[32px] font-bold mb-4 text-[#231F1E]">
            Voice options
          </h3>

          <p className="font-abezee text-[18px] mb-6 leading-[32px]">
            Calming expressive voices tailored to their story
          </p>

          <button
            onClick={() =>
              window.open(
                "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                "_blank"
              )
            }
            className="bg-[#EC4007] font-abezee w-[280px] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Download now
          </button>
        </div>
      </div>

      {/* dsktop */}
      <div className="hidden lg:block w-full mx-auto bg-[#FFF2EC] rounded-3xl md:p-12">
        <div className="grid grid-cols-3 gap-8 items-center">

          {/* covered */}
          <div className="space-y-[24px]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex text-[24px] font-abezee items-center gap-3 p-3"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    feature.active
                      ? "bg-[#EC4007] text-white"
                      : "bg-[#EC400733] text-[#EC4007]"
                  }`}
                >
                  {feature.id}
                </div>
                <span className="text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* solved */}
          <div className="flex justify-center items-center bg-[#FFF2EC] w-full ">
            <img src="voice-mob.png" className="-mb-12" alt="image" />
          </div>

          {/* solved */}
          <div className="text-left">
            <h3 className="font-Qilka text-[48px] font-bold mb-4 text-[#231F1E]">
              Voice options
            </h3>

            <p className="font-abezee mb-6 leading-[40px] text-[24px]">
              Calming expressive voices tailored to their story
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                  "_blank"
                )
              }
              className="bg-[#EC4007] font-abezee w-[280px] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Download now
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
