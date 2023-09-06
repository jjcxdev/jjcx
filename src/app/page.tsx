"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import About from "./components/About";
import PrimaryButton from "./components/button";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will be executed only after the first render, thus ensuring it runs only on the client side
  }, []);

  useEffect(() => {
    if (!isClient) return; // Guard clause to exit if not in client

    let currentSection = 0;

    const handleScroll = (event: WheelEvent) => {
      const delta = Math.sign(event.deltaY);

      if (delta > 0) {
        currentSection++;
      } else {
        currentSection--;
      }

      // Since the router is handled inherently, you would navigate to the new section here.
      // Implementation depends on how your App Router is set up.
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isClient]); // Now the effect is also dependent on `isClient`, and will re-run if `isClient` changes

  if (!isClient) {
    return null; // Don't render anything on the server
  }

  // rest of your component
  return (
    <main>
      {/* Hero section */}
      <section
        className="h-screen bg-cyan-500 w-full flex flex-col justify-center py-28 sticky top-0 z-1"
        id="hero-heading">
        <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
          <div className="flex items-center justify-center flex-col">
            <h1
              id="hero-heading"
              className="font-bold uppercase leading-tight lg:leading-tight lg:text-8xl md:leading-tight md:text-7xl text-5xl text-center">
              Front End Developer
            </h1>
          </div>
          <div className="flex justify-center mt-12">
            <PrimaryButton href="mailto:j@jjcx.dev" text="contact" />
          </div>
        </div>
      </section>
      <section id="about-section">
        <About />
      </section>

      {/* New sections */}
      <section className="h-screen bg-customblue z-20 relative">
        <h1>About Me</h1>
        {/* Content */}
      </section>

      <section className="h-screen bg-blue-300 z-20 relative">
        <h1>Work</h1>
        {/* Content */}
      </section>

      {/* ... More sections ... */}

      <Footer />
    </main>
  );
}
