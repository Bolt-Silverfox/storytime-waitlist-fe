import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { allMonths } from "../../../data";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions<"bar"> = {
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

const AiConsumptionChart = () => {
  return <Bar options={options} data={aiCreditConsumptionChartData} />;
};

const aiCreditConsumptionChartData: ChartData<"bar"> = {
  labels: allMonths,
  datasets: [
    {
      label: "",
      data: [
        15000, 50000, 22000, 55000, 17000, 16000, 58000, 39000, 12000, 32000,
        18000, 45000,
      ],
      backgroundColor: "#6e65f4",
      borderRadius: 5,
    },
  ],
};

const AiConsumptionChartContainer = () => {
  const [duration, setDuration] =
    useState<AIConsumptionChartDuration>("Yearly");

  return (
    <div className="border-border flex min-h-[456px] flex-1 flex-col gap-y-4 rounded-lg border p-4">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold text-black">
          AI Credit Consumption
        </h3>
        <select
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value as AIConsumptionChartDuration)
          }
          className="border-border active:border-brand/40 rounded-md border p-2 active:outline-none"
        >
          {AI_CONSUMPTION_DURATIONS.map((label) => (
            <option key={label} value={label} className="">
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <AiConsumptionChart />
      </div>
    </div>
  );
};

export default AiConsumptionChartContainer;

const AI_CONSUMPTION_DURATIONS = [
  "Yearly",
  "Quarterly",
  "Monthly",
  "Weekly",
  "Daily",
] as const;

type AIConsumptionChartDuration = (typeof AI_CONSUMPTION_DURATIONS)[number];
