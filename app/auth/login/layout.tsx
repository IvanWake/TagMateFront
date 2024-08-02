import type { Metadata } from "next";
import styles from "./login.module.css";

export const metadata: Metadata = {
  title: "TagMate | Авторизация",
  description: "TagMate - ваш проводник в мирезнакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
