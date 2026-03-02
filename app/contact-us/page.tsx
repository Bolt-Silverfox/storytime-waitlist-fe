import type { Metadata } from "next";
import PageTitle from "../../components/PageTitle";
import ContactUs from "../../components/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | Storytime",
  description:
    "Have questions or feedback? Get in touch with the Storytime team.",
};

export default function ContactUsPage() {
  return (
    <div className="flex-1">
      <PageTitle title="Contact us" />

      <ContactUs />
    </div>
  );
}
