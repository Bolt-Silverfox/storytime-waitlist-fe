import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import {
  getTermsAndConditions,
  type SanityTermsAndConditions,
} from "../../lib/sanity";

export const Route = createFileRoute("/_layout/terms-and-conditions")({
  component: RouteComponent,
});

function RouteComponent() {
  const [termsAndConditions, setTermsAndConditions] = useState<
    SanityTermsAndConditions[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTerms() {
      try {
        const data = await getTermsAndConditions();
        setTermsAndConditions(data);
      } catch (error) {
        console.error("Failed to fetch terms and conditions:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTerms();
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 md:gap-y-14 md:px-10 pb-12">
        <PageTitle title="Terms and conditions" />
        <div className="flex justify-center py-10">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#F97316]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 md:gap-y-14 md:px-10 pb-12">
      <PageTitle title="Terms and conditions" />
      <ul className="flex flex-1 flex-col gap-y-6">
        {termsAndConditions.map((condition) => (
          <li key={condition._id} className="flex flex-col gap-y-2">
            <h2 className="font-Qilka text-base font-bold">
              {condition.index}. {condition.heading}
            </h2>
            {condition.contentType === "list" && condition.listItems ? (
              <ul className="space-y-2">
                {condition.listItems.map((point, idx) => (
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
                {condition.paragraph}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
