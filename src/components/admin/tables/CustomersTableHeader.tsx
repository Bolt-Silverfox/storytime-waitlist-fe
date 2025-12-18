import { Button } from "@/components/ui/button";
import Icon from "@/components/shared/Icon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { useState, type Dispatch, type SetStateAction } from "react";
import { durations, subscriptions } from "@/data";

const CustomersTableHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const [duration, setDuration] = useState<DurationType>("All time");
  const [subscriptionFilter, setSubscriptionFilter] =
    useState<SubscriptionType>("All");

  const handleSearch = () => {
    console.log("i searched for", searchValue);
    setSearchValue("");
  };
  return (
    <header className="flex flex-col justify-between gap-y-3 sm:flex-row sm:items-center">
      <div className="flex flex-row gap-x-3">
        <Button className="text-brand bg-brand/10 hover:bg-brand/40 transition-all duration-300">
          {duration}
        </Button>
        <DurationFilter setDuration={setDuration} duration={duration} />
        <SubscriptionTypeFilter
          subscriptionFilter={subscriptionFilter}
          setSubscriptionFilter={setSubscriptionFilter}
        />
      </div>
      <div className="relative">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          type="text"
          className="border-border focus:ring-brand flex h-10 w-[280px] items-center justify-center rounded-lg border pl-9 text-black transition-all duration-300 placeholder:text-gray-500 focus:w-sm focus:ring focus:ring-offset-1 focus:outline-none"
        />
        <Icon
          name="Search"
          className="absolute top-2 left-3"
          color="#717680"
          onClick={handleSearch}
        />
      </div>
    </header>
  );
};

export default CustomersTableHeader;

const SubscriptionTypeFilter = ({
  setSubscriptionFilter,
  subscriptionFilter,
}: {
  setSubscriptionFilter: Dispatch<SetStateAction<SubscriptionType>>;
  subscriptionFilter: SubscriptionType;
}) => {
  return (
    <Select
      value={subscriptionFilter}
      onValueChange={(value) =>
        setSubscriptionFilter(value as SubscriptionType)
      }
    >
      <SelectTrigger className="w-[146px]">
        <span className="flex flex-row gap-x-4">
          <Icon name="ListFilter" />
          <SelectValue placeholder="Filter" />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {subscriptions.map((duration) => (
            <SelectItem
              onClick={() => setSubscriptionFilter(duration)}
              value={duration}
              key={duration}
            >
              {duration}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

type SubscriptionType = (typeof subscriptions)[number];
type DurationType = (typeof durations)[number];

const DurationFilter = ({
  setDuration,
  duration,
}: {
  setDuration: Dispatch<SetStateAction<DurationType>>;
  duration: DurationType;
}) => {
  return (
    <Select
      value={duration}
      onValueChange={(value) => setDuration(value as DurationType)}
    >
      <SelectTrigger className="w-[170px]">
        <span className="flex flex-row gap-x-4">
          <Icon name="CalendarDays" />
          <SelectValue placeholder="Duration" />
        </span>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {durations.map((duration) => (
            <SelectItem key={duration} value={duration}>
              {duration}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
