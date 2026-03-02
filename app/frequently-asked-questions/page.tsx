import type { Metadata } from "next";
import FAQClient from "../../components/FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Storytime",
  description: "Find answers to frequently asked questions about Storytime.",
};

export default function FAQPage() {
  return <FAQClient />;
}
