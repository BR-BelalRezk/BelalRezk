import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveSection } from "@/exports";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belal Rezk",
  description: "Belal Rezk Personal Portfolio",
  icons: {
    icon: "/belal.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
    >
      <body
        className={`${inter.className} bg-black text-stone-300 overflow-x-hidden`}
      >
        <ActiveSection>
          <Header />
          {children}
        </ActiveSection>
        <Footer />
      </body>
    </html>
  );
}
