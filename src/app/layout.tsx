import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import MediaDropdown from "./components/media-dropdown";
import Footer from "./components/footer";
import MobileDropdown from "./components/mobile-menu";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";

// import fonts
import { Poppins, La_Belle_Aurore, Raleway, Mulish } from "next/font/google";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const la_belle_aurora = La_Belle_Aurore({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-aurora",
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
});

export const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Indigo Fobes",
  description: "NYC based actor, singer, dancer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mulish.variable} ${la_belle_aurora.variable} font-mono bg-[var(--base-bg-color)] text-[var(--light-text-color)] relative min-h-screen`}
      >
        <Header />
        <MobileDropdown />
        <main className="font-mono relative contentContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
