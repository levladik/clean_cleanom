/**
 * Root Layout
 * 
 * The root layout for the cleaning service website
 */

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Clean Cleanom - Professional Cleaning Services in Belgrad",
  description: "Professional cleaning services for homes and businesses. Get an instant quote with our price calculator.",
  keywords: ["cleaning service", "house cleaning", "office cleaning", "price calculator", "professional cleaners"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="customTheme" lang="en">
      <body className="bg-base-200 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
