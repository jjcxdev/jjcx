import Card from "./Card";

export default function Work() {
  return (
    <>
      <div
        id="work-section"
        className="z-20 relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-full flex-wrap w-full ">
        <div className="flex flex-col w-full items-center">
          <div className="w-10/12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-clamp-md font-bold uppercase items-start flex pb-4">
                  Work
                </h3>
                <p className="text-clamp-xs">
                  Take a look at some of the things I&apos;ve been working on.
                </p>
              </div>
              <div className="flex items-center flex-col lg:flex-row justify-around gap-4">
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
                  image="./jjcx.webp"
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
