import DashboardRevenueData from "@/components/admin/DashboardRevenueData";
import { createFileRoute } from "@tanstack/react-router";
import AiConsumptionChartContainer from "../../../components/admin/charts/AIConsumptionChart";
import UsersOverviewChartContainer from "../../../components/admin/charts/UserChart";
import NewUsersTable from "../../../components/admin/tables/NewUsersTable";

export const Route = createFileRoute("/admin/dashboard/overview")({
  component: RouteComponent,
});

function RouteComponent() {
  const availableCredit = 750000;
  return (
    <div className="font-inter mb-5 flex min-h-full max-w-full flex-1 flex-col gap-y-4 overflow-x-hidden md:mb-10">
      <header className="flex flex-col items-center justify-between sm:flex-row">
        <h2 className="text-3xl font-semibold tracking-wide text-black">
          Dashboard
        </h2>
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-sm text-black">
            Available Credit :{" "}
            <span className="text-brand">
              {availableCredit.toLocaleString()}
            </span>
          </p>
          <button className="bg-brand hover:bg-brand/70 flex h-9 w-25 cursor-pointer items-center justify-center rounded-md text-white transition-all duration-300">
            Download
          </button>
        </div>
      </header>
      <main className="flex flex-col gap-y-4">
        <section aria-labelledby="revenue section">
          <DashboardRevenueData />
        </section>
        <section
          aria-labelledby="user charts comparison"
          className="flex h-full w-full flex-col gap-5 lg:flex-row lg:items-center"
        >
          <UsersOverviewChartContainer />
          <AiConsumptionChartContainer />
        </section>
        <section
          aria-labelledby="New users table"
          className="mt-4 flex flex-col gap-y-6"
        >
          <h3 className="text-lg leading-7 font-semibold">New Users</h3>
          <NewUsersTable />
        </section>
      </main>
    </div>
  );
}
