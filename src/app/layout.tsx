import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";
import { ActiveTabProvider } from "./(browser)/portfolio/ActiveTabContext";
import { Noto_Sans_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "jjcx",
  description: "personal portfolio of jjcx",
  twitter: {
    card: 'summary_large_image',
    title: 'jjcx',
    description: 'personal portfolio of jjcx',
    images: 'https://raw.githubusercontent.com/jjcxdev/jjcx/main/public/jjcx.png'
  },
  openGraph: {
    title: 'jjcx',
    description: '',
    url: 'https://jjcx.dev',
    siteName: 'jjcx',
    images: [
      {
        url: 'https://raw.githubusercontent.com/jjcxdev/jjcx/main/public/jjcx.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_CANADA',
    type: 'website',
  },
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
          <SpeedInsights />
        </body>
      </html>
    </ActiveTabProvider>
  );
}
