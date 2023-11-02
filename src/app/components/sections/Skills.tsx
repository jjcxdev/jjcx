import SkillController from "@/app/components/utils/SkillController";

export default function Skills() {
  return (
    <>
      <div
        id="skills-section"
        className="z-20 relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-screen flex-wrap w-full ">
        <div className="flex flex-col w-full items-center">
          <div className="w-10/12 max-w-5xl">
            <div className="flex flex-col gap-20">
              <div>
                <h3 className="text-clamp-md font-bold uppercase items-start flex pb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full justify-around">
                    <SkillController
                      title="HTML5"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      value={90}
                    />
                    <SkillController
                      title="CSS"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      value={90}
                    />
                    <SkillController
                      title="Figma"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      value={75}
                    />
                    <SkillController
                      title="Illustrator"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                      value={90}
                    />
                  </div>
                  <div className="flex w-full justify-around">
                    <SkillController
                      title="Photoshop"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                      value={90}
                    />
                    <SkillController
                      title="Typescript"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      value={50}
                    />
                    <SkillController
                      title="React"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      value={50}
                    />
                    <SkillController
                      title="Next"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      value={50}
                      color="#FFFFFF"
                    />
                  </div>
                  <div className="flex w-full justify-around">
                    <SkillController
                      title="TailwindCSS"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      value={80}
                    />
                    <SkillController
                      title="Javascript"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      value={50}
                    />
                    <SkillController
                      title="Python"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      value={25}
                    />
                    <SkillController
                      title="Swift"
                      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                      value={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
