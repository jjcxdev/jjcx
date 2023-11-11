"use client";

import Image from "next/image";

import { SiGithub } from "react-icons/si";

import TertiaryButton from "../components/buttons/TertiaryButton";

export default function Sots() {
  return (
    <div className="flex w-full justify-center items-center">
      <main className="flex w-11/12 p-4 mt-10 max-w-3xl items-center justify-between flex-col h-full relative z-10 text-neutral-50/90">
        <div>
          <div className="w-full rounded-2xl">
            <Image
              src="/images/projects/scammers.webp"
              width={1920}
              height={1080}
              alt="Python Dialer program"
              className="w-auto h-auto"
            />
          </div>
          <div>
            <h1 className="text-clamp-lg my-4" aria-label="project name">
              Dialer
            </h1>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description"
            >
              This was made purely out of spite. Fed up with constantly
              receiving scam phone calls, I created a dialer that would return
              the annoying favour.
            </div>
            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"https://github.com/jjcxdev/dialer"}
                  icon={<SiGithub aria-label="Open GitHub Repository" />}
                  text={"GitHub"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
