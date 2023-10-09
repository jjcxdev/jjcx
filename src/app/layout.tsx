"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/components/Nav";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isAboutAtTop, setIsAboutAtTop] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component did mount on the client side

    const handleScroll = () => {
      const aboutElement = document.getElementById("about-section");
      const rect = aboutElement?.getBoundingClientRect();

      if (rect && rect.top <= 0) {
        setIsAboutAtTop(true);
      } else {
        setIsAboutAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Server-side rendered part
  if (!isMounted) {
    return (
      <html lang="en">
        <title>jjcx</title>
        <body className={inter.className}>
          {isAboutAtTop && <Nav isAboutAtTop={isAboutAtTop} />}
          {/* Rest of the static components */}
        </body>
      </html>
    );
  }

  // Client-side rendered part
  return (
    <html lang="en">
      <title>jjcx</title>
      <body className={inter.className}>
        {isAboutAtTop && <Nav isAboutAtTop={isAboutAtTop} />}
        {children}
      </body>
    </html>
  );
}
