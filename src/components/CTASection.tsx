export default function CTASection() {
  return (
    <section className="relative mt-20 w-full overflow-hidden bg-[#ED4F01] py-16 md:py-30">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* stars */}
        <div className="absolute top-10 left-20 hidden text-2xl text-yellow-300 md:block">
          <img src="star-i.png" alt="stars" />
        </div>
        <div className="absolute top-10 right-4 block text-lg text-yellow-300 md:hidden">
          <img src="star-i.png" alt="stars" />
        </div>

        <div className="absolute top-32 right-32 hidden text-3xl text-yellow-400 delay-100 md:block">
          <img src="star-i.png" alt="stars" />
        </div>
        <div className="absolute top-20 right-2 block text-xl text-yellow-400 delay-100 md:hidden">
          <img src="star-i.png" alt="stars" />
        </div>

        <div className="absolute bottom-20 left-40 hidden text-xl text-yellow-300 delay-200 md:block">
          <img src="star-i.png" alt="stars" />
        </div>
        <div className="absolute right-6 bottom-32 block text-lg text-yellow-300 delay-200 md:hidden">
          <img src="star-i.png" alt="stars" />
        </div>

        <div className="absolute top-20 right-48 hidden text-2xl text-yellow-400 delay-300 md:block">
          <img src="star-i.png" alt="stars" />
        </div>
        <div className="absolute top-40 right-1/4 block text-lg text-yellow-400 delay-300 md:hidden">
          <img src="star-i.png" alt="stars" />
        </div>

        <div className="absolute right-20 bottom-32 hidden text-3xl text-yellow-300 md:block">
          <img src="star-i.png" alt="stars" />
        </div>
        <div className="absolute right-8 bottom-10 block text-xl text-yellow-300 md:hidden">
          <img src="star-i.png" alt="stars" />
        </div>

        <div className="absolute top-40 left-1/3 hidden text-xl text-yellow-400 delay-100 md:block">
          <img src="star-i.png" alt="stars" />
        </div>

        <div className="absolute right-1/4 bottom-40 hidden text-2xl text-yellow-300 delay-200 md:block">
          <img src="star-i.png" alt="stars" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          <div className="order-2 text-white lg:order-1">
            <h2 className="font-Qilka mb-4 text-3xl leading-tight font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Keep the magic going!
            </h2>
            <p className="font-abezee mb-6 text-base leading-relaxed md:mb-8 md:text-xl lg:text-2xl">
              Magical stories for kids, from bedtime snuggles to learning
              adventures.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
                  "_blank",
                )
              }
              className="font-abezee flex h-[61px] w-[211px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-orange-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl md:h-[69px] md:w-[221px] md:px-8 md:py-4"
            >
              <svg
                className="h-5 w-5 md:h-6 md:w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span className="hidden md:inline">Download on Google play</span>
              <span className="md:hidden">Download</span>
            </button>
          </div>

          <div className="relative order-2 flex justify-center lg:order-2">
            <img
              src="mobil-cta.png"
              className="-mb-16 w-64 object-contain md:-mb-40 md:w-80"
              alt="sage is tired!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
