"use client";

import Image from "next/image";

import { SiGithub } from "react-icons/si";

import TertiaryButton from "../components/buttons/TertiaryButton";

export default function Sots() {
  return (
    <div className="flex min-h-screen w-full bg-neutral-900 items-center">
      <div className="mx-auto max-w-7xl 2xl:w-4/5 w-11/12 ">
        <main className="flex justify-between flex-col h-full relative z-10 text-neutral-50/90">
          <div className="overflow-hidden w-fit rounded-2xl">
            <Image
              src="/images/projects/scammers.webp"
              width="800"
              height="800"
              alt="PixlPal site"
              className=""
            />
          </div>
          <div>
            <h5 className="text-clamp-lg my-4" aria-label="project name">
              Dialer
            </h5>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description">
              This was made purely out of spite. Fed up with constantly
              receiving scam phone calls, I created a dialer that would return
              the annoying favour.
            </div>
            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"https://github.com/jjcxdev/dialer"}
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
