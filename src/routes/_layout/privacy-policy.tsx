import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../../components/PageTitle";
import { privacyPolicyData } from "../../../data";

export const Route = createFileRoute("/_layout/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto flex max-w-[837px] flex-1 flex-col gap-y-7 px-5 md:gap-y-14 md:px-10">
      <PageTitle title="Privacy policy" />
      <ul className="flex flex-1 flex-col gap-y-[47px]">
        {privacyPolicyData.map((policy) => (
          <li key={policy.index} className="flex flex-col gap-y-[18px]">
            <h2 className="font-Qilka text-base font-bold">
              {policy.index}. {policy.heading}
            </h2>
            <p className="font-abezee text-sm leading-6 text-[#212121]">
              {policy.paragraph}
            </p>
          </li>
        ))}
      </ul>
      <button className="bg-primary font-abezee mt-6 mb-10 w-[312px] self-center rounded-full py-[17px] font-semibold text-white uppercase md:mb-28">
        i have read and accepted
      </button>
    </div>
  );
}
