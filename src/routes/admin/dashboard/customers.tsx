import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard/customers")({
  component: RouteComponent,
});

function RouteComponent() {
  const availableCredit = 750000;

  return (
    <div className="font-inter mb-5 flex min-h-full max-w-full flex-1 flex-col gap-y-4 overflow-x-hidden md:mb-10">
      <header className="flex flex-col items-center justify-between sm:flex-row">
        <h2 className="text-3xl font-semibold tracking-wide text-black">
          Customers
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
      <main className="flex w-full flex-col gap-y-4"></main>
    </div>
  );
}
