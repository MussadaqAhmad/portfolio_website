"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderName, 100) || !senderName.trim()) {
    return {
      error: "Invalid sender name",
    };
  }
  if (
    !validateString(senderEmail, 500) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.trim())
  ) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000) || !message.trim()) {
    return {
      error: "Invalid message",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail =
    process.env.CONTACT_EMAIL || "mussadaq900@gmail.com";
  const configuredFromEmail =
    process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const configuredFromAddress =
    configuredFromEmail.match(/<([^<>]+)>$/)?.[1] || configuredFromEmail;
  const fromEmail = `Mussadaq Ahmad Portfolio <${configuredFromAddress.trim()}>`;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return {
      error: "The contact form is not configured yet. Please email me directly.",
    };
  }

  const resend = new Resend(apiKey);
  const cleanSenderName = senderName.trim();
  const cleanSenderEmail = senderEmail.trim();
  const cleanMessage = message.trim();

  let data;
  try {
    data = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `Client enquiry · ${cleanSenderEmail}`,
      reply_to: cleanSenderEmail,
      react: React.createElement(ContactFormEmail, {
        name: cleanSenderName,
        email: cleanSenderEmail,
        message: cleanMessage,
      }),
    });
  } catch (error: unknown) {
    console.error("Resend contact email failed:", getErrorMessage(error));
    return {
      error: "Your message could not be sent. Please try again shortly.",
    };
  }

  return {
    data,
  };
};
