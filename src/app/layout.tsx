import type { Metadata } from "next";
import "./globals.css";
import { ActiveTabProvider } from "./(browser)/portfolio/ActiveTabContext";

export const metadata: Metadata = {
  title: "Blog",
  description: "by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ActiveTabProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ActiveTabProvider>
  );
}
