"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

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
        className="h-screen w-full flex flex-col justify-center py-28 sticky top-0 z-1"
        id="hero-heading">
        <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
          <div className="flex items-center justify-center flex-col">
            <h1
              id="hero-heading"
              className="font-bold uppercase leading-tight lg:leading-tight lg:text-8xl md:leading-tight md:text-7xl text-5xl text-center">
              Justin Chambers
            </h1>
            Front End Developer
          </div>
          <Link href="mailto:j@jjcx.dev">
            <button
              type="button"
              className="rounded-lg border-2 border-accent hover:text-black hover:border-black hover:bg-accent transition duration-500 text-sm px-3 py-1.5 text-center whitespace-nowrap">
              Contact
            </button>
          </Link>
        </div>
      </section>

      {/* New sections */}
      <section className="h-screen bg-red-300 z-20 relative">
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
