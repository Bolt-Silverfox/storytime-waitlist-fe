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
      <section className=" md:max-w-[1239px] mx-auto mt-40">
        <div className="container mx-auto px-4">
          <h2 className="font-Qilka mb-15 text-center md:text-[56px] font-bold text-[#231F1E] ">
            What we offer your kids
          </h2>

          <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex h-[520px] w-[392px] flex-col justify-between rounded-[31.28px] p-8 shadow-lg"
                style={{ background: feature.bgColor }}
              >
                <div
                  style={{ background: feature.elipse }}
                  className="relative mx-auto flex h-[262px] w-[262px] items-center justify-center rounded-full"
                >
                  <img
                    src="Vector.png"
                    className="absolute top-[40px] left-[130px] h-[20px] w-[20px]"
                  />

                  <img
                    src="Vector.png"
                    className="absolute top-[200px] left-[260px] h-[20px] w-[20px]"
                  />

                  <img
                    src="Vector.png"
                    className="absolute top-[220px] left-[150px] h-[20px] w-[20px]"
                  />

                  <img
                    src="Vector.png"
                    className="absolute top-[170px] left-[22px] h-[24px] w-[24px]"
                  />

                  <div className="mb-4 text-center">
                    <img
                      className="h-[191px] w-[246px]"
                      src={feature.icon}
                      alt="card-icon"
                    />
                  </div>
                </div>

                <h3
                  style={{ color: feature.color }}
                  className="font-abezee h-[126px] w-[313px] text-[32px] leading-[41.71px]"
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
