import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { allMonths } from "../../../../data";
import { useState } from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hoverRadius: 5,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const UsersOverviewChart = () => {
  return <Line options={options} data={usersOverviewData} />;
};

const usersOverviewData: ChartData<"line"> = {
  labels: allMonths,
  datasets: [
    {
      label: "Free",
      data: [
        30000, 32000, 31000, 38000, 22000, 28000, 30000, 32000, 36000, 40000,
        54000, 64000,
      ],
      borderColor: "#BFBFBF",
      backgroundColor: "#C2C6C833",
      fill: true,
    },
    {
      label: "Paid",
      data: [
        15000, 16000, 15500, 19000, 6000, 14000, 15000, 16000, 18000, 20000,
        27000, 32000,
      ],
      borderColor: "#50D01E",
      backgroundColor: "#59CA2D33",
      fill: true,
      // tension: 0.7,
    },
  ],
};

const UsersOverviewChartContainer = () => {
  const [duration, setDuration] = useState<UserChartDurationType>("Last Year");
  return (
    <div className="border-border flex min-h-[456px] flex-1 flex-col gap-y-4 rounded-lg border p-4">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold text-black">Free vs Paid Users</h3>
        <div className="flex h-10 items-center gap-x-2 rounded-md bg-[#F4F4F5] p-1">
          {UserChartDuration.map((label) => (
            <button
              key={label}
              onClick={() => setDuration(label)}
              className={` ${label === duration ? "rounded-md bg-white text-black" : "text-text bg-[#F4F4F5]"} "rounded-md hover:bg-white" cursor-pointer px-3 py-1 text-xs font-medium text-gray-600 transition-all duration-300`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <UsersOverviewChart />
      </div>
    </div>
  );
};
export default UsersOverviewChartContainer;

const UserChartDuration = ["Last Year", "Last Month", "Last Week"] as const;

type UserChartDurationType = (typeof UserChartDuration)[number];
