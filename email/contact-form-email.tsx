import * as React from "react";
import { Head, Html, Preview } from "@react-email/components";
import ContactFormEmailContent, {
  type ContactFormEmailProps,
} from "./contact-form-email-content";

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via your portfolio</Preview>
      <ContactFormEmailContent name={name} email={email} message={message} />
    </Html>
  );
}
