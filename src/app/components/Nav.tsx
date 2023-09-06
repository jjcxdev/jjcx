import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { MenuToggle } from "./Toggle";
import { motion, useCycle } from "framer-motion";
import PrimaryButton from "./button";

const sidebar = {
  open: { display: "block" },
  closed: { display: "none" },
};

export default function NavBar({ isAboutAtTop }: { isAboutAtTop: boolean }) {
  const [navbar, setNavbar] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setNavbar(!navbar);
  };

  const baseClass = " py-2 transition duration-600  backdrop-blur-md";
  const conditionalClass = isAboutAtTop ? "bg-cyan-600/10" : "";
  const finalClass = `${baseClass} ${conditionalClass}`;

  const menuParentClass = `bg-neutral-900/90 transition duration-300 backdrop-blur-md md:hidden ${
    navbar ? "block" : "hidden"
  } ${isAboutAtTop ? "" : ""}`;

  const navSectionClass = navbar
    ? "backdrop-blur-md bg-neutral-900/90 transition duration-500"
    : "";

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <>
      <motion.header
        className={`w-full fixed top-0 z-40 ${navSectionClass}`}
        initial={false}
        animate={navbar ? "open" : "closed"}
        ref={containerRef}>
        <nav className={finalClass}>
          <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
            <div className="flex flex-row items-center justify-between">
              <div className="flex w-1/3 items-center md:hidden">
                <MenuToggle toggle={toggleMenu} />
              </div>
              <div className="hidden md:flex gap-4 w-1/3">
                <Link className="text-cyan-500 hover:text-white" href="/about">
                  About
                </Link>
                <Link className="text-cyan-500 hover:text-white" href="/work">
                  Work
                </Link>
                <Link className="text-cyan-500 hover:text-white" href="/Resume">
                  Resume
                </Link>
              </div>

              <div className="flex items-center w-1/3 justify-center">
                <Image
                  src="/jjcx_logo.svg"
                  width={75}
                  height={75}
                  alt="jjcx logo"
                  style={{ width: "auto", height: "20px" }}
                  priority={true}
                />
              </div>

              <div className="flex items-center justify-end w-1/3">
                <PrimaryButton href="mailto:j@jjcx.dev" text="contact" />
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
      <motion.div
        className={
          navbar
            ? "fixed inset-0 z-30 backdrop-blur-md pt-12"
            : "fixed inset-0 z-30 backdrop-blur-md pt-12 opacity-0"
        }
        initial="closed"
        animate={navbar ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.5 }}
        onClick={() => toggleMenu()}>
        <div className={menuParentClass}>
          <div className="flex flex-col uppercase py-2 justify-center">
            <div className="block">
              <Link href="/about">
                <div className="text-cyan-500 pl-6 py-1 transition duration-500 hover:text-dark hover:bg-cyan-500">
                  About
                </div>
              </Link>
            </div>

            <div className="block">
              <Link href="/work">
                <div className="text-cyan-500 pl-6 py-1 transition duration-500 hover:text-dark hover:bg-cyan-500">
                  Work
                </div>
              </Link>
            </div>

            <div className="block">
              <Link href="/resume">
                <div className="text-cyan-500 pl-6 py-1 transition duration-500 hover:text-dark hover:bg-cyan-500">
                  Resume
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
