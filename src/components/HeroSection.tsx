import { useState } from "react";
import WaitListForm from "./WaitListForm";

const HeroSection = () => {
  const [showWaitListForm, setShowWaitListForm] = useState(false);
  return (
    <div className="font-Qilka h-screen flex-col bg-[url('/hero-bg.png')] bg-cover bg-no-repeat">
      <section className="mx-auto mt-[63px] flex w-full max-w-[948px] flex-col items-center">
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
          <p className="font-abezee text-center text-2xl">
            Access over 10,000+ Magical stories for kids, from bedtime snuggles
            to learning adventures and so much more. We can't wait!
          </p>
        </div>
        <button
          className="bg-primary self-center rounded-full px-[54px] py-[18px] text-center text-2xl text-white"
          onClick={() => setShowWaitListForm(true)}
        >
          Join the waitlist
        </button>
        <WaitListForm showWaitListForm={showWaitListForm} />
      </section>
    </div>
  );
};

export default HeroSection;
