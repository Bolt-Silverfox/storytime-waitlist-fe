export default function AboutHero() {
  return (
    <section className="overflow-x-hidden bg-white">
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col md:hidden">
        {/* Text Content */}
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-8">
          <div className="space-y-6 text-center">
            <h1 className="font-Qilka text-3xl leading-tight font-bold">
              Bringing Stories to Life for Every Child
            </h1>
            <p className="text-lg text-[#4F4C4B]">
              We create meaningful digital story experiences that nurture
              curiosity, spark creativity, and support children&apos;s growth.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                  "_blank",
                )
              }
              className="bg-primary font-abezee mx-auto flex items-center gap-4 rounded-full px-6 py-3 text-center text-white"
            >
              <img src="/aboutpage/play-store-icon.png" alt="Play store icon" />
              <div className="flex-col items-start text-left">
                <p className="text-xs">Download on</p>
                <span className="leading-none">Google play</span>
              </div>
            </button>
          </div>
        </div>
        {/* Full Image */}
        <div className="w-full">
          <img
            src="/aboutpage/aboutHero.svg"
            alt="Storytime hero"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout - Overlay */}
      <div className="relative hidden min-h-[600px] overflow-hidden md:block lg:min-h-[700px]">
        {/* Background Image - Edge to Edge */}
        <div className="absolute inset-0 h-full w-full bg-[url('/aboutpage/aboutHero.svg')] bg-cover bg-right bg-no-repeat"></div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:py-32">
          <div className="max-w-lg space-y-6 text-left">
            <h1 className="font-Qilka text-4xl leading-tight font-bold lg:text-5xl">
              Bringing Stories to Life for Every Child
            </h1>
            <p className="text-lg text-[#4F4C4B] lg:text-xl lg:leading-9">
              We create meaningful digital story experiences that nurture
              curiosity, spark creativity, and support children&apos;s growth.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                  "_blank",
                )
              }
              className="bg-primary font-abezee flex items-center gap-4 rounded-full px-6 py-3 text-center text-white"
            >
              <img src="/aboutpage/play-store-icon.png" alt="Play store icon" />
              <div className="flex-col items-start text-left">
                <p className="text-xs">Download on</p>
                <span className="leading-none">Google play</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
