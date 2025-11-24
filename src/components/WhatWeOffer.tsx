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
      <section className="w-full max-w-[1239px] mx-auto mt-20 md:mt-40 px-4">
        <div className="container mx-auto">
          <h2 className="font-Qilka mb-8 md:mb-15 text-center text-2xl md:text-[56px] font-bold text-[#231F1E]">
            What we offer your kids
          </h2>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[400px] md:max-w-none">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex h-auto md:h-[520px] flex-col justify-between rounded-[20px] md:rounded-[31.28px] p-6 md:p-8 shadow-lg mx-auto md:mx-0 w-full md:w-auto"
                style={{ background: feature.bgColor }}
              >
                <div
                  style={{ background: feature.elipse }}
                  className="relative mx-auto flex h-40 w-40 md:h-[262px] md:w-[262px] items-center justify-center rounded-full mb-4 md:mb-4"
                >
                  <img
                    src="Vector.png"
                    className="absolute h-3 w-3 md:h-[20px] md:w-[20px]"
                    style={{ top: "30px", left: "95px" }}
                  />

                  <img
                    src="Vector.png"
                    className="absolute h-3 w-3 md:h-[20px] md:w-[20px]"
                    style={{ top: "150px", left: "180px" }}
                  />

                  <img
                    src="Vector.png"
                    className="absolute h-3 w-3 md:h-[20px] md:w-[20px]"
                    style={{ top: "160px", left: "100px" }}
                  />

                  <img
                    src="Vector.png"
                    className="absolute h-4 w-4 md:h-[24px] md:w-[24px]"
                    style={{ top: "130px", left: "15px" }}
                  />

                  <div className="text-center">
                    <img
                      className="h-24 w-32 md:h-[191px] md:w-[246px] object-contain"
                      src={feature.icon}
                      alt="card-icon"
                    />
                  </div>
                </div>

                <h3
                  style={{ color: feature.color }}
                  
                  className="font-abezee text-base md:text-[32px] leading-tight md:leading-[41.71px] text-center"
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