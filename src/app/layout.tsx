
import type { Metadata } from "next";
import { Karma } from "next/font/google";
import "./globals.css";

const karma = Karma({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "AISkills",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={karma.className}>{children}</body>
    </html>
  );
}


