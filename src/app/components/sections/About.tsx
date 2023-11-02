export default function About() {
  return (
    <>
      <div
        id="about-section"
        role="region"
        aria-label="About Section"
        className="z-20 relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-full flex-wrap w-full ">
        <div className="flex flex-col w-full items-center">
          <div className="w-10/12 max-w-5xl">
            <div className="flex flex-col gap-20">
              <div className="">
                <h3 className="text-clamp-md font-bold uppercase items-start flex pb-4">
                  About
                </h3>
                <p className="">
                  Hey, I&apos;m Justin. For most of my adult life, I&apos;ve
                  been behind the camera, shooting and producing big projects in
                  film and TV. But I&apos;ve always been a tech and design
                  enthusiast at heart. So, I&apos;ve traded the producer&apos;s
                  chair for a developer&apos;s desk. Now, I&apos;m all in on
                  front-end development, bringing with me a knack for managing
                  the big picture while sweating the small, pixel-perfect
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
