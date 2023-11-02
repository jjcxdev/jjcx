"use client";

import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import SecondaryButton from "./components/buttons/SecondaryButton";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <main>
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
