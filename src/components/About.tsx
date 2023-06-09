import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { BsTag } from "react-icons/bs";
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

interface Icon {
  icon: JSX.Element;
  text: string;
}

const About: React.FC = () => {
  const comfortableTools: Icon[] = [
    { icon: <SiHtml5 />, text: "HTML" },
    { icon: <SiCss3 />, text: "CSS" },
    { icon: <SiFigma />, text: "Figma" },
    { icon: <SiAdobeillustrator />, text: "AI" },
    { icon: <SiAdobephotoshop />, text: "PS" },
  ];

  const otherTools: Icon[] = [
    { icon: <SiTypescript />, text: "TypeScript" },
    { icon: <SiReact />, text: "React" },
    { icon: <SiNextdotjs />, text: "Next.js" },
    { icon: <SiTailwindcss />, text: "Tailwind" },
  ];

  const tinkerTools: Icon[] = [
    { icon: <SiPython />, text: "Python" },
    { icon: <SiJavascript />, text: "Javascript" },
    { icon: <SiSwift />, text: "Swift" },
  ];

  return (
    <section>
      <div
        className="section flex flex-col justify-center text-center"
        id="about">
        <div className="">
          <div className="font-poppins bg-gradient-to-b from-white to-zinc-800 bg-clip-text pb-10 text-center text-7xl font-bold text-white/25 md:text-8xl lg:text-9xl">
            <span>ABOUT</span>
          </div>
          <div>
            <div>
              <div className="lg:py-20">
                <div className="font-poppins mx-4 mt-6 text-xl font-light text-slate-300 lg:m-0">
                  Like most developers there are tools I&apos;m really
                  comfortable with
                </div>
                <div className="mx-4 mt-8 grid grid-cols-5 gap-4 text-3xl text-gray-50 lg:mx-0 lg:text-8xl">
                  {comfortableTools.map(({ icon, text }) => (
                    <div className="flex flex-col items-center" key={text}>
                      <div className="flex cursor-pointer flex-col items-center justify-center rounded-full bg-transparent shadow-md">
                        {icon}
                      </div>
                      <span className="html font-poppins mt-4 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:py-20">
                <div className="font-poppins mx-4 mt-16 text-xl font-light text-white lg:m-0">
                  And some others that I have a decent understanding of
                </div>
                <div className="mx-4 mt-8 grid grid-cols-4 gap-4 text-3xl text-gray-300 lg:mx-0 lg:text-8xl">
                  {otherTools.map(({ icon, text }) => (
                    <div
                      className="flex flex-col items-center text-gray-300"
                      key={text}>
                      <div className="flex cursor-pointer flex-col items-center justify-center rounded-full bg-transparent shadow-md">
                        {icon}
                      </div>
                      <span className="html font-poppins mt-4 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:py-20">
                <div className="font-poppins mx-4 mt-16 text-xl font-light text-white lg:mx-0">
                  Then there are those that I like to tinker with
                </div>
                <div className="mx-4 mt-8 grid grid-cols-3 gap-4 text-3xl text-gray-500 lg:m-0 lg:py-6 lg:text-8xl">
                  {tinkerTools.map(({ icon, text }) => (
                    <div className="flex flex-col items-center" key={text}>
                      <div className="flex cursor-pointer flex-col items-center justify-center rounded-full bg-transparent shadow-md">
                        {icon}
                      </div>
                      <span className="html font-poppins mt-4 flex gap-2 rounded-md px-2 py-1 text-sm font-bold">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
