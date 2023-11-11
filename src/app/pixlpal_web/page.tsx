"use client";

import Image from "next/image";

import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

import TertiaryButton from "../components/buttons/TertiaryButton";

export default function Sots() {
  return (
    <div className="flex w-full justify-center items-center">
      <main className="flex w-11/12 max-w-3xl  p-4 mt-10 justify-between items-center flex-col h-full relative z-10 text-neutral-50/90">
        <div>
          <div className="w-full rounded-2xl">
            <Image
              src="/images/projects/pixlpal.webp"
              width={1920}
              height={1080}
              alt="PixlPal site"
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
              Website for PixlPal, a macOS app I created for capturing screen
              color data.
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
                  href={"https://github.com/jjcxdev/pixlpal_web"}
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
