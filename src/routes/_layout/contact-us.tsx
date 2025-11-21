import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../../components/PageTitle";
import ContactUs from "../../components/ContactUs";

export const Route = createFileRoute("/_layout/contact-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1">
      <PageTitle title="Contact us" />

      <ContactUs />
    </div>
  );
}
