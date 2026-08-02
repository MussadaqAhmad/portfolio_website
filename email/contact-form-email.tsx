import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio message from {senderEmail}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={brandBar} />

          <Section style={card}>
            <Text style={eyebrow}>PORTFOLIO CONTACT</Text>
            <Heading style={heading}>You have a new message</Heading>
            <Text style={intro}>
              Someone reached out through your portfolio contact form.
            </Text>

            <Section style={messageCard}>
              <Text style={label}>MESSAGE</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Section style={senderCard}>
              <Text style={label}>REPLY TO</Text>
              <Text style={senderText}>{senderEmail}</Text>
            </Section>

            <Text style={hint}>
              Reply directly to this email to respond to the sender.
            </Text>
          </Section>

          <Text style={footer}>
            Mussadaq Ahmad · Software Engineer Portfolio
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f7f3fb",
  color: "#24152f",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
  margin: "0",
  padding: "32px 12px",
};

const container = {
  margin: "0 auto",
  maxWidth: "600px",
};

const brandBar = {
  background: "linear-gradient(90deg, #9333ea 0%, #6a2fb4 100%)",
  borderRadius: "18px 18px 0 0",
  height: "8px",
};

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid #eadcf7",
  borderRadius: "0 0 18px 18px",
  boxShadow: "0 16px 40px rgba(106, 47, 180, 0.12)",
  padding: "36px",
};

const eyebrow = {
  color: "#9333ea",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "1.8px",
  margin: "0 0 10px",
};

const heading = {
  color: "#24152f",
  fontSize: "28px",
  lineHeight: "1.2",
  margin: "0 0 12px",
};

const intro = {
  color: "#6e6276",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 26px",
};

const messageCard = {
  backgroundColor: "#faf7fd",
  border: "1px solid #eadcf7",
  borderLeft: "4px solid #9333ea",
  borderRadius: "12px",
  padding: "18px 20px",
};

const senderCard = {
  backgroundColor: "#f4eafb",
  borderRadius: "12px",
  marginTop: "16px",
  padding: "14px 20px",
};

const label = {
  color: "#9333ea",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "1.4px",
  margin: "0 0 7px",
};

const messageText = {
  color: "#33243d",
  fontSize: "16px",
  lineHeight: "1.65",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const senderText = {
  color: "#6a2fb4",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0",
};

const hint = {
  color: "#877b8e",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "20px 0 0",
};

const footer = {
  color: "#91849a",
  fontSize: "12px",
  margin: "18px 0 0",
  textAlign: "center" as const,
};
