export default function WhatWeOffer() {
  const features = [
    {
      title: "AI-powered voices with playful, natural tones",
      icon: "offer-1.png",
      bgColor: "#D6E0FC",
      color: "#5435AB",
      elipse: "#B6C1E0",
    },
    {
      title: "Parent controls for safe content selection",
      icon: "offer-2.png",
      bgColor: "#D6FCE1",
      color: "#35AB5E",
      elipse: "#ADEDBF",
    },
    {
      title: "Safe & Curated Content for your kids",
      icon: "offer-3.png",
      bgColor: "#FCF8D6",
      color: "#AB9535",
      elipse: "#EEE8B3",
    },
  ];

  return (
    <div>
      <section className="md:max-w-[1239px] mx-auto mt-20 md:mt-40 px-4">
        <div className="container mx-auto">
          <h2 className="font-Qilka mb-8 md:mb-15 text-center text-3xl md:text-[56px] font-bold text-[#231F1E]">
            What we offer your kids
          </h2>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex h-auto md:h-[520px] flex-col justify-between rounded-[31.28px] p-6 md:p-8 shadow-lg"
                style={{ background: feature.bgColor }}
              >
                <div
                  style={{ background: feature.elipse }}
                  className="relative mx-auto flex h-48 w-48 md:h-[262px] md:w-[262px] items-center justify-center rounded-full mb-6 md:mb-4"
                >
                  <img
                    src="Vector.png"
                    className="absolute h-4 w-4 md:h-[20px] md:w-[20px]"
                    style={{ top: "40px", left: "130px" }}
                  />

                  <img
                    src="Vector.png"
                    className="absolute h-4 w-4 md:h-[20px] md:w-[20px]"
                    style={{ top: "200px", left: "260px" }}
                  />

                  <img
                    src="Vector.png"
                    className="absolute h-4 w-4 md:h-[20px] md:w-[20px]"
                    style={{ top: "220px", left: "150px" }}
                  />

                  <img
                    src="Vector.png"
                    className="absolute h-5 w-5 md:h-[24px] md:w-[24px]"
                    style={{ top: "170px", left: "22px" }}
                  />

                  <div className="text-center">
                    <img
                      className="h-32 w-40 md:h-[191px] md:w-[246px]"
                      src={feature.icon}
                      alt="card-icon"
                    />
                  </div>
                </div>

                <h3
                  style={{ color: feature.color }}
                  className="font-abezee text-xl md:text-[32px] md:leading-[41.71px] leading-snug"
                >
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}