import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Noto_Sans_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const noto = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JJCX Inc. — AI Data Operations & PM Consulting",
  description:
    "Fractional AI PM and Data Operations consulting. Specializing in Human-in-the-Loop workflows, annotation pipelines, and GenAI data programs.",
  twitter: {
    card: "summary_large_image",
    title: "JJCX Inc. — AI Data Operations & PM Consulting",
    description:
      "Fractional AI PM and Data Operations consulting. Specializing in Human-in-the-Loop workflows, annotation pipelines, and GenAI data programs.",
  },
  openGraph: {
    title: "JJCX Inc. — AI Data Operations & PM Consulting",
    description:
      "I help AI labs and product teams build and run the human infrastructure behind generative AI.",
    url: "https://jjcx.dev",
    siteName: "JJCX Inc.",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
