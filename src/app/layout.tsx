import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://unmukto.org'),
  title: "Unmukto.org - Open Source Bengali Computing",
  description: "A community-driven initiative developing modern tools for Bengali language computing. Current focus: high-performance text input engine with Avro Phonetic layout support.",
  keywords: ['Bengali Computing', 'Avro Phonetic', 'Open Source', 'Bangla', 'Text Input', 'Unicode', 'Rust'],
  authors: [{ name: 'Unmukto.org Community' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unmukto.org',
    siteName: 'Unmukto.org',
    title: 'Unmukto.org - Open Source Bengali Computing',
    description: 'A community-driven initiative developing modern tools for Bengali language computing.',
    images: [
      {
        url: 'https://unmukto.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Unmukto.org - Open Source Bengali Computing',
        type: 'image/png',
      },
      {
        url: 'https://unmukto.org/og-image-square.png',
        width: 600,
        height: 600,
        alt: 'Unmukto.org Icon',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unmukto.org - Open Source Bengali Computing',
    description: 'A community-driven initiative developing modern tools for Bengali language computing.',
    images: ['https://unmukto.org/twitter-image.png'],
    creator: '@unmukto_org'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#4F46E5'
      }
    ]
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
