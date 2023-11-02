import ProjectCard from "@/app/components/utils/ProjectCard";

export default function Work() {
  return (
    <>
      <div
        id="work-section"
        className="z-20 sm:h-screen relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-full flex-wrap w-full ">
        <div className="flex flex-col w-full items-center">
          <div className="w-10/12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-2xl sm:text-5xl md:text-7xl text-accent uppercase items-start flex pb-4">
                  Work
                </h3>
                <p className="text-xl sm:text-3xl md:text-4xl">
                  These are a few of the Web Apps I&apos;ve been working on.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-4 gap-4">
                <ProjectCard
                  title="Handmade Code"
                  image="./images/projects/cards/code.webp"
                  projectType="WebApp"
                  link="./sots"
                />
                <ProjectCard
                  title="PixlPal Website"
                  image="./images/projects/cards/pp_web.webp"
                  projectType="WebApp"
                  link="./pixlpal_web"
                />
                <ProjectCard
                  title="The Rest is Bingo"
                  image="./images/projects/cards/bingo.webp"
                  projectType="WebApp"
                  link="./bingo"
                />
                <ProjectCard
                  title="Seminar on the Seas"
                  image="./images/projects/cards/sots.webp"
                  projectType="WebApp"
                  link="./sots"
                />
              </div>
              <p className="text-xl sm:text-3xl md:text-4xl">
                These are some other things that I&apos;ve built.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-4 gap-4">
                <ProjectCard
                  title="PixlPal"
                  image="./images/projects/cards/pp.webp"
                  projectType="macOS App"
                  link="./pixlpal"
                />
                <ProjectCard
                  title="Dialer"
                  image="./images/projects/cards/dialer.webp"
                  projectType="python program"
                  link="./dialer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
