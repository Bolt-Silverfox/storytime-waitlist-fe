import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard/app-usage")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p className="text-3xl font-bold text-black">App Usage</p>
    </div>
  );
}
