"use client";

import Image from "next/image";

import TertiaryButton from "../components/buttons/TertiaryButton";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function Handmade() {
  return (
    <div className="flex min-h-screen w-full bg-neutral-900 items-center">
      <div className="mx-auto max-w-7xl 2xl:w-4/5 w-11/12 ">
        <main className="flex justify-between flex-col h-full relative z-10 text-neutral-50/90">
          <div className="overflow-hidden w-fit rounded-2xl">
            <Image
              src="/images/projects/handmade.webp"
              width="800"
              height="800"
              alt="jjcx site"
              className=""
            />
          </div>
          <div>
            <h5 className="text-clamp-lg my-4" aria-label="project name">
              Handmade Code
            </h5>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description">
              This is the company that I started to do webdesign under.
            </div>

            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="Website"
                  href={"http://backintime.ca"}
                  icon={<FaGlobe />}
                  text={"Website"}
                />
              </div>
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"http://github.com/jjcxdev/handmadecode"}
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
