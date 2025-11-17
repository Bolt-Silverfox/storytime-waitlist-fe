export default function Explore() {
  return (

    <section className="font-abezee bg-primary min-w-full clip-bottom relative px-6 text-white -mt-12">
      <div className="mx-auto mt-30 max-w-5xl">
        <div className="">
          <h1 className="font-Qilka text-center text-2xl md:text-5xl">
            Explore story telling like never before
          </h1>
          <p className="mx-auto mt-[30px] max-w-[843px] text-center text-[14px] text-[#FCC1AD]">
            Designed especially for children. With handpicked stories, friendly
            voices, and smart filters, it's more than entertainment it's a safe
            space for growth, imagination, and learning.
          </p>
        </div>

        <div className="mt-6 md:mt-12 mb-20 flex items-center justify-center gap-8">
          <div className="mx-auto grid md:grid-cols-2 justify-center gap-7">
            {explore.map((item, i) => (
              <div
                key={i}
                className="flex max-w-lg flex-col gap-2.5 rounded-4xl bg-white px-5 py-8 md:px-9 w-full"
              >
                <img src={item.icon} alt="logo" className="h-[50px] w-[50px]" />
                <h2 className="font-Qilka text-[20px] font-bold text-[#221D1D] md:text-2xl">
                  {item.title}
                </h2>
                <p className="text-[16px] text-[#4A413F] md:text-[20px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const explore = [
  {
    title: "AI-powered voices with playful, natural tones",
    text: "Calming, expressive voices tailored to each story.",
    icon: "/mic.png",
  },
  {
    title: "AI-powered voices with playful, natural tones",
    text: "Calming, expressive voices tailored to each story.",
    icon: "/msg.png",
  },
  {
    title: "AI-powered voices with playful, natural tones",
    text: "Calming, expressive voices tailored to each story.",
    icon: "/smile.png",
  },
  {
    title: "AI-powered voices with playful, natural tones",
    text: "Calming, expressive voices tailored to each story.",
    icon: "/shield.png",
  },
];
