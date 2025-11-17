import { useState } from "react";
import WaitListForm from "./WaitListForm";

const HeroSection = ({ openWaitlist }: { openWaitlist: () => void }) => {
  const [isWaitlistOverlayOpen, setIsWaitlistOverLayOpen] = useState(false);
  return (

    <div className="font-abezee clip-bottom relative z-10 min-h-[130vh] min-w-full flex-col bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      <section className="mx-auto mt-[63px] flex w-full max-w-[948px] flex-col items-center px-5">
        <img
          src="/logo.svg"
          alt="storytime 4 kids logo"
          className="h-[35px] w-[244px]"
        />
        <div className="mt-[35.82px] mb-[19px] flex flex-col gap-y-[12.17px] text-white md:mt-[60px] md:mb-[50px] md:gap-y-8">
          <h1 className="font-Qilka text-center text-2xl md:text-4xl md:leading-14 lg:text-5xl">
            Your kids dream of adventures, Storytime makes them into interactive
            pages
          </h1>
          <p className="text-center text-sm md:text-2xl">
            Access over 10,000+ Magical stories for kids, from bedtime snuggles
            to learning adventures and so much more. We can't wait!
          </p>
        </div>
        <button
          // onClick={() => setIsWaitlistOverLayOpen(true)}
          onClick={openWaitlist}
          className="bg-primary cursor-pointer self-center rounded-full px-5 py-2 text-center text-xs text-white md:px-[54px] md:py-5 md:text-2xl"
        >
          Join the waitlist
        </button>
        {isWaitlistOverlayOpen && (
          <WaitListForm onClose={() => setIsWaitlistOverLayOpen(false)} />
        )}
      </section>
    </div>
  );
};

export default HeroSection;
