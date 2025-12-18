import { customerDataCards } from "@/data";
import Icon from "../shared/Icon";

const CustomersDataCards: React.FC = () => {
  return (
    <ul className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
      {customerDataCards.map((data) => (
        <li
          key={data.title}
          className="border-border flex w-full flex-col gap-y-6 rounded-md border p-6 [700px]:w-[332px]"
        >
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-base font-medium text-gray-900">
              {data.title}
            </h3>
            <Icon name={data.title === "Revenue" ? "DollarSign" : "Users"} />
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
  );
};

export default CustomersDataCards;
