import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";



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
    title: "TagMate | Главная",
    description: "TagMate - ваш проводник в мирезнакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
            {children}
        </html>
    );
}
