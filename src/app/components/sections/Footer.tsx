import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="z-20 relative h-full bg-dark text-white font-space flex flex-col py-10 font-extralight items-center justify-center gap-6 flex-wrap mx-auto w-full">
        <Link href="/">
          <Image
            src="/jjcx_logo.svg"
            width={75}
            height={20}
            alt="jjcx logo"
            style={{ width: "75px", height: "20px" }}
          />
        </Link>

        <div className="flex flex-row items-center gap-4">
          <div>
            <Link
              aria-label="Visit my GitHub"
              className="hover:text-accent transition duration-300"
              href="https://www.github.com/jjcxdev">
              <FaGithub />
            </Link>
          </div>
          <div>
            <Link
              aria-label="Visit my GitHub"
              className="hover:text-accent transition duration-300"
              href="https://www.github.com/jjcxdev">
              <FaXTwitter />
            </Link>
          </div>

          <div>
            <Link
              aria-label="Read my Medium articles"
              className="hover:text-accent transition duration-300"
              href="https://medium.com/@jjcx">
              <FaMedium />
            </Link>
          </div>
        </div>

        <div className="text-xs">
          i did this <span className="font-sans">©</span> 2023
        </div>
      </footer>
    </>
  );
}
