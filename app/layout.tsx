import type { Metadata } from "next";
import "./globals.css";
import {Footer, NavBar} from "@/components";

export const metadata: Metadata = {
  title: "Syaarty",
  description: "A Car Selling Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className="relative">
      <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
