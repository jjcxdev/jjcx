import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string,
    newTab: boolean = false
  ) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (newTab) {
        window.open(href, "_blank", "noopener noreferrer");
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <footer className="z-20 relative h-full bg-dark text-white font-space flex flex-col py-10 font-extralight items-center justify-center gap-6 flex-wrap mx-auto w-full">
        <Link onKeyDown={(e) => handleKeyDown(e, "/")} tabIndex={0} href="/">
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
              onKeyDown={(e) =>
                handleKeyDown(e, "https://www.github.com/jjcxdev", true)
              }
              tabIndex={0}
              target="_blank"
              rel="noopener referrer"
              passHref
              aria-label="Visit my GitHub"
              className="hover:text-accent transition duration-300"
              href="https://www.github.com/jjcxdev">
              <FaGithub />
            </Link>
          </div>
          <div>
            <Link
              onKeyDown={(e) =>
                handleKeyDown(e, "https://twitter.com/jjcxdev", true)
              }
              tabIndex={0}
              target="_blank"
              rel="noopener referrer"
              passHref
              aria-label="Visit my GitHub"
              className="hover:text-accent transition duration-300"
              href="https://twitter.com/jjcxdev">
              <FaXTwitter />
            </Link>
          </div>

          <div>
            <Link
              onKeyDown={(e) =>
                handleKeyDown(e, "https://medium.com/@jjcx", true)
              }
              tabIndex={0}
              target="_blank"
              rel="noopener referrer"
              passHref
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
