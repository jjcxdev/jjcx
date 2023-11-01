import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsMedium } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="z-20 relative h-screen bg-dark text-white flex flex-col py-10 font-extralight items-center justify-center flex-wrap mx-auto w-full">
        <div className="flex items-center py-12">
          <Link href="/">
            <Image
              src="/jjcx_logo_dk.svg"
              width={75}
              height={75}
              alt="jjcx logo"
              style={{ width: "75px", height: "75px" }}
            />
          </Link>
        </div>
        <div className="h-px w-3/4 border-0 bg-gradient-to-r from-transparent via-cyan-800 to-transparent"></div>

        <div className="flex items-center gap-6 py-12">
          <Link className="hover:text-accent transition duration-300" href="#">
            home
          </Link>
          <Link
            className="hover:text-accent transition duration-300"
            href="#about-section">
            about
          </Link>
          <Link
            className="hover:text-accent transition duration-300"
            href="#work-section">
            work
          </Link>
          <Link
            className="hover:text-accent transition duration-300"
            href="./justinchambers_resume_2023.pdf">
            resume
          </Link>
        </div>
        <div className="h-px w-3/4 border-0 bg-gradient-to-r from-transparent via-cyan-800 to-transparent "></div>
        <div className="flex flex-col items-center py-12 text-2xl">
          <div className="flex items-center py-6 text-2xl gap-2">
            <div>
              <Link
                aria-label="Visit my GitHub"
                className="hover:text-accent transition duration-300"
                href="https://www.github.com/jjcxdev">
                <BsGithub />
              </Link>
            </div>
            <div>
              <Link
                aria-label="Read my Medium articles"
                className="hover:text-accent transition duration-300"
                href="https://medium.com/@jjcx">
                <BsMedium />
              </Link>
            </div>
          </div>
          <div className="text-sm"> © jjcx 2023</div>
        </div>
      </footer>
    </>
  );
}
