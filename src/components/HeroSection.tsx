import { Icon } from "@iconify/react";
import { useEffect, useState, type FormEvent } from "react";
const HeroSection = () => {
  const [isWaitlistOverlayOpen, setIsWaitlistOverLayOpen] = useState(false);
  return (
    <div className="font-Qilka min-h-[130vh] min-w-full flex-col bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat clip-top ">
      <section className="mx-auto mt-[63px] flex w-full max-w-[948px] flex-col items-center px-5">
        <img
          src="/logo.svg"
          alt="storytime 4 kids logo"
          className="h-[35px] w-[244px] "
        />
        <div className="mt-[35.82px] mb-[19px] flex flex-col gap-y-[12.17px] text-white md:mt-[60px] md:mb-[50px] md:gap-y-8">
          <h1 className="text-center text-2xl md:text-[64px]">
            Your kids dream of adventures, Storytime makes them into interactive
            pages
          </h1>
          <p className="font-abezee text-center text-sm md:text-2xl">
            Access over 10,000+ Magical stories for kids, from bedtime snuggles
            to learning adventures and so much more. We can't wait!
          </p>
        </div>
        <button
          onClick={() => setIsWaitlistOverLayOpen(true)}
          className="bg-primary cursor-pointer self-center rounded-full px-[20.54px] py-[6.84px] text-center text-[9.13px] text-white md:px-[54px] md:py-[18px] md:text-2xl"
        >
          Join the waitlist
        </button>
        {isWaitlistOverlayOpen && (
          <WaitListInfoModal onClose={() => setIsWaitlistOverLayOpen(false)} />
        )}
      </section>
    </div>
  );
};

export default HeroSection;

type Props = {
  onClose: () => void;
};
const WaitListInfoModal = ({ onClose }: Props) => {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("form data", data);
    setIsSignupSuccessful(true);
  };
  return (
    <section
      onClick={onClose}
      className="fixed inset-0 flex flex-col justify-center bg-[#221D1DB2]/70 backdrop-blur-xs"
    >
      {!isSignupSuccessful ? (
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="font-abezee mx-auto flex max-w-[500px] flex-col gap-y-8 rounded-4xl bg-white p-8"
        >
          <header className="flex flex-row items-center justify-between">
            <p className="font-abezee text-sm md:text-base">
              Join our Waitlist now 🚀🚀
            </p>
            <Icon
              icon={"formkit:close"}
              className="hover:text-primary size-6 cursor-pointer text-black transition-all duration-200"
              onClick={onClose}
            />
          </header>
          <section
            aria-labelledby="form explanatory text setion"
            className="flex flex-col gap-y-[17px]"
          >
            <h2 className="font-Qilka text-center text-[20px] md:text-[26px]">
              Join thousands of readers
            </h2>
            <p className="text-center text-sm md:text-base">
              Fill the form below and be the first to know when we launch. Get
              early access and exclusive updates
            </p>
          </section>
          <section className="flex flex-col gap-y-6">
            <div
              aria-labelledby="fullname-form-item-container"
              className="relative flex flex-col gap-y-2.5 text-[12.84px] md:text-base"
            >
              <label htmlFor="fullName">Full name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="focus:border-primary h-[50px] w-[424px] cursor-pointer rounded-full border border-[#4A413F] pl-11 transition-all duration-200 outline-none"
              />
              <Icon
                icon={"iconamoon:profile-thin"}
                className="absolute top-12 left-4 size-6"
              />
            </div>
            <div
              aria-labelledby="email-address-form-item-container"
              className="relative flex flex-col gap-y-2.5 text-[12.84px] md:text-base"
            >
              <label htmlFor="email">Email address</label>

              <input
                name="email"
                type="text"
                placeholder="Enter your full name"
                className="focus:border-primary h-[50px] w-[424px] cursor-pointer rounded-full border border-[#4A413F] pl-11 transition-all duration-200 outline-none"
              />
              <Icon
                icon={"lets-icons:message-light"}
                className="absolute top-12 left-4 size-6"
              />
            </div>
          </section>
          <button
            type="submit"
            className="mt-0.5 cursor-pointer self-center rounded-full bg-[#FEEAE6] px-[155px] py-2.5 text-center text-[#FB9583]"
          >
            Join the waitlist
          </button>
        </form>
      ) : (
        <SuccessDisplay onClose={onClose} />
      )}
    </section>
  );
};

const SuccessDisplay = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative mx-auto mt-5 flex flex-col items-center justify-center gap-y-[15px] rounded-4xl bg-white p-[51px] text-center max-md:m-6 max-md:max-w-[382px] md:w-[488px]">
      <img
        src="/success-illustration.png"
        alt="happy little kid illustration"
        className="h-60 w-[229.11px] md:h-[291px] md:w-[278px]"
      />
      <button className="font-abezee absolute top-[23px] right-[13px] flex flex-row items-center gap-x-1.5 rounded-full border px-3 py-1.5 text-sm md:hidden">
        <Icon
          icon={"formkit:close"}
          className="hover:text-primary size-6 cursor-pointer text-black transition-all duration-200"
          onClick={onClose}
        />
        close
      </button>
      <h2 className="font-Qilka text-[20px] md:text-[26px]">
        You have successfully been added to the waitlist.
      </h2>
      <p className="font-abezee text-sm md:text-base">
        An email woould be sent to you confirming the next steps
      </p>
      <Icon
        icon={"formkit:close"}
        className="hover:text-primary absolute top-[27px] right-7 hidden size-6 cursor-pointer text-black transition-all duration-200 md:block"
        onClick={onClose}
      />
    </div>
  );
};
