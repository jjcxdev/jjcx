import BlogList from "./components/sections/BlogList";
import Contact from "./components/sections/Contact";
import PreviousWork from "./components/sections/PreviousWork";
import ResumeList from "./components/sections/ResumeList";
import Socials from "./components/sections/Socials";
import About from "./components/sections/About";
import Image from "next/image";
import SecondaryButton from "./components/buttons/SecondaryButton";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default async function Home() {
  return (
    <main className="w-full h-screen p-4 flex flex-col justify-center items-center">
      <Image
        src="./jjcx_logo_dark.svg"
        alt="jjcx logo"
        width={750}
        height={450}
      />
      <div className="flex flex-col md:hidden">
        <About />
        <div className="flex justify-center pt-4 items-center gap-4">
          <div><SecondaryButton text="work" href="../../portfolio" /></div>
          <div><SecondaryButton text="resume" href="./resume" /></div>
          <div><SecondaryButton text="blog" href="../../blog" /></div>
          <div><SecondaryButton text="x" href="https://x.com/jjcxdev" /></div>
          <div><SecondaryButton text="github" href="https://github.com/jjcxdev" /></div>
          <div><SecondaryButton text="linkedin" href="https://linkedin.com/in/justinjchambers" /></div>
        </div>
      </div>
      <div className="hidden md:flex w-full justify-between max-w-3xl pb-12">
        <PreviousWork />
        <Contact />
        <Socials />
      </div>

      <div className="hidden md:flex w-full gap-20 justify-between max-w-3xl pb-12">
        <div className="w-full">
          <ResumeList />
        </div>
        <div className="w-full justify-end">
          <BlogList />
        </div>
      </div>
      <div className="hidden md:flex w-full justify-between max-w-3xl pb-12">
        <div className="w-1/2">
          <About />
        </div>
      </div>
      {/*      <div className="flex w-full justify-center gap-8 text-2xl pb-12">
        <MdOutlineLightMode />
        <MdOutlineDarkMode />
        <MdDarkMode />
      </div>
   */}
    </main>
  );
}
