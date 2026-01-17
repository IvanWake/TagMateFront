import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Unbounded, Onest } from 'next/font/google';
import indexStyles from "./index.module.css";

const onest = Onest({
  subsets: ['cyrillic'],
  variable: '--font-onest',
  display: 'swap',
});

const inter = Inter({
  subsets: ['cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['cyrillic'],
  variable: '--font-unbounded',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tagmate | Главная",
  description: "Tagmate - ваш проводник в мире знакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
  other: {
    'telegram-theme-color-scheme': 'light',
    'theme-color': '#ffffff',
  },
  icons: {
    icon: [
      { url: '/icon-192x192.jpg', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.jpg', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Tagmate',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${onest.variable}`}>
      <body className={indexStyles.body}>{children}</body>
    </html>
  );
}
