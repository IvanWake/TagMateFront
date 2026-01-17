import type { Metadata } from "next";
import { Inter, Unbounded, Onest } from "next/font/google";

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
    title: "Tagmate | Подтверждение",
    description: "TagMate - ваш проводник в мирезнакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${onest.variable}`} style={{ backgroundColor: '#fff' }}>
            {children}
        </html>
    );
}
