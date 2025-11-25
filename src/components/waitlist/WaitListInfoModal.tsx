import { Icon } from "@iconify/react";
import { useState } from "react";

interface Form {
  fullName: string;
  email: string;
}

export default function WaitListForm({ onClose }: { onClose: () => void }) {
  const [canSubmit, setCanSubmit] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Form>();

  const validate = () => {
    const newErrors = { fullName: "", email: "" };
    if (!fullName && !isFullName(fullName))
      newErrors.fullName = "Enter first and last name";
    if (!email && !isValidEmail(email)) newErrors.email = "Enter a valid email";
    setErrors(newErrors);

    return !newErrors.fullName && !newErrors.email;
  };

  const handleChange = () => {
    console.log(fullName, email);
    setCanSubmit(!!fullName && !!email);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log({ fullName, email });
    }
  };

  return (
    <section className="font-abezee fixed inset-0 flex h-screen items-center justify-center bg-[#221D1DB2]/70 px-4">
      <div className="flex max-w-[488px] flex-col gap-8 rounded-4xl bg-[#FFFFFF] p-4 md:p-8">
        <header className="flex justify-between">
          <span className="">Join our Waitlist now 🚀🚀</span>
          <Icon
            icon={"material-symbols-light:close"}
            className="cursor-pointer text-2xl"
            onClick={onClose}
          />
        </header>
        <div>
          <h2 className="font-Qilka text-center text-[26px] font-bold">
            Join thousands of readers
          </h2>
          <p className="mt-[17px] text-center">
            Fill the form below and be the first to know when we launch. Get
            early access and exclusive updates
          </p>
        </div>

        <form
          onChange={handleChange}
          onSubmit={onFormSubmit}
          className="flex flex-col gap-4 p-0"
        >
          <div>
            <label htmlFor="fullName">Full name</label>
            <div className="mt-2.5 flex gap-2.5 rounded-[50px] border-[0.5px] border-black px-[15px] py-2.5">
              <Icon
                icon={"solar:user-outline"}
                fontSize={24}
                className="self-center"
                color="#4A413F"
              />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                className="h-[30px] flex-1 py-5 outline-0 placeholder:text-[#4A413F] focus:outline-0"
                placeholder="Enter your full name"
                onChange={(e) => {
                  setFullName(e.target.value);
                  //   validate();
                }}
              />
            </div>
            {errors?.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <div className="mt-2.5 flex gap-2.5 rounded-[50px] border-[0.5px] border-black px-[15px] py-2.5">
              <Icon
                icon={"mage:email"}
                fontSize={24}
                className="self-center"
                color="#4A413F"
              />
              <input
                type="text"
                value={email}
                id="email"
                name="email"
                className="h-[30px] flex-1 py-5 outline-0 placeholder:text-[#4A413F] focus:outline-0"
                placeholder="Enter your email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                  //   validate();
                }}
              />
            </div>
            {errors?.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <button
            className={`mt-[18px] rounded-[50px] py-2.5 text-[#FB9583] ${
              canSubmit
                ? "bg-primary cursor-pointer text-white"
                : "bg-primary/20"
            }`}
            type="submit"
            disabled={!canSubmit}
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};
const isFullName = (name: string) => {
  return /^[a-zA-Z]+ [a-zA-Z]+/.test(name.trim());
};
