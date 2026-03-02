import type { Metadata } from "next";
import PageTitle from "../../components/PageTitle";
import { termsAndConditionsData } from "../../data";

export const metadata: Metadata = {
  title: "Terms and Conditions | Storytime",
  description: "Read our terms and conditions for using the Storytime app.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 pb-12 md:gap-y-14 md:px-10">
      <PageTitle title="Terms and conditions" />
      <ul className="flex flex-1 flex-col gap-y-6">
        {termsAndConditionsData.map((condition: any) => (
          <li key={condition.index} className="flex flex-col gap-y-2">
            <h2 className="font-Qilka text-base font-bold">
              {condition.index}. {condition.heading}
            </h2>
            {Array.isArray(condition.paragraph) ? (
              <ul className="space-y-2">
                {condition.paragraph.map((point: any, idx: number) => (
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
