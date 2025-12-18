import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { customersTableData, customersTableHeaders } from "@/data";
import { useState } from "react";
import CustomersTableHeader from "./CustomersTableHeader";
import CustomerDetailsOverlay from "../CustomerDetailsOverlay";

const CustomersTable: React.FC = () => {
  const [currentlyOpen, setCurrentlyOpen] = useState("");
  return (
    <div className="flex flex-col gap-y-6">
      <CustomersTableHeader />
      <Table className="border-border flex min-w-full flex-col rounded-xl border max-md:w-fit">
        <TableHeader className="rounded-xl bg-[#FAFAFA]">
          <TableRow className="grid grid-cols-[200px_100px_200px_200px_1fr_1fr_1fr] gap-2 xl:grid-cols-[1fr_100px_1fr_1fr_100px_100px_100px] xl:gap-5">
            {customersTableHeaders.map((header) => (
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
          {customersTableData.map((data) => (
            <TableRow
              onClick={() => setCurrentlyOpen(data.id)}
              className="grid min-h-[72px] grid-cols-[200px_100px_200px_200px_1fr_1fr_1fr] gap-2 xl:grid-cols-[1fr_100px_1fr_1fr_100px_100px_100px]"
            >
              <TableCell className="flex flex-row items-center gap-x-2">
                <img src={data.imageUrl} alt="user profile picture" />
                <div className="flex flex-col gap-y-2">
                  <p className="text-base font-medium text-gray-900 capitalize">
                    {data.name}
                  </p>
                  <p className="text-sm text-wrap text-gray-600">
                    Last Active: {data.lastActive}
                  </p>
                </div>
              </TableCell>
              <TableCell
                className={`cursor-pointer place-self-center rounded-full px-2 py-1 text-center capitalize transition-all duration-300 ${data.paymentStatus === "paid" ? "bg-success/30 text-success" : "bg-black/10 text-black"}`}
              >
                {data.paymentStatus}
              </TableCell>
              <TableCell className="place-self-center text-sm text-gray-600">
                {data.lastLogin}
              </TableCell>
              <TableCell className="place-self-center text-sm text-wrap text-gray-600">
                Active for {data.activityLength}
              </TableCell>
              <TableCell className="place-self-center text-sm text-gray-600">
                {data.referrals}
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
      {currentlyOpen && (
        <CustomerDetailsOverlay
          userId={currentlyOpen}
          handleClose={() => setCurrentlyOpen("")}
        />
      )}
    </div>
  );
};

export default CustomersTable;
