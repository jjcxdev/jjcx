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

export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="z-20 relative h-full  text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center flex-wrap w-full ">
        <div className="flex flex-col w-full items-center py-12">
          <div className="w-11/12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <div className="text-clamp-xs">
                <h2 className="text-clamp-lg font-bold uppercase items-start flex">
                  About
                </h2>
                Hey, I'm Justin. For most of my adult life, I've been behind the
                camera, shooting and producing big projects in film and TV. But
                I've always been a tech and design enthusiast at heart. So, I've
                traded the producer's chair for a developer's desk. Now, I'm all
                in on front-end development, bringing with me a knack for
                managing the big picture while sweating the small, pixel-perfect
                details.
              </div>
              <div className="w-full">
                <h3 className="text-clamp-lg font-bold uppercase items-start flex">
                  Technical Skills
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full justify-around">
                    <Skill
                      title="HTML5"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      value={90}
                    />
                    <Skill
                      title="CSS"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      value={90}
                    />
                    <Skill
                      title="Figma"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      value={75}
                    />
                    <Skill
                      title="Illustrator"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                      value={90}
                    />
                  </div>
                  <div className="flex w-full justify-around">
                    <Skill
                      title="Photoshop"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                      value={90}
                    />
                    <Skill
                      title="Typescript"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      value={50}
                    />
                    <Skill
                      title="React"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      value={50}
                    />
                    <Skill
                      title="Next"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      value={50}
                    />
                  </div>
                  <div className="flex w-full justify-around">
                    <Skill
                      title="TailwindCSS"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      value={80}
                    />
                    <Skill
                      title="Javascript"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      value={50}
                    />
                    <Skill
                      title="Python"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      value={25}
                    />
                    <Skill
                      title="Swift"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                      value={10}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-clamp-lg font-bold uppercase items-start flex">
                  Personal Skills
                </h3>
                <div>
                  <ul className="text-clamp-xs">
                    <li>Leadership</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Problem Solving</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center gap-8">
                {/* <Box
                  title="Like most developers, I have a number of languages and
                      tools that are almost second nature to me."
                  info={
                    <>
                      <div className="flex flex-row justify-around">
                        <Languages IconComponent={SiHtml5} text="HTML" />
                        <Languages IconComponent={SiCss3} text="CSS" />
                        <Languages IconComponent={SiFigma} text="Figma" />
                        <Languages
                          IconComponent={SiAdobeillustrator}
                          text="Illustrator"
                        />
                        <Languages
                          IconComponent={SiAdobephotoshop}
                          text="Photoshop"
                        />
                      </div>
                    </>
                  }
                />

                <Box
                  title="Then there are others that I don't know quite as well, but love
                nonetheless."
                  info={
                    <>
                      <div className="flex flex-row justify-around">
                        <Languages
                          IconComponent={SiTypescript}
                          text="Typescript"
                        />
                        <Languages IconComponent={SiReact} text="React" />
                        <Languages IconComponent={SiNextdotjs} text="Next.js" />
                        <Languages
                          IconComponent={SiTailwindcss}
                          text="Tailwind"
                        />
                      </div>
                    </>
                  }
                />

                <Box
                  title="Lastly, there are a few that I like to tinker with."
                  info={
                    <>
                      <div className="flex flex-row justify-around">
                        <Languages IconComponent={SiPython} text="Python" />
                        <Languages
                          IconComponent={SiJavascript}
                          text="Javascript"
                        />
                        <Languages IconComponent={SiSwift} text="Swift" />
                      </div>
                    </>
                  }
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
