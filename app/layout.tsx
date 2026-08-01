import Header from "@/components/header";
import "./globals.css";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import BackgroundMotion from "@/components/motion/background-motion";
import CursorFx from "@/components/motion/cursor-fx";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${jakarta.variable} ${syne.variable}`}>
      <body
        className={`${jakarta.className} text-primary relative bg-gray-50 pt-28 dark:bg-[#0b0b0b] md:pt-36`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollProgress />
            <BackgroundMotion />
            <CursorFx />
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
