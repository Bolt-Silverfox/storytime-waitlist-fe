import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../../components/PageTitle";

export const Route = createFileRoute("/_layout/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto flex w-full max-w-[837px] flex-1 flex-col gap-y-14">
      <PageTitle title="Privacy policy" />
      <ul className="flex-1"></ul>
      <button className="bg-primary font-abezee -mt-1 w-[312px] self-center rounded-full py-[17px] font-semibold text-white uppercase">
        i have read and accepted
      </button>
    </div>
  );
}
