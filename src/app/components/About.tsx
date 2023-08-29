import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsMedium } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="z-20 relative h-screen text-black bg-white flex flex-col py-10 font-extralight items-center justify-center flex-wrap w-full max-w-7xl 2xl:w-4/5"
      >
        <div className="flex flex-col w-full justify-start items-center py-12">
          <div className="flex flex-col items-start w-11/12">
            <h1>About</h1>
            <Link href="/">
              {/* <Image
                src="/jjcx_logo.svg"
                width={75}
                height={75}
                alt="jjcx logo"
                style={{ width: "75px", height: "75px" }}
              /> */}
            </Link>
          </div>
          <div className="w-11/12">
            Hey, I'm Justin. For most of my adult life, I've been behind the
            camera, shooting and producing big projects in film and TV. But I've
            always been a tech and design enthusiast at heart. So, I've traded
            the producer's chair for a developer's desk. Now, I'm all in on
            front-end development, bringing with me a knack for managing the big
            picture while sweating the small, pixel-perfect details.
          </div>
        </div>
      </div>
    </>
  );
}
