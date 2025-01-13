import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./welcome.css";


const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: "TagMate | Добро пожаловать",
  description: "TagMate - ваш проводник в мирезнакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
