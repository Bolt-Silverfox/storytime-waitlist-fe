import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../components/PageTitle";

export const Route = createFileRoute("/terms-and-conditions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1">
      <PageTitle title="Terms and conditions" />
    </div>
  );
}
