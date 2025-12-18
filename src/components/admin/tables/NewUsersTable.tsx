import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const NewUsersTable: React.FC = () => {
  return (
    <Table className="border-border flex min-w-full flex-col rounded-xl border max-md:w-fit">
      <TableHeader className="rounded-xl bg-[#FAFAFA]">
        <TableRow className="grid grid-cols-[200px_100px_1fr_1fr_1fr_1fr] gap-2 xl:grid-cols-[1fr_100px_200px_200px_200px_200px] xl:gap-5">
          {tableHeaders.map((header) => (
            <TableHead
              key={header}
              className="flex items-center justify-center text-xs font-medium text-gray-600"
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className="">
        {newUsersTableData.map((data) => (
          <TableRow className="grid min-h-[72px] grid-cols-[200px_100px_1fr_1fr_1fr_1fr] gap-5 xl:grid-cols-[1fr_100px_200px_200px_200px_200px]">
            <TableCell className="flex flex-row items-center gap-x-2">
              <img src={data.imageUrl} alt="user profile picture" />
              <div className="flex flex-col gap-y-2">
                <p className="text-base font-medium text-gray-900 capitalize">
                  {data.name}
                </p>
                <p className="text-sm text-wrap text-gray-600">
                  Last Active, {data.lastActive}
                </p>
              </div>
            </TableCell>
            <TableCell
              className={`cursor-pointer place-self-center rounded-full px-2 py-1 text-center capitalize transition-all duration-300 ${data.paymentStatus === "paid" ? "bg-success/30 text-success" : "bg-black/10 text-black"}`}
            >
              {data.paymentStatus}
            </TableCell>
            <TableCell className="place-self-center text-sm text-gray-600">
              {data.registrationDate}
            </TableCell>
            <TableCell className="place-self-center text-sm text-gray-600">
              {data.activityLength}
            </TableCell>
            <TableCell className="place-self-center text-sm text-gray-600">
              {data.creditUsed}
            </TableCell>
            <TableCell className="place-self-center text-sm text-gray-600">
              ${data.amountSpent}
            </TableCell>
          </TableRow>
        ))}

        <div className="flex h-[72px] flex-row items-center justify-between px-4">
          <Button variant={"outline"}>Previous</Button>
          <p>Page 1 of 10</p>
          <Button variant={"outline"}>Next</Button>
        </div>
      </TableBody>
    </Table>
  );
};

export default NewUsersTable;

const tableHeaders = [
  "Users",
  "Payment Status",
  "Registration Data",
  "Activity Length",
  "Credit Used",
  "Amount Spent",
];

type TableUser = {
  imageUrl: string;
  name: string;
  lastActive: string;
  paymentStatus: "paid" | "free";
  registrationDate: string;
  activityLength: string;
  creditUsed: number;
  amountSpent: number;
  id: string;
};

const newUsersTableData: TableUser[] = [
  {
    imageUrl: "/images/avatars/olivia-rhye.svg",
    name: "Catalog",
    lastActive: "Yesterday, at 16:41",
    paymentStatus: "paid",
    registrationDate: "Dec 5, 2025",
    activityLength: "2 hours",
    creditUsed: 128,
    amountSpent: 0.5,
    id: "1",
  },
  {
    imageUrl: "/images/avatars/ciroocles.svg",
    name: "Ciroocles",
    lastActive: "Today, at 9:15",
    paymentStatus: "free",
    registrationDate: "Dec 5, 2025",
    activityLength: "2 hours",
    creditUsed: 334,
    amountSpent: 2,
    id: "2",
  },
  {
    imageUrl: "/images/avatars/command-r.svg",
    name: "Command + R",
    lastActive: "Online",
    paymentStatus: "paid",
    registrationDate: "Dec 5, 2025",
    activityLength: "2 hours",
    creditUsed: 126,
    amountSpent: 1.2,
    id: "3",
  },
  {
    imageUrl: "/images/avatars/hourglass.svg",
    name: "Hourglass",
    lastActive: "Dec 5, 19:45",
    paymentStatus: "paid",
    registrationDate: "Dec 5, 2025",
    activityLength: "2 hours",
    creditUsed: 132,
    amountSpent: 1.7,
    id: "4",
  },
  {
    imageUrl: "/images/avatars/layers.svg",
    name: "Layers",
    lastActive: "Dec 2, 19:45",
    paymentStatus: "free",
    registrationDate: "Dec 5, 2025",
    activityLength: "1 hour",
    creditUsed: 72,
    amountSpent: 0,
    id: "5",
  },
];
