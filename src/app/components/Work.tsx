import Card from "./Card";

export default function Work() {
  return (
    <>
      <div
        id="about-section"
        className="z-20 relative h-full md:h-screen text-dark bg-white flex flex-col py-10 font-extralight items-center justify-center flex-wrap w-full ">
        <div className="flex flex-col w-full items-center py-12">
          <div className="w-11/12 max-w-5xl">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-clamp-lg items-start flex">Work</h2>
                Hey, I'm Justin. For most of my adult life, I've been behind the
                camera, shooting and producing big projects in film and TV. But
                I've always been a tech and design enthusiast at heart. So, I've
                traded the producer's chair for a developer's desk. Now, I'm all
                in on front-end development, bringing with me a knack for
                managing the big picture while sweating the small, pixel-perfect
                details.
              </div>
              <div className="flex flex-row justify-around">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
