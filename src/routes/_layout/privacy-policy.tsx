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
      <ul className="flex flex-1 flex-col gap-y-6">
        {privacyPolicyData.map((policy) => (
          <li key={policy.index} className="flex flex-col gap-y-2">
            <h2 className="font-Qilka text-base font-bold">
              {policy.index}. {policy.heading}
            </h2>
            <p className="font-abezee text-sm leading-6 text-[#212121]">
              {policy.paragraph}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
