const HeroSection = () => {
  return (
    <div className="font-Qilka flex h-screen flex-col bg-[url('/hero-bg.png')] bg-cover bg-no-repeat">
      <img
        src="/logo.svg"
        alt="storytime 4 kids logo"
        className="h-[35px] w-[244px]"
      />
      <div className="mt-[60px] mb-[50px] flex flex-col gap-y-8 text-white">
        <h1 className="text-center text-[64px]">
          Your kids dream of adventures, Storytime makes them into interactive
          pages
        </h1>
        <p className="text-center">
          Access over 10,000+ Magical stories for kids, from bedtime snuggles to
          learning adventures and so much more. We can't wait!
        </p>
      </div>
      <button className="bg-primary self-center rounded-b-full bg-black px-[54px] py-[18px] text-center text-2xl text-white">
        Join the waitlist
      </button>
    </div>
  );
};

export default HeroSection;
