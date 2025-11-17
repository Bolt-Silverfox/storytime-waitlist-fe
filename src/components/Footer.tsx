export default function Footer() {
  return (
    <div className="relative flex h-[850px] w-full flex-col overflow-hidden bg-[#7A07EC] px-4 py-6 text-white sm:px-6 md:h-[1368px] md:px-10 lg:px-16">
      <svg
        className="absolute top-0 left-0 h-[80px] w-full sm:h-[100px] md:h-[120px] lg:h-[150px]"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#EC4007" d="M0,0 Q360,100 720,100 T1440,0 L1440,0 Z" />
      </svg>

      {/* floating stars */}
      <div className="absolute top-[18%] left-[8%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[39px] w-[45px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px]"
        />
      </div>

      <div className="absolute top-[25%] left-[25%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[38px] w-[38px] sm:h-[32px] sm:w-[32px] md:h-[48px] md:w-[48px]"
        />
      </div>

      <div className="absolute top-[35%] left-[20%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] md:h-[38px] md:w-[38px]"
        />
      </div>

      <div className="absolute top-[15%] right-[12%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[32px] w-[32px] sm:h-[38px] sm:w-[38px] md:h-[42px] md:w-[42px]"
        />
      </div>

      <div className="absolute top-[28%] right-[22%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[42px] w-[42px] sm:h-[48px] sm:w-[48px] md:h-[52px] md:w-[52px]"
        />
      </div>

      <div className="absolute top-[52%] left-[6%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[38px] w-[38px] sm:h-[42px] sm:w-[42px] md:h-[48px] md:w-[48px]"
        />
      </div>

      <div className="absolute top-[62%] left-[18%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] md:h-[55px] md:w-[55px]"
        />
      </div>

      <div className="absolute top-[48%] right-[8%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[40px] md:w-[40px]"
        />
      </div>

      <div className="absolute top-[68%] right-[20%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[36px] w-[36px] sm:h-[40px] sm:w-[40px] md:h-[46px] md:w-[46px]"
        />
      </div>

      <div className="absolute bottom-[28%] left-[12%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px]"
        />
      </div>

      <div className="absolute right-[15%] bottom-[38%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[48px] w-[48px] sm:h-[52px] sm:w-[52px] md:h-[58px] md:w-[58px]"
        />
      </div>

      {/* container */}
      <div className="relative z-10 mx-auto mt-16 flex h-[480px] w-full max-w-[900px] flex-col justify-between md:mt-32 md:h-[696.53px] lg:mt-36">
        {/* image */}
        <div className="mx-auto mb-8 mb-10 md:mb-12">
          <img
            src="/shuttle.png"
            alt="Shuttle"
            className="h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
          />
        </div>

        {/* content */}
        <div className="mb-8 flex flex-col gap-4 text-center sm:mb-10 sm:gap-5 md:gap-6">
          <h2 className="font-Qilka px-4 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-[64px]">
            30 days left to launch!
          </h2>
          <p className="font-Abezee mx-auto max-w-[627px] px-4 text-base leading-relaxed sm:text-lg md:text-xl lg:text-[24px]">
            Magical stories for kids, from bedtime snuggles to learning
            adventures.
          </p>
        </div>

        {/* icons */}
        <div className="mx-auto mb-12 flex items-center justify-center gap-4 sm:mb-16 sm:gap-5 md:gap-6">
          <a href="https://web.facebook.com/?_rdc=1&_rdr#" target="blank">
            <img
              src="/facebook.png"
              alt="Facebook"
              className="h-auto w-[32px] cursor-pointer transition-transform hover:scale-110 sm:w-[36px] md:w-[38px]"
            />
          </a>

          <a href="https://www.instagram.com/" target="blank">
            <img
              src="/instagram.png"
              alt="Instagram"
              className="h-auto w-[32px] cursor-pointer transition-transform hover:scale-110 sm:w-[36px] md:w-[38px]"
            />
          </a>

          <a href="https://www.tiktok.com/en/" target="black">
            <img
              src="/tiktok.png"
              alt="Tiktok"
              className="h-auto w-[32px] cursor-pointer transition-transform hover:scale-110 sm:w-[36px] md:w-[38px]"
            />
          </a>
        </div>
      </div>

      {/* mobile image*/}
      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
        <img
          src="/mobile.png"
          alt="Mobile"
          className="h-auto w-[280px] sm:w-[350px] md:w-[400px] lg:w-[451px]"
        />
      </div>
    </div>
  );
}
