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

export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="z-20 relative h-full md:h-screen text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center flex-wrap w-full ">
        <div className="flex flex-col w-full items-center py-12">
          <h1>About</h1>

          <div className="w-11/12 max-w-5xl gap-4">
            <div className="flex flex-col gap-4">
              <div>
                Hey, I'm Justin. For most of my adult life, I've been behind the
                camera, shooting and producing big projects in film and TV. But
                I've always been a tech and design enthusiast at heart. So, I've
                traded the producer's chair for a developer's desk. Now, I'm all
                in on front-end development, bringing with me a knack for
                managing the big picture while sweating the small, pixel-perfect
                details.
              </div>
              <div className="flex flex-col items-center gap-8">
                <Box
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
