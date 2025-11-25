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
    <div className="">
      <section className="max-w-7xl mx-auto mt-40 md:mt-40 px-4">
        {/* covered */}
        <div>
          <h2 className="font-Qilka w-auto text-center mx-auto mb-8 md:mb-15 text-center text-[32px] md:text-[56px] font-bold text-[#231F1E]">
            What we offer your kids
          </h2>
        </div>

        {/* grid here */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex h-[455px] md:h-[520px] w-full flex-col justify-between rounded-[31.28px] p-6 md:p-8 shadow-lg mx-auto"
              style={{ background: feature.bgColor }}
            >
              <div
                style={{ background: feature.elipse }}
                className="relative mx-auto flex h-[262px] w-[262px] md:h-[262px] md:w-[262px] items-center justify-center rounded-full mb-4 md:mb-4"
              >
                <img
                  src="Vector.png"
                  className="absolute h-3 w-3 md:h-[20px] md:w-[20px]"
                  style={{ top: '30px', left: '95px' }}
                />

                <img
                  src="Vector.png"
                  className="absolute h-4 w-5 md:h-[25px] md:w-[23px]"
                  style={{ top: '150px', left: '180px' }}
                />

                <img
                  src="Vector.png"
                  className="absolute h-5 w-6 md:h-[24px] md:w-[30px]"
                  style={{ top: '190px', left: '270px' }}
                />

                <img
                  src="Vector.png"
                  className="absolute h-6 w-5 md:h-[24px] md:w-[29px]"
                  style={{ top: '130px', left: '15px' }}
                />

                <div className="text-center">
                  <img
                    className="w-[365px] h-[275px] md:h-[305px] md:w-[392px] object-contain"
                    src={feature.icon}
                    alt="card-icon"
                  />
                </div>
              </div>

              <h3
                style={{ color: feature.color }}
                className="font-abezee text-[24px] md:text-[32px] leading-[41.71px] md:leading-[41.71px]"
              >
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
