import { motion } from "framer-motion";
import waitlistImage from "/wait-list.png";

type Props = {
  openModal: () => void;
};

const HeroSection = ({ openModal }: Props) => {
  return (
    <div className="clip-bottom relative w-full overflow-hidden bg-white">
      {/* Logo */}
      <div className="absolute top-8 left-1/2 z-10 -translate-x-1/2 sm:top-6 md:top-8 lg:top-[77px]">
        <img
          src="/icons/new-logo-blue.svg"
          alt="storytime 4 kids logo"
          className="h-9 w-auto max-w-[120px] sm:h-7 sm:max-w-[140px] md:h-8 md:max-w-[179px] lg:h-[64px]"
        />
      </div>
      {/* Main Content */}
      <section className="relative mx-auto flex w-full max-w-[948px] flex-col items-center px-4 pt-26 sm:px-5 sm:pt-24 md:pt-32 lg:pt-[230px]">
        <h1 className="font-Qilka text-text-dark w-full max-w-[671px] text-center text-4xl leading-tight sm:text-3xl sm:leading-none md:text-4xl lg:text-[56px]">
          Your Child's New Favorite Story Awaits
        </h1>
        <p className="font-abezee mt-4 w-full max-w-[701px] px-9 text-center text-base leading-6 text-[rgba(35,31,30,0.8)] sm:mt-5 sm:text-base sm:leading-6 md:mt-6 md:px-0 md:text-lg md:leading-7 lg:text-[24px] lg:leading-[40px]">
          Join the early access list and be among the first to explore safe,
          calming, expressive stories kids love.
        </p>
        <button
          onClick={openModal}
          className="bg-primary font-abezee mt-6 w-full cursor-pointer rounded-full px-6 py-2.5 text-center text-base text-white transition-all hover:scale-105 active:scale-95 sm:mt-7 sm:px-7 sm:py-3 sm:text-base md:mt-8 md:px-8 md:py-3 md:text-lg lg:mt-10 lg:w-auto lg:text-[24px]"
        >
          Join the waitlist
        </button>
      </section>
      <img
        src={waitlistImage}
        alt="Book cover"
        className="relative mt-8 w-full object-cover object-center"
        style={{ top: "2rem", left: 0 }}
      />
      <motion.div
        className="absolute top-[261px] left-[75px] hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src="/parrot.png" alt="Parrot" className="object-contain" />
      </motion.div>
      {/* Monkey image - right side */}
      <motion.div
        className="absolute top-[87px] right-0 hidden lg:block"
        style={{ transformOrigin: "top center" }}
        animate={{
          rotate: [0, 8, -8, 0],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src="/monkey.png" alt="Monkey" className="object-contain" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
