import { createFileRoute } from "@tanstack/react-router";
import { dashboardRevenueData } from "../../../../data";
import AiConsumptionChartContainer from "../../../components/admin/charts/AIConsumptionChart";
import UsersOverviewChartContainer from "../../../components/admin/charts/UserChart";
import Icon from "../../../components/shared/Icon";
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
          <ul className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
            {dashboardRevenueData.map((data) => (
              <li
                key={data.title}
                className="border-border flex w-full flex-col gap-y-6 rounded-md border p-6 [700px]:w-[332px]"
              >
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-base font-medium text-gray-900">
                    {data.title}
                  </h3>
                  <Icon
                    name={data.title === "Revenue" ? "DollarSign" : "Users"}
                  />
                </div>
                <p className="text-3xl font-semibold text-gray-900">
                  ${data.amount.toLocaleString()}
                </p>

                <div className="flex flex-row items-baseline justify-between">
                  <p className="flex flex-row items-center gap-x-1 text-sm font-medium text-gray-600">
                    <span className="text-success flex flex-row items-center gap-x-2">
                      {" "}
                      <Icon name="ArrowUp" /> 12%
                    </span>
                    vs last month
                  </p>
                  <img src="/icons/chart.svg" alt="Chart icon" />
                </div>
              </li>
            ))}
          </ul>
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
