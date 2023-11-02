export default function About() {
  return (
    <>
      <div
        id="about-section"
        role="region"
        aria-label="About Section"
        className="z-20 relative text-white bg-dark flex flex-col py-10 font-extralight items-center justify-center h-screen flex-wrap w-full ">
        <div className="flex flex-col w-full items-center">
          <div className="w-10/12 max-w-5xl">
            <div className="flex flex-col gap-20">
              <div className="">
                <h3 className="text-2xl sm:text-5xl md:text-7xl text-accent uppercase items-start flex pb-4">
                  About
                </h3>
                <p className="text-xl sm:text-3xl md:text-4xl">
                  Hey, in case you missed it I&apos;m Justin. For most of my
                  adult life, I&apos;ve been behind the camera, shooting and
                  producing projects of all shapes and sizes in film and TV. But
                  I&apos;ve always been a tech and design enthusiast at heart. A
                  couple of years ago I made the big-brain decision to change
                  careers. I&apos;ve traded the producer&apos;s chair for a
                  developer&apos;s desk. Now, I&apos;m all in on front-end
                  development, bringing with me a knack for managing the big
                  picture while sweating the small, pixel-perfect details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
