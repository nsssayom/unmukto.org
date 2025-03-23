import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Unmukto.org - Open Source Bengali Computing",
  description: "A community-driven initiative developing modern, open-source solutions for Bengali language computing.",
  openGraph: {
    title: "Unmukto.org - Open Source Bengali Computing",
    description: "Modern open-source solutions for Bengali language computing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}
