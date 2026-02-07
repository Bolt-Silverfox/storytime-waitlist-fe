import { useEffect, useState, type FormEvent } from "react";
import SuccessDisplay from "../SuccessDisplay";
import { Icon } from "@iconify/react";
import {
  trackWaitlistFormViewed,
  trackWaitlistSignup,
  trackWaitlistSignupError,
} from "../../lib/analytics";
import { WAITLIST_API } from "../../constants";
import { toast } from "sonner";

type Props = {
  onClose: () => void;
};

const WaitListForm = ({ onClose }: Props) => {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Track that the waitlist form was viewed
    trackWaitlistFormViewed();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setErrors({});
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData) as {
        name: string;
        email: string;
      };

      const newErrors: typeof errors = {};
      if (!data.name.trim()) newErrors.name = "Full name is required.";
      if (!data.email.trim()) newErrors.email = "Email is required.";
      else if (!validateEmail(data.email))
        newErrors.email = "Invalid email address.";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      const request = await fetch(`${WAITLIST_API}/waitlist/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await request.json();

      if (!request.ok) {
        throw new Error(
          response.message || response.error || request.statusText,
        );
      }

      console.log(response);

      // Track successful signup
      trackWaitlistSignup(data.name, data.email);
      if (!response.status)
        throw new Error(
          response.message || response.messsage || "Something went wrong",
        );

      setIsSignupSuccessful(true);
      toast.success("Joined waitlist successfully!");
    } catch (err: unknown) {
      const errMessage =
        err instanceof Error ? err.message : "Unexpected error, try again.";
      console.log("messageerrr", errMessage);

      // Track signup error
      trackWaitlistSignupError(errMessage);

      setErrors({ ...errors, general: errMessage });
      toast.error(errMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col justify-center bg-[#221D1DB2]/70 backdrop-blur-xs"
    >
      {!isSignupSuccessful ? (
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="font-abezee mx-auto flex flex-col gap-y-8 rounded-4xl bg-white p-8 max-md:m-6 max-md:max-w-[382px] md:w-[488px]"
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
              Join thousands of readers s
            </h2>
            <p className="text-center text-sm md:text-base">
              Fill the form below and be the first to know when we launch.
            </p>
          </section>
          {errors.general && (
            <span className="mt-1 text-sm text-red-500">{errors.general}</span>
          )}
          <section className="flex flex-col gap-y-6">
            <div className="relative flex flex-col gap-y-2.5 text-[12.84px] md:text-base">
              <label htmlFor="name">Full name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className={`focus:border-primary h-[50px] rounded-full border pl-11 transition-all duration-200 outline-none ${
                  errors.name ? "border-red-500" : "border-[#4A413F]"
                }`}
              />
              <Icon
                icon={"iconamoon:profile-thin"}
                className="absolute top-10 left-4 size-6 md:top-12 md:left-4"
              />
              {errors.name && (
                <span className="mt-1 text-sm text-red-500">{errors.name}</span>
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
                className="absolute top-10 left-4 size-6 md:top-12 md:left-4"
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
            className="bg-primary mt-0.5 w-full cursor-pointer self-center rounded-full py-2.5 text-center text-white"
          >
            {isLoading ? "Loading..." : "Join the waitlist"}
          </button>
        </form>
      ) : (
        <SuccessDisplay onClose={onClose} />
      )}
    </section>
  );
};

export default WaitListForm;
