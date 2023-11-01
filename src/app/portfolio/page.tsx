"use client";

import Image from "next/image";
import SecondaryButton from "../components/buttons/SecondaryButton";
import TertiaryButton from "../components/buttons/TertiaryButton";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IoCaretBack } from "react-icons/io5";

export default function Sots() {
  return (
    <div className="flex min-h-screen w-full bg-neutral-900 py-[14vh]">
      <div className="mx-auto max-w-7xl 2xl:w-4/5 w-11/12 ">
        <main className="flex justify-between flex-col h-full relative z-10 text-neutral-50/90">
          <div className="pb-8">
            <SecondaryButton href={"/"} text={"back"} icon={<IoCaretBack />} />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/jjcx.webp"
              width="800"
              height="800"
              alt="jjcx site"
              className=""
            />
          </div>
          <div>
            <h5 className="text-clamp-lg my-4" aria-label="project name">
              JJCX
            </h5>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description">
              This very portfolio website.
            </div>
            <div className="border-neutral-50/90 mb-4 text-clamp-3xs border-b">
              website
            </div>
            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="Website"
                  href={"http://jjcx.dev"}
                  icon={<FaGlobe />}
                  text={"Website"}
                />
              </div>
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"http://github.com/jjcxdev/underconstruction"}
                  icon={<SiGithub />}
                  text={"GitHub"}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
