import DownloadButtons from "./DownloadButtons";

export default function CTASection() {
  return (
    <section className="relative mt-20 w-full overflow-hidden bg-[#ED4F01] py-16 md:py-30">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* stars */}
        <div className="absolute top-10 left-20 hidden text-2xl text-yellow-300 md:block">
          <img src="/star-i.png" alt="stars" />
        </div>
        <div className="absolute top-10 right-4 block text-lg text-yellow-300 md:hidden">
          <img src="/star-i.png" alt="stars" />
        </div>

        <div className="absolute top-32 right-32 hidden text-3xl text-yellow-400 delay-100 md:block">
          <img src="/star-i.png" alt="stars" />
        </div>
        <div className="absolute top-20 right-2 block text-xl text-yellow-400 delay-100 md:hidden">
          <img src="/star-i.png" alt="stars" />
        </div>

        <div className="absolute bottom-20 left-40 hidden text-xl text-yellow-300 delay-200 md:block">
          <img src="/star-i.png" alt="stars" />
        </div>
        <div className="absolute right-6 bottom-32 block text-lg text-yellow-300 delay-200 md:hidden">
          <img src="/star-i.png" alt="stars" />
        </div>

        <div className="absolute top-20 right-48 hidden text-2xl text-yellow-400 delay-300 md:block">
          <img src="/star-i.png" alt="stars" />
        </div>
        <div className="absolute top-40 right-1/4 block text-lg text-yellow-400 delay-300 md:hidden">
          <img src="/star-i.png" alt="stars" />
        </div>

        <div className="absolute right-20 bottom-32 hidden text-3xl text-yellow-300 md:block">
          <img src="/star-i.png" alt="stars" />
        </div>
        <div className="absolute right-8 bottom-10 block text-xl text-yellow-300 md:hidden">
          <img src="/star-i.png" alt="stars" />
        </div>

        <div className="absolute top-40 left-1/3 hidden text-xl text-yellow-400 delay-100 md:block">
          <img src="/star-i.png" alt="stars" />
        </div>

        <div className="absolute right-1/4 bottom-40 hidden text-2xl text-yellow-300 delay-200 md:block">
          <img src="/star-i.png" alt="stars" />
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

            <DownloadButtons color="light" />
          </div>

          <div className="relative order-2 flex justify-center lg:order-2">
            <img
              src="/landingpage/cta.png.png"
              className="-mb-16 w-64 object-contain md:-mb-40 md:w-80"
              alt="sage is tired!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}