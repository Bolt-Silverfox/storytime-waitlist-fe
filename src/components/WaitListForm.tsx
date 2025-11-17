import { useEffect, useState, type FormEvent } from "react";
import SuccessDisplay from "./SuccessDisplay";
import { Icon } from "@iconify/react";

type Props = {
  onClose: () => void;
};

const WaitListForm = ({ onClose }: Props) => {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>(
    {},
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      fullName: string;
      email: string;
    };

    const newErrors: typeof errors = {};
    if (!data.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!data.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(data.email))
      newErrors.email = "Invalid email address.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form data submitted:", data);
    setIsSignupSuccessful(true);
  };

  return (
    <section
      onClick={onClose}
      className="fixed inset-0 flex flex-col justify-center bg-[#221D1DB2]/70 backdrop-blur-xs z-999"
    >
      {!isSignupSuccessful ? (
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="font-abezee mx-auto flex flex-col gap-y-8 rounded-4xl bg-white p-8 max-w-sm md:max-w-md relative z-1000"
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

          <section className="flex flex-col gap-y-[17px]">
            <h2 className="font-Qilka text-center text-[20px] md:text-[26px]">
              Join thousands of readers
            </h2>
            <p className="text-center text-sm md:text-base">
              Fill the form below and be the first to know when we launch.
            </p>
          </section>

          <section className="flex flex-col gap-y-6">
            <div className="relative flex flex-col gap-y-2.5 text-[12.84px] md:text-base">
              <label htmlFor="fullName">Full name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className={`focus:border-primary h-[50px] rounded-full border pl-11 transition-all duration-200 outline-none ${
                  errors.fullName ? "border-red-500" : "border-[#4A413F]"
                }`}
              />
              <Icon
                icon={"iconamoon:profile-thin"}
                className="absolute top-12 left-4 size-6"
              />
              {errors.fullName && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="relative flex flex-col gap-y-2.5 text-[12.84px] md:text-base">
              <label htmlFor="email">Email address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`focus:border-primary h-[50px] rounded-full border pl-11 transition-all duration-200 outline-none ${
                  errors.email ? "border-red-500" : "border-[#4A413F]"
                }`}
              />
              <Icon
                icon={"lets-icons:message-light"}
                className="absolute top-12 left-4 size-6"
              />
              {errors.email && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.email}
                </span>
              )}
            </div>
          </section>

          <button
            type="submit"
            className="mt-0.5 w-full cursor-pointer self-center rounded-full bg-[#FEEAE6] py-2.5 text-center text-[#FB9583]"
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

export default WaitListForm;
