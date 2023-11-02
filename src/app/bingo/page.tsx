"use client";

import Image from "next/image";
import BackButton from "../components/buttons/SecondaryButton";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IoCaretBack } from "react-icons/io5";
import TertiaryButton from "../components/buttons/TertiaryButton";

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
              src="/images/projects/bingo.webp"
              width="800"
              height="800"
              alt="PixlPal site"
              className=""
            />
          </div>
          <div>
            <h5 className="text-clamp-lg my-4" aria-label="project name">
              The Rest is Bingo
            </h5>
            <div
              className="text-clamp-2xs font-extralight mb-8"
              aria-label="description">
              I decided to make a bingo game to play along with a podcast that I
              like to listen to called "The Rest is Football".
            </div>
            <div className="flex flex-row gap-8">
              <div className="">
                <TertiaryButton
                  aria-label="Website"
                  href={"http://therestisbingo.vercel.app"}
                  icon={<FaGlobe />}
                  text={"Website"}
                />
              </div>
              <div className="">
                <TertiaryButton
                  aria-label="GitHub"
                  href={"http://github.com/jjcxdev/therestisbingo"}
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
