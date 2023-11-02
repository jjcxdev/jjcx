"use client";

import Image from "next/image";

import TertiaryButton from "../components/buttons/TertiaryButton";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function Sots() {
  return (
    <div className="flex min-h-screen w-full bg-neutral-900 items-center">
      <div className="mx-auto max-w-7xl 2xl:w-4/5 w-11/12 ">
        <main className="flex justify-between flex-col h-full relative z-10 text-neutral-50/90">
          <div className="overflow-hidden w-fit rounded-2xl">
            <Image
              src="/images/projects/sots.webp"
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
