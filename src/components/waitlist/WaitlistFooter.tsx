export default function WaitListFooter() {
  return (
    <div className="bg-secondary relative -top-56 z-10 -mb-56 flex h-[850px] w-full flex-col overflow-hidden px-4 py-6 text-white sm:px-6 md:h-[1368px] md:px-10 lg:px-16">
      {/* floating stars */}
      <div className="absolute top-[18%] left-[8%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[39px] w-[45px] sm:h-10 sm:w-10 md:h-[45px] md:w-[45px]"
        />
      </div>

      <div className="absolute top-[25%] left-[25%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[38px] w-[38px] sm:h-8 sm:w-8 md:h-12 md:w-12"
        />
      </div>

      <div className="absolute top-[35%] left-[20%]">
        <img
          src="star.png"
          alt="stars"
          className="h-7 w-7 sm:h-8 sm:w-8 md:h-[38px] md:w-[38px]"
        />
      </div>

      <div className="absolute top-[15%] right-[12%]">
        <img
          src="star.png"
          alt="stars"
          className="h-8 w-8 sm:h-[38px] sm:w-[38px] md:h-[42px] md:w-[42px]"
        />
      </div>

      <div className="absolute top-[28%] right-[22%]">
        <img
          src="star.png"
          alt="stars"
          className="h-8 w-8 sm:h-[38px] sm:w-[38px] md:h-[46px] md:w-[46px]"
        />
      </div>

      <div className="absolute top-[52%] left-[6%]">
        <img
          src="star.png"
          alt="stars"
          className="h-[38px] w-[38px] sm:h-[42px] sm:w-[42px] md:h-12 md:w-12"
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
          className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-10 md:w-10"
        />
      </div>

      <div className="absolute top-[68%] right-[20%]">
        <img
          src="star.png"
          alt="stars"
          className="h-9 w-9 sm:h-10 sm:w-10 md:h-[46px] md:w-[46px]"
        />
      </div>

      <div className="absolute bottom-[28%] left-[12%]">
        <img
          src="star.png"
          alt="stars"
          className="h-10 w-10 sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px]"
        />
      </div>

      <div className="absolute right-[15%] bottom-[38%]">
        <img
          src="star.png"
          alt="stars"
          className="h-10 w-10 sm:h-[42px] sm:w-[42px] md:h-[48px] md:w-[48px]"
        />
      </div>

      {/* container */}
      <div className="relative z-10 mx-auto mt-16 flex h-[480px] w-full max-w-[900px] flex-col justify-between md:mt-32 md:h-[696.53px] lg:mt-36">
        {/* image */}
        <div className="mx-auto mb-10 md:mb-12">
          <img
            src="/shuttle.png"
            alt="Shuttle"
            className="h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
          />
        </div>

        {/* content */}
        <div className="mb-8 flex flex-col gap-4 text-center sm:mb-10 sm:gap-5 md:gap-6">
          <h2 className="font-Qilka px-4 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-[64px]">
            Become a Part of the Storytime Community{" "}
          </h2>
          <p className="font-Abezee mx-auto max-w-[627px] px-4 text-[0.875rem] leading-relaxed sm:text-lg md:text-xl lg:text-[24px]">
            Follow us on social media to learn more
          </p>
        </div>

        {/* icons */}
        <div className="relative z-30 mx-auto mb-20 flex items-center justify-center gap-4 sm:mb-16 sm:gap-5 md:gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61585584201713"
            target="blank"
          >
            <img
              src="/facebook.png"
              alt="Facebook"
              className="h-auto w-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70 sm:w-9 md:w-[38px]"
            />
          </a>

          <a href="https://www.instagram.com/teamstorytimehq/" target="blank">
            <img
              src="/instagram.png"
              alt="Instagram"
              className="h-auto w-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70 sm:w-9 md:w-[38px]"
            />
          </a>

          <a href="https://www.tiktok.com/@teamstorytimehq" target="blank">
            <img
              src="/tiktok.png"
              alt="Tiktok"
              className="h-auto w-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70 sm:w-9 md:w-[38px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/storytimehq/"
            target="blank"
          >
            <img
              src="/linkedIn.svg"
              alt="Linkedin"
              className="h-auto w-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70 sm:w-9 md:w-[38px]"
            />
          </a>
          <a href="https://x.com/storytimehq" target="blank">
            <img
              src="/twitter.png"
              alt="Twitter"
              className="h-auto w-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-70 sm:w-9 md:w-[38px]"
            />
          </a>
        </div>
      </div>

      {/* mobile image*/}
      <div className="absolute -bottom-12 left-1/2 z-20 w-[90%] -translate-x-1/2 sm:-bottom-16 sm:w-[85%] md:-bottom-20 md:w-[50%] md:max-w-none lg:-bottom-20">
        <img
          src="/community.png"
          alt="Community"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
