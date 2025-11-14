import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TagMate | Настройки",
  description: "TagMate - ваш проводник в мире знакомств на улице, где каждый тег становится ключом к новым друзьям и возможным свиданиям",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>{children}</div>
  );
}
