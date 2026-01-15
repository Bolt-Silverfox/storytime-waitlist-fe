import DownloadButtons from "./DownloadButtons";

export default function CTASection() {
  return (
    <section className="relative mt-20 w-full overflow-hidden bg-[#ED4F01] py-16 md:py-30">


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
            {/* Stars positioned around the image */}
            <div className="pointer-events-none absolute inset-0">
              {/* Top left corner */}
              <div className="absolute top-0 left-4 md:top-2 md:left-8 lg:-top-2 lg:left-8">
                <img src="/star-i.png" alt="stars" className="h-8 w-8 object-contain md:h-10 md:w-10 lg:h-12 lg:w-12" />
              </div>

              {/* Top center-left - BIG */}
              <div className="absolute -top-4 left-16 md:-top-8 md:left-24 lg:-top-10 lg:left-28">
                <img src="/star-i.png" alt="stars" className="h-12 w-12 object-contain md:h-16 md:w-16 lg:h-20 lg:w-20" />
              </div>

              {/* Top center */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 md:-top-6 lg:-top-8">
                <img src="/star-i.png" alt="stars" className="h-10 w-10 object-contain md:h-12 md:w-12 lg:h-14 lg:w-14" />
              </div>

              {/* Top center-right - BIG */}
              <div className="absolute -top-4 right-16 md:-top-8 md:right-24 lg:-top-10 lg:right-28">
                <img src="/star-i.png" alt="stars" className="h-11 w-11 object-contain md:h-14 md:w-14 lg:h-16 lg:w-16" />
              </div>

              {/* Top right corner */}
              <div className="absolute top-0 right-4 md:top-2 md:right-8 lg:-top-2 lg:right-8">
                <img src="/star-i.png" alt="stars" className="h-7 w-7 object-contain md:h-9 md:w-9 lg:h-10 lg:w-10" />
              </div>

              {/* Left side top */}
              <div className="absolute top-12 -left-2 md:top-16 md:-left-4 lg:top-20 lg:-left-6">
                <img src="/star-i.png" alt="stars" className="h-6 w-6 object-contain md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </div>

              {/* Left side upper-middle - BIG */}
              <div className="absolute top-24 -left-4 md:top-32 md:-left-6 lg:top-40 lg:-left-8">
                <img src="/star-i.png" alt="stars" className="h-10 w-10 object-contain md:h-14 md:w-14 lg:h-16 lg:w-16" />
              </div>

              {/* Left side middle */}
              <div className="absolute top-40 left-0 md:top-52 md:-left-2 lg:top-64 lg:-left-4">
                <img src="/star-i.png" alt="stars" className="h-5 w-5 object-contain md:h-7 md:w-7 lg:h-8 lg:w-8" />
              </div>

              {/* Right side top */}
              <div className="absolute top-12 -right-2 md:top-16 md:-right-4 lg:top-20 lg:-right-6">
                <img src="/star-i.png" alt="stars" className="h-8 w-8 object-contain md:h-10 md:w-10 lg:h-12 lg:w-12" />
              </div>

              {/* Right side upper-middle - BIGGEST */}
              <div className="absolute top-24 -right-4 md:top-32 md:-right-6 lg:top-40 lg:-right-8">
                <img src="/star-i.png" alt="stars" className="h-14 w-14 object-contain md:h-18 md:w-18 lg:h-20 lg:w-20" />
              </div>

              {/* Right side middle */}
              <div className="absolute top-40 -right-2 md:top-52 md:-right-3 lg:top-64 lg:-right-5">
                <img src="/star-i.png" alt="stars" className="h-6 w-6 object-contain md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </div>

              {/* Right side lower-middle - BIG */}
              <div className="absolute top-56 -right-4 md:top-72 md:-right-6 lg:top-[22rem] lg:-right-8">
                <img src="/star-i.png" alt="stars" className="h-11 w-11 object-contain md:h-14 md:w-14 lg:h-16 lg:w-16" />
              </div>

              {/* Right side lower */}
              <div className="absolute top-72 right-0 md:top-[23rem] md:-right-2 lg:top-[28rem] lg:-right-4">
                <img src="/star-i.png" alt="stars" className="h-5 w-5 object-contain md:h-6 md:w-6 lg:h-8 lg:w-8" />
              </div>
            </div>

            <img
              src="landingpage/cta.png"
              className="-mb-16 w-64 object-contain md:-mb-40 md:w-80"
              alt="sage is tired!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
