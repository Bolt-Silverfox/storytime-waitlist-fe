import type { Metadata } from "next";
import { DEFAULT_TITLE } from "../lib/seo.ts";
import HomeClient from "../components/home/HomeClient";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description:
    "Magical stories that help children grow. From cozy bedtime tales to learning adventures, stories children love and parents trust.",
};

export default function Page() {
  return <HomeClient />;
}
