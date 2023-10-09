import Card from "./Card";

export default function Work() {
  return (
    <>
      <div
        id="work-section"
        className="z-20 relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-screen flex-wrap w-full ">
        <div className="flex flex-col w-full items-center py-12">
          <div className="w-11/12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-clamp-md font-bold uppercase items-start flex">
                  Work
                </h3>
                <p className="text-clamp-xs">
                  Take a look at some of the things I've been working on.
                </p>
              </div>
              <div className="flex flex-row justify-around">
                <Card
                  title="Seminar on the Seas"
                  image="./sots.webp"
                  projectType="WebApp"
                  link="./sots"
                />
                <Card
                  title="PixlPal"
                  image="./pixlpal.png"
                  projectType="macOS App"
                  link="./pixlpal"
                />
                <Card
                  title="PixlPal Website"
                  image="./pixlpal.webp"
                  projectType="WebApp"
                  link="./pixlpal_web"
                />
                <Card
                  title="JJCX"
                  image="./portfolio.webp"
                  projectType="WebApp"
                  link="./portfolio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
