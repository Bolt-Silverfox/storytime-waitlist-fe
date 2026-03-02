import type { Metadata } from "next";
import WaitlistClient from "../../components/waitlist/WaitlistClient";

export const metadata: Metadata = {
  title: "Join the Waitlist | Storytime",
  description:
    "Join the early access list and be among the first to explore safe, calming, expressive stories kids love.",
};

export default function WaitlistPage() {
  return <WaitlistClient />;
}
