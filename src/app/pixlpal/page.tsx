"use client";

import Image from "next/image";
import TertiaryButton from "../components/buttons/TertiaryButton";

import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function Sots() {
  return (
    <div className="flex w-full justify-center items-center">
      <main className="flex w-11/12 p-4 max-w-3xl mt-10 items-center justify-between flex-col h-full relative z-10 text-neutral-50/90">
        <div>
          <div className="w-full rounded-2xl">
            <Image
              src="/images/projects/pixlpal.png"
              width={1025}
              height={1025}
              alt="PixlPal App"
              className="w-auto h-auto"
            />
          </div>
          <div>
            <h1 className="text-clamp-lg my-4" aria-label="project name">
              PixlPal
            </h1>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description"
            >
              PixlPal is a macOS application designed to help users easily
              capture any color on their screen and automatically save it to
              their clipboard. The application offers support for various color
              formats, including HSL, RGB, and HEX. This makes it easy to use
              the captured color for various purposes such as web design,
              graphic design, and more.
            </div>

            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="Website"
                  href={"https://pixlpal.vercel.app"}
                  icon={<FaGlobe aria-label="Open Website" />}
                  text={"Website"}
                />
              </div>
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"https://github.com/jjcxdev/pixlpal"}
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
