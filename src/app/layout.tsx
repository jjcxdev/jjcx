import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/components/sections/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JJCX",
  description: "Frontend Development portfolio",
  openGraph: {
    type: "website",
    title: "JJCX",
    description: "Frontend Development portfolio",
    images: [
      {
        url: "https://i.ibb.co/yQVTbz1/Screenshot-2023-10-09-at-2-44-28-AM.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>jjcx</title>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
