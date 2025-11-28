import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../../components/PageTitle";
import { termsAndConditionsData } from "../../../data";

export const Route = createFileRoute("/_layout/terms-and-conditions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 md:gap-y-14 md:px-10">
      <PageTitle title="Terms and conditions" />
      <ul className="flex flex-1 flex-col gap-y-[47px]">
        {termsAndConditionsData.map((condition) => (
          <li key={condition.index} className="flex flex-col gap-y-[18px]">
            <h2 className="font-Qilka text-base font-bold">
              {condition.index}. {condition.heading}
            </h2>
            {Array.isArray(condition.paragraph) ? (
              <ul className="ml-2">
                {condition.paragraph.map((point, idx) => (
                  <li key={idx}>
                    <p className="font-abezee text-sm leading-6 text-[#212121]">
                      {idx + 1}. {point}
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
      <button className="bg-primary font-abezee mt-6 mb-10 w-[312px] self-center rounded-full py-[17px] font-semibold text-white uppercase md:mb-28">
        i have read and accepted
      </button>
    </div>
  );
}
