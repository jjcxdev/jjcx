"use client";

import { useEffect, useState } from "react";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import SecondaryButton from "./components/buttons/SecondaryButton";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Skills from "./components/sections/Skills";

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
        className="h-screen bg-dark w-full flex flex-col justify-center py-28"
        id="hero-heading">
        <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
          <div className="flex items-center justify-center flex-col">
            <Hero />
          </div>
          <div className="flex justify-center mt-12">
            <SecondaryButton href="mailto:j@jjcx.dev" text="contact" />
          </div>
        </div>
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="skills-section">
        <Skills />
      </section>
      <section id="work-section">
        <Work />
      </section>

      <Footer />
    </main>
  );
}
