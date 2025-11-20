import { createFileRoute } from "@tanstack/react-router";
import PageTitle from "../components/PageTitle";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section>
      <PageTitle title="Storytime4kids - where magical stories grow smarter kids" />
      <div></div>
    </section>
  );
}
