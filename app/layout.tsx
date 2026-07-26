import Header from "@/components/header";
import "./globals.css";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import BackgroundMotion from "@/components/motion/background-motion";
import DarkCursor from "@/components/motion/dark-cursor";
import ScrollProgress from "@/components/motion/scroll-progress";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Mussadaq Ahmad | Software Engineer",
  description:
    "Mussadaq Ahmad is a Software Developer with 4+ years of experience specializing in mobile development using Flutter, React Native, and native Android and iOS technologies.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${jakarta.variable} ${syne.variable}`}>
      <body
        className={`${jakarta.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-[#090909] dark:text-[#F5F5F5] sm:pt-36`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollProgress />
            <BackgroundMotion />
            <DarkCursor />
            <div className="noise-overlay" aria-hidden />
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
