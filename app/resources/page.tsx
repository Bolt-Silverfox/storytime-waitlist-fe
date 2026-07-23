import type { Metadata } from "next";
import ResourcesClient from "../../components/resources/ResourcesClient";
import { resourcesData } from "../../data";

export const metadata: Metadata = {
  title: "Resources | Storytime",
  description: "Helpful resources, tips, and stories for parents and children.",
};

export default function ResourcesPage() {
  return <ResourcesClient resources={resourcesData} />;
}
