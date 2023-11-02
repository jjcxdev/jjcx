"use client";

import Image from "next/image";
import TertiaryButton from "../components/buttons/TertiaryButton";
import BackButton from "../components/buttons/BackButton";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IoCaretBack } from "react-icons/io5";

export default function Sots() {
  return (
    <div className="flex min-h-screen w-full bg-neutral-900 items-center">
      <div className="mx-auto max-w-7xl 2xl:w-4/5 w-11/12 ">
        <main className="flex justify-between flex-col h-full relative z-10 text-neutral-50/90">
          <div className="pb-8">
            <BackButton href={"/"} text={"back"} icon={<IoCaretBack />} />
          </div>
          <div className="overflow-hidden w-fit rounded-2xl">
            <Image
              src="/images/projects/pixlpal.png"
              width="500"
              height="500"
              alt="PixlPal App"
              className=""
            />
          </div>
          <div>
            <h5 className="text-clamp-lg my-4" aria-label="project name">
              PixlPal
            </h5>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description">
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
                  href={
                    "https://apps.apple.com/ca/app/pixlpal/id6447212748?mt=12"
                  }
                  icon={<FaGlobe />}
                  text={"Website"}
                />
              </div>
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"http://github.com/jjcxdev/pixlpal"}
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
