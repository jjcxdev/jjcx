import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import { ActiveTabProvider } from "./(browser)/portfolio/ActiveTabContext";
import { Noto_Sans_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "jjcx",
  description: "personal portfolio of jjcx",
};

const noto = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ActiveTabProvider>
      <html lang="en" className={noto.className}>
        <body>{children}
          <Analytics />
        </body>
      </html>
    </ActiveTabProvider>
  );
}
