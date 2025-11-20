import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../../components/PageTitle";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <PageTitle title="Storytime4kids - where magical stories grow smarter kids" />
      <div></div>
    </section>
  );
}
