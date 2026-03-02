import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions | Storytime",
  description: "Read our terms and conditions for using the Storytime app.",
};

export default function TermsAndConditionsPage() {
  return <TermsClient />;
}
