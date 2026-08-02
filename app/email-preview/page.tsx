import { notFound } from "next/navigation";
import ContactFormEmailContent from "@/email/contact-form-email-content";

export default function EmailPreviewPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <ContactFormEmailContent
      name="Alex Morgan"
      email="alex.morgan@example.com"
      message={
        "Hi Mussadaq,\n\nI came across your portfolio and would love to discuss a mobile application project with you. Are you available for a quick call this week?"
      }
    />
  );
}
