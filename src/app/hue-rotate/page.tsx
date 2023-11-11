"use client";

import Image from "next/image";

import TertiaryButton from "../components/buttons/TertiaryButton";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function Handmade() {
  return (
    <div className="flex w-full justify-center items-center">
      <main className="flex w-11/12 p-4 mt-10 max-w-3xl items-center justify-between flex-col h-full relative z-10 text-neutral-50/90">
        <div>
          <div className="w-full rounded-2xl">
            <Image
              src="/images/projects/hue.webp"
              width={1920}
              height={1080}
              alt="Hue Rotate Website"
              layout-="responsive"
              className="w-auto h-auto"
            />
          </div>
          <div>
            <h1 className="text-clamp-lg my-4" aria-label="project name">
              Hue Rotate
            </h1>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description"
            >
              Hue Rotate is a React application that allows users to select an
              initial color and a desired color, then calculates the CSS
              hue-rotate filter value required to transition between these
              colors.
            </div>

            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="Website"
                  href={"http://hue-rotate.vercel.app"}
                  icon={<FaGlobe aria-label="Open Website" />}
                  text={"Website"}
                />
              </div>
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"http://github.com/jjcxdev/hue-rotate"}
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
