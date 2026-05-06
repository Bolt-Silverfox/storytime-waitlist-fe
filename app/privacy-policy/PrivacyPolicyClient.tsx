"use client";

import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { getPrivacyPolicy, type SanityPrivacyPolicy } from "../../lib/sanity";

export default function PrivacyPolicyClient() {
  const [privacyPolicy, setPrivacyPolicy] = useState<SanityPrivacyPolicy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrivacyPolicy() {
      try {
        const data = await getPrivacyPolicy();
        setPrivacyPolicy(data);
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
        setError("Failed to load privacy policy. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPrivacyPolicy();
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 pb-12 md:gap-y-14 md:px-10">
        <PageTitle title="Privacy policy" />
        <div className="flex justify-center py-10">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#F97316]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 pb-12 md:gap-y-14 md:px-10">
        <PageTitle title="Privacy policy" />
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <p className="font-abezee text-center text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 md:gap-y-14 md:px-10">
      <PageTitle title="Privacy policy" />
      <ul className="flex flex-1 flex-col gap-y-6">
        {privacyPolicy.map((policy) => (
          <li key={policy._id} className="flex flex-col gap-y-2">
            <h2 className="font-Qilka text-base font-bold">
              {policy.index}. {policy.heading}
            </h2>
            {policy.contentType === "list" && policy.listItems ? (
              <ul className="space-y-2">
                {policy.listItems.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-abezee shrink-0 text-sm leading-6 text-[#212121]">
                      {idx + 1}.
                    </span>
                    <p className="font-abezee text-sm leading-6 text-[#212121]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-abezee text-sm leading-6 text-[#212121]">
                {policy.paragraph}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
