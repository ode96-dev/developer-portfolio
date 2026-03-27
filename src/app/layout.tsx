import type { Metadata } from "next";
import { Inter, Quicksand, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Quicksand({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
