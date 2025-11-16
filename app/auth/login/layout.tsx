'use client';

import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./login.css";
import { useEffect } from "react";

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

// export const metadata: Metadata = {
//   title: "Tagmate | Авторизация",
//   description: "TagMate - ваш проводник в мирезнакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
      const originalClassName = body.className;
      body.className = "EbanayaBlyadota";


      return () => {
        body.className = originalClassName;
      }
    }
  }, []);
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
