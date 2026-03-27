"use client";

import React, { useState } from "react";
import { User, Mail } from "lucide-react";
import { toast } from "sonner";
import { WAITLIST_API } from "../../constants";

const ResourceSignUp: React.FC = () => {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        name: parentName,
        email: email,
      };

      const request = await fetch(`${WAITLIST_API}/waitlist/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let response: { message?: string; error?: string } = {};
      try {
        response = await request.json();
      } catch {
        // non-JSON body
      }

      if (!request.ok) {
        throw new Error(
          response.message || response.error || request.statusText,
        );
      }

      toast.success("Joined early access successfully!");
      setParentName("");
      setEmail("");
    } catch (err: unknown) {
      const errMessage =
        err instanceof Error ? err.message : "Unexpected error, try again.";
      toast.error(errMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 mx-auto overflow-hidden rounded-[32px] bg-[#FCF5F0] pt-[48px] pb-[32px] text-center  max-w-[650px]">
      <h2 className="font-Qilka mb-2 text-2xl font-bold text-[#231F1E] md:text-3xl">
        Interested in our product?
      </h2>
      <p className="font-abezee mb-8 text-[#4F4C4B] md:text-lg">
        Fill the form below and be the first to know when we launch.
        <br />
        Get early access and exclusive updates
      </p>

      <form onSubmit={handleSubmit} className="mx-auto max-w-[600px] space-y-4">
        <div className="text-left">
          <label htmlFor="parentName" className="font-abezee mb-1.5 block text-sm font-medium text-[#231F1E]">
            Full name
          </label>
          <div className="relative">
            <User
              className="absolute top-1/2 left-4 -translate-y-1/2 text-[#BDBDBD]"
              size={20}
            />
            <input
              id="parentName"
              type="text"
              placeholder="Enter your full name"
              required
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="font-abezee focus:border-primary w-full rounded-full border border-[#BDBDBD] py-3 pr-4 pl-12 text-[#616161] transition-all outline-none"
            />
          </div>
        </div>

        <div className="text-left">
          <label htmlFor="email" className="font-abezee mb-1.5 block text-sm font-medium text-[#231F1E]">
            Email address
          </label>
          <div className="relative">
            <Mail
              className="absolute top-1/2 left-4 -translate-y-1/2 text-[#BDBDBD]"
              size={20}
            />
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-abezee focus:border-primary w-full rounded-full border border-[#BDBDBD] py-3 pr-4 pl-12 text-[#616161] transition-all outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary hover:bg-primary/80 font-abezee mt-4 w-full rounded-full py-4 text-center font-semibold text-white transition-all disabled:opacity-70"
        >
          {isLoading ? "Loading..." : "Get to know us"}
        </button>
      </form>
    </div>
  );
};

export default ResourceSignUp;
