import type { Metadata } from "next";
import Link from "next/link";
import SqueezeHero from "../../components/SqueezeHero";
import SqueezeBed from "../../components/SqueezeBed";
import SqueezeBuilt from "../../components/SqueezeBuilt";
import SqueezeGrow from "../../components/SqueezeGrow";

export const metadata: Metadata = {
  title: "Better Screen Time | Storytime",
  description:
    "Storytime turns reading into an interactive experience with animated stories, read-along voices, and simple activities.",
};

export default function SqueezePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <main className="">
        <header className="flex flex-row items-center justify-center bg-white py-8">
          <Link href="/">
            <img
              src="/icons/new-logo-blue.svg"
              alt="storytime logo image"
              className="block h-16 w-[178px]"
            />
          </Link>{" "}
        </header>
        <SqueezeHero />
        <SqueezeBed />
        <SqueezeBuilt />
        <SqueezeGrow />
      </main>
    </div>
  );
}
