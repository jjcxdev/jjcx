import ProjectCard from "@/app/components/utils/ProjectCard";

export default function Work() {
  return (
    <>
      <div
        id="work-section"
        className="z-20 relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-full lg:h-screen flex-wrap w-full ">
        <div className="flex flex-col w-full items-center">
          <div className="w-10/12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-clamp-md font-bold uppercase items-start flex pb-4">
                  Work
                </h3>
                <p className="text-clamp-xs">
                  These are a few of the Web Apps I&apos;ve been working on.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-4 gap-4">
                <ProjectCard
                  title="Handmade Code"
                  image="./images/projects/placeholder.jpeg"
                  projectType="WebApp"
                  link="./sots"
                />
                <ProjectCard
                  title="The Rest is Bingo"
                  image="./images/projects/placeholder.jpeg"
                  projectType="WebApp"
                  link="./bingo"
                />
                <ProjectCard
                  title="PixlPal Website"
                  image="./images/projects/placeholder.jpeg"
                  projectType="WebApp"
                  link="./pixlpal_web"
                />
                <ProjectCard
                  title="Seminar on the Seas"
                  image="./images/projects/placeholder.jpeg"
                  projectType="WebApp"
                  link="./sots"
                />
              </div>
              <p className="text-clamp-xs">
                Theses are some other things that I've built.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-4 gap-4">
                <ProjectCard
                  title="PixlPal"
                  image="./images/projects/placeholder.jpeg"
                  projectType="macOS App"
                  link="./pixlpal"
                />
                <ProjectCard
                  title="Dialer"
                  image="./images/projects/placeholder.jpeg"
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
