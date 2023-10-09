import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsMedium } from "react-icons/bs";
import Languages from "./Languages";
import Box from "./Box";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiReact,
  SiPython,
  SiTypescript,
  SiSwift,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import Skill from "./Skill";
import Card from "./Card";

export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="z-20 relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-screen flex-wrap w-full ">
        <div className="flex flex-col w-full items-center py-12">
          <div className="w-11/12 max-w-5xl">
            <div className="flex flex-col gap-20">
              <div className="text-clamp-xs">
                <h3 className="text-clamp-md font-bold uppercase items-start flex">
                  About
                </h3>
                <p className="text-clamp-xs">
                  Hey, I'm Justin. For most of my adult life, I've been behind
                  the camera, shooting and producing big projects in film and
                  TV. But I've always been a tech and design enthusiast at
                  heart. So, I've traded the producer's chair for a developer's
                  desk. Now, I'm all in on front-end development, bringing with
                  me a knack for managing the big picture while sweating the
                  small, pixel-perfect details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
