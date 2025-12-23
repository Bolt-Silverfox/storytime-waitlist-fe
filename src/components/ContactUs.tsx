import React from "react";
import { toast } from "sonner";
import postimage from "../assets/postImg.png";
import envelop from "../assets/Envelop.png";

const ContactUs: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    formRef.current?.reset();
  };

  return (
    <div className="mt-5 flex w-full flex-col items-center px-4 py-6">
      <div className="relative flex w-full max-w-5xl flex-col items-start justify-center gap-10 lg:flex-row">
        <div className="absolute top-40 left-0 hidden w-[200px] lg:block">
          <img src={postimage} alt="Mailbox" className="h-auto w-full" />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="z-10 mx-auto flex w-full max-w-md flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm focus:outline-orange-400"
          />

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm focus:outline-orange-400"
          />

          <textarea
            placeholder="Enter your message here...."
            className="h-36 w-full resize-none rounded-xl border border-gray-300 px-5 py-3 text-sm focus:outline-orange-400"
          />

          <button type="submit" className="mx-auto w-full rounded-full bg-[#EC4007] py-3 text-lg text-white transition hover:bg-[#B53305]">
            Submit
          </button>
        </form>

        <div className="absolute top-0 right-0 hidden w-[280px] lg:block">
          <img src={envelop} alt="Envelope" className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
