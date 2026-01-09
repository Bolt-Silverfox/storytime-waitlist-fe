import { motion } from "framer-motion";
import waitlistImage from "/wait-list.png";

type Props = {
  openModal: () => void;
};

const HeroSection = ({ openModal }: Props) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 md:top-[77px]">
        <img
          src="/icons/new-logo-blue.svg"
          alt="storytime 4 kids logo"
          className="h-8 w-auto max-w-[179px] md:h-[64px]"
        />
      </div>
      {/* Main Content */}
      <section className="relative mx-auto flex w-full max-w-[948px] flex-col items-center px-5 md:mt-[230px]">
        <h1 className="font-Qilka text-text-dark w-full max-w-[671px] text-center text-3xl leading-none md:text-[56px]">
          Your Child's New Favorite Story Awaits
        </h1>
        <p className="font-abezee mt-6 w-full max-w-[701px] text-center text-base leading-1 text-[rgba(35,31,30,0.8)] md:text-[24px] md:leading-[40px]">
          Join the early access list and be among the first to explore safe,
          calming, expressive stories kids love.
        </p>
        <button
          onClick={openModal}
          className="bg-primary font-abezee mt-8 cursor-pointer rounded-full px-8 py-3 text-center text-base text-white md:mt-10 md:py-[18px] md:text-[24px]"
        >
          Join the waitlist
        </button>
      </section>{" "}
      <img
        src={waitlistImage}
        alt="Book cover"
        className="mt-8 w-full object-cover object-center"
        style={{ top: "-3.58px", left: 0 }}
      />
      <motion.div
        className="absolute top-[261px] left-[75px] hidden md:block"
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
      <div className="bg-primary clip-top absolute bottom-0 left-0 h-[15%] w-full">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 1209"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C0 0 298 116.504 740.5 116.504C1183 116.504 1440 0 1440 0V1135C1440 1135 984.5 1209 714.5 1209C444.5 1209 0 1135 0 1135V0Z"
            fill="#EC4007"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
