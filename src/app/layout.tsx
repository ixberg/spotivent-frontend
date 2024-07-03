"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const disableHeaderFooter = ["/signin", "/signup"];

  const shouldDisableHeaderFooter =
    disableHeaderFooter.includes(pathname) || pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className={poppins.className}>
        {!shouldDisableHeaderFooter && <Header />}
        {children}
        {!shouldDisableHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
