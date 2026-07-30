import type { Metadata } from "next";
import AboutClient from "../../components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Storytime",
  description:
    "Learn about our mission to provide safe, educational, and magical stories for children.",
};

export default function AboutPage() {
  return <AboutClient />;
}
