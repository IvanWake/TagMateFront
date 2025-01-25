import type { Metadata } from "next";
import { Inter, Unbounded } from 'next/font/google';
import welcomeStyles from "./welcome.module.css";


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
  title: "TagMate | Добро пожаловать",
  description: "TagMate - ваш проводник в мирезнакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
      <body className={`${welcomeStyles.body}`}>{children}</body>
    </html>
  );
}

// /* button */
//
// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 10px;
// gap: 10px;
//
// width: 333px;
// height: 55px;
//
// background: #0066DE;
// border-radius: 15px;
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;

