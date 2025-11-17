type Props = {
  openModal: () => void;
};

const HeroSection = ({ openModal }: Props) => {
  return (
    <div className="font-Qilka clip-bottom min-h-[130vh] min-w-full flex-col bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      <section className="mx-auto mt-[63px] flex w-full max-w-[948px] flex-col items-center px-5">
        <img
          src="/logo.svg"
          alt="storytime 4 kids logo"
          className="h-[35px] w-[244px]"
        />
        <div className="mt-[35.82px] mb-[19px] flex flex-col gap-y-[12.17px] text-white md:mt-[60px] md:mb-[50px] md:gap-y-8">
          <h1 className="text-center text-2xl md:text-5xl lg:text-[64px]">
            Your kids dream of adventures, Storytime makes them into interactive
            pages
          </h1>
          <p className="font-abezee text-center text-sm md:text-2xl">
            Access over 10,000+ Magical stories for kids, from bedtime snuggles
            to learning adventures and so much more. We can't wait!
          </p>
        </div>
        <button
          onClick={openModal}
          className="bg-primary cursor-pointer self-center rounded-full px-[20.54px] py-[6.84px] text-center text-[9.13px] text-white md:px-[54px] md:py-[18px] md:text-2xl"
        >
          Join the waitlist
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
