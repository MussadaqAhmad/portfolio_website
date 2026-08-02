import * as React from "react";

export type ContactFormEmailProps = {
  name: string;
  email: string;
  message: string;
};

const fontFamily =
  "'Poppins', 'Plus Jakarta Sans', 'Segoe UI', Helvetica, Arial, sans-serif";

export default function ContactFormEmailContent({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <div
      style={{
        backgroundColor: "#F1F1F6",
        padding: "40px 0",
        fontFamily,
        minHeight: "100vh",
      }}
    >
      <table
        role="presentation"
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{ backgroundColor: "#F1F1F6" }}
      >
        <tbody>
          <tr>
            <td align="center">
              <table
                role="presentation"
                width={600}
                cellPadding={0}
                cellSpacing={0}
                style={{
                  width: "600px",
                  maxWidth: "92%",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(124,58,237,0.08)",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "40px 40px 24px",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          padding: "6px 16px",
                          borderRadius: "999px",
                          backgroundColor: "#F5EEFE",
                          color: "#7C3AED",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        New Portfolio Message
                      </span>
                      <h1
                        style={{
                          margin: "18px 0 0",
                          fontSize: "28px",
                          fontWeight: 800,
                          color: "#111111",
                          lineHeight: 1.2,
                        }}
                      >
                        You&apos;ve Got A New Message
                      </h1>
                      <p
                        style={{
                          margin: "10px 0 0",
                          fontSize: "14px",
                          color: "#6B7280",
                        }}
                      >
                        Someone reached out through mussadaq-dev.vercel.app
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "0 40px" }}>
                      <table
                        role="presentation"
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                      >
                        <tbody>
                          <tr>
                            <td style={{ paddingRight: "8px", width: "50%" }}>
                              <div
                                style={{
                                  backgroundColor: "#FAFAFC",
                                  border: "1px solid #ECECF3",
                                  borderRadius: "14px",
                                  padding: "14px 18px",
                                }}
                              >
                                <p style={labelStyle}>Name</p>
                                <p
                                  style={{
                                    margin: "4px 0 0",
                                    fontSize: "15px",
                                    fontWeight: 700,
                                    color: "#111111",
                                  }}
                                >
                                  {name}
                                </p>
                              </div>
                            </td>
                            <td style={{ paddingLeft: "8px", width: "50%" }}>
                              <div
                                style={{
                                  backgroundColor: "#FAFAFC",
                                  border: "1px solid #ECECF3",
                                  borderRadius: "14px",
                                  padding: "14px 18px",
                                }}
                              >
                                <p style={labelStyle}>Email</p>
                                <p
                                  style={{
                                    margin: "4px 0 0",
                                    fontSize: "15px",
                                  }}
                                >
                                  <a
                                    href={`mailto:${email}`}
                                    style={{
                                      color: "#7C3AED",
                                      fontWeight: 700,
                                      textDecoration: "none",
                                    }}
                                  >
                                    {email}
                                  </a>
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "20px 40px 0" }}>
                      <p style={{ ...labelStyle, margin: "0 0 8px" }}>Message</p>
                      <div
                        style={{
                          backgroundColor: "#FAFAFC",
                          border: "1px solid #ECECF3",
                          borderRadius: "14px",
                          padding: "18px 20px",
                          fontSize: "15px",
                          lineHeight: 1.6,
                          color: "#374151",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {message}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "28px 40px 8px",
                        textAlign: "center",
                      }}
                    >
                      <a
                        href={`mailto:${email}`}
                        style={{
                          display: "inline-block",
                          padding: "14px 32px",
                          borderRadius: "999px",
                          backgroundColor: "#7C3AED",
                          background:
                            "linear-gradient(135deg, #7C3AED, #EC4899)",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        Reply to {name} →
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "32px 40px",
                        textAlign: "center",
                        borderTop: "1px solid #F0F0F5",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          color: "#9CA3AF",
                        }}
                      >
                        Sent from the contact form on{" "}
                        <a
                          href="https://mussadaq-dev.vercel.app"
                          style={{
                            color: "#7C3AED",
                            textDecoration: "none",
                          }}
                        >
                          mussadaq-dev.vercel.app
                        </a>
                      </p>
                      <p
                        style={{
                          margin: "6px 0 0",
                          fontSize: "11px",
                          color: "#C7C7D1",
                        }}
                      >
                        © 2026 Mussadaq Ahmad. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const labelStyle = {
  margin: 0,
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  color: "#9B8AFB",
};
