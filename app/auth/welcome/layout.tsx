'use client'

import { Inter, Unbounded } from 'next/font/google';
import welcomeStyles from "./welcome.module.css";
import { useEffect } from 'react';

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


export default function WelcomeLayout({
                                        children,
                                      }: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
      const originalClassName = body.className;
      body.className = `${inter.variable} ${unbounded.variable} ${welcomeStyles.body}`;


      return () => {
        body.className = originalClassName;
      };
    }
  }, []);

  return <>{children}</>;
}
