import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard/customers")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p className="text-brand text-3xl font-bold">Customers</p>
    </div>
  );
}
