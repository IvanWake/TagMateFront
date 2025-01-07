import type { Metadata } from "next";
import "./signup.css";



export const metadata: Metadata = {
  title: "TagMate | Главная",
  description: "TagMate - ваш проводник в мирезнакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="body">{children}</body>
    </html>
  );
}
