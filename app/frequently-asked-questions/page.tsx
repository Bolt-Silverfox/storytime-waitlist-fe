import type { Metadata } from "next";
import FAQClient from "../../components/FAQClient";
import { getFaqCategories, getFaqs } from "../../lib/sanity";

export const metadata: Metadata = {
  title: "FAQ | Storytime",
  description: "Find answers to frequently asked questions about Storytime.",
};

export default async function FAQPage() {
  const [categories, faqs] = await Promise.all([getFaqCategories(), getFaqs()]);

  return <FAQClient initialCategories={categories} initialFaqs={faqs} />;
}
