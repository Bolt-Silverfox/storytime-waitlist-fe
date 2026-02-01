import React, { useState } from "react";
import { toast } from "sonner";
import postimage from "../assets/postImg.png";
import envelop from "../assets/Envelop.png";
import { WAITLIST_API } from "../constants";

const ContactUs: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
      message: string;
    };

    const newErrors: typeof errors = {};
    if (!data.name.trim()) newErrors.name = "Full name is required.";
    if (!data.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(data.email))
      newErrors.email = "Invalid email address.";
    if (!data.message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      const request = await fetch(`${WAITLIST_API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await request.json();

      if (!request.ok) {
        throw new Error(
          response.message || response.error || request.statusText
        );
      }

      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } catch (err: unknown) {
      const errMessage =
        err instanceof Error ? err.message : "Unexpected error, try again.";
      toast.error(errMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-5 flex w-full flex-col items-center px-4 py-6">
      <div className="relative flex w-full max-w-5xl flex-col items-start justify-center gap-10 lg:flex-row">
        <div className="absolute top-40 left-0 hidden w-[200px] lg:block">
          <img src={postimage} alt="Mailbox" className="h-auto w-full" />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="z-10 mx-auto flex w-full max-w-md flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="px-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              disabled={isLoading}
              className={`w-full rounded-full border px-5 py-3 text-sm focus:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <span className="px-2 text-sm text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="px-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              disabled={isLoading}
              className={`w-full rounded-full border px-5 py-3 text-sm focus:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <span className="px-2 text-sm text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="px-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here...."
              disabled={isLoading}
              className={`h-36 w-full resize-none rounded-xl border px-5 py-3 text-sm focus:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <span className="px-2 text-sm text-red-500">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto w-full rounded-full bg-[#EC4007] py-3 text-lg text-white transition hover:bg-[#B53305] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Sending..." : "Submit"}
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
