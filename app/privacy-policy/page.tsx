import type { Metadata } from "next";
import { getPrivacyPolicy } from "../../lib/sanity";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Storytime",
  description: "Read our privacy policy to understand how we handle your data.",
};

export default async function PrivacyPolicyPage() {
  let privacyPolicy: Awaited<ReturnType<typeof getPrivacyPolicy>> = [];

  try {
    privacyPolicy = await getPrivacyPolicy();
  } catch (error) {
    console.error("Failed to load privacy policy:", error);
  }

  return <PrivacyPolicyClient privacyPolicy={privacyPolicy} />;
}
