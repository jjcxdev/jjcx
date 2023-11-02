import SkillController from "@/app/components/utils/SkillController";

export default function Skills() {
  return (
    <>
      <div
        id="skills-section"
        className="z-20 sm:h-screen relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-full flex-wrap w-full ">
        <div className="flex flex-col w-full items-center">
          <div className="w-10/12 max-w-5xl">
            <div className="flex flex-col gap-20">
              <div>
                <h3 className="text-2xl sm:text-5xl md:text-7xl text-accent uppercase items-start flex pb-4">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-4">
                  <SkillController
                    title="HTML5"
                    icon="images/languages/html5-original.svg"
                    value={90}
                  />
                  <SkillController
                    title="CSS"
                    icon="images/languages/css3-original.svg"
                    value={90}
                  />
                  <SkillController
                    title="TailwindCSS"
                    icon="images/languages/tailwindcss-plain.svg"
                    value={80}
                  />
                  <SkillController
                    title="Figma"
                    icon="images/languages/figma-original.svg"
                    value={75}
                  />
                  <SkillController
                    title="Illustrator"
                    icon="images/languages/illustrator-plain.svg"
                    value={90}
                  />

                  <SkillController
                    title="Photoshop"
                    icon="images/languages/photoshop-plain.svg"
                    value={90}
                  />
                  <SkillController
                    title="Typescript"
                    icon="images/languages/typescript-original.svg"
                    value={50}
                  />
                  <SkillController
                    title="Javascript"
                    icon="images/languages/javascript-original.svg"
                    value={50}
                  />
                  <SkillController
                    title="Python"
                    icon="images/languages/python-original.svg"
                    value={25}
                  />
                  <SkillController
                    title="Swift"
                    icon="images/languages/swift-original.svg"
                    value={10}
                  />
                  <SkillController
                    title="React"
                    icon="images/languages/react-original.svg"
                    value={50}
                  />
                  <SkillController
                    title="Next"
                    icon="images/languages/nextjs-original.svg"
                    value={50}
                    color="#FFFFFF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
