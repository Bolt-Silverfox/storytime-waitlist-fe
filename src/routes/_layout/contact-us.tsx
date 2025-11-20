import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../../components/PageTitle";

export const Route = createFileRoute("/_layout/contact-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1">
      <PageTitle title="Contact us" />
    </div>
  );
}
