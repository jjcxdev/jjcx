"use client";

import Image from "next/image";
import SecondaryButton from "../components/SecondaryButton";
import TertiaryButton from "../components/TertiaryButton";
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
              src="/sots.webp"
              width="800"
              height="800"
              alt="Seminar on the Seas site"
              className=""
            />
          </div>
          <div>
            <h5 className="text-clamp-lg my-4" aria-label="project name">
              Seminar on the Seas
            </h5>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description">
              Website for Seminar on the Seas, a training experience for the
              lighting industry.
            </div>
            <div className="border-neutral-50/90 mb-4 text-clamp-3xs border-b">
              website
            </div>
            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="Website"
                  href={"http://sots.vercel.app"}
                  icon={<FaGlobe />}
                  text={"Website"}
                />
              </div>
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"http://github.com/jjcxdev/sots"}
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
