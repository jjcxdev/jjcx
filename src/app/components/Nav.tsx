import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { MenuToggle } from "./Toggle";
import { motion, useCycle } from "framer-motion";

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
    ? "backdrop-blur-md bg-neutral-900/90 transition duration-300"
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
        ref={containerRef}
      >
        <nav className={finalClass}>
          <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
            <div className="grid grid-cols-3">
              <div className="flex items-center md:hidden">
                <MenuToggle toggle={toggleMenu} />
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/jjcx_logo.svg"
                  width={75}
                  height={75}
                  alt="jjcx logo"
                  style={{ width: "auto", height: "20px" }}
                  priority={true}
                />
              </div>

              <div className="flex items-center justify-end">
                <Link href="mailto:j@jjcx.dev">
                  <button
                    type="button"
                    className=" border-2 py-1 px-3 hover:bg-dark text-dark border-cyan-500 hover:text-cyan-500 hover:border-cyan-500 bg-cyan-500 transition duration-300 text-sm text-center whitespace-nowrap"
                  >
                    contact
                  </button>
                </Link>
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
        onClick={() => toggleMenu()}
      >
        <div className={menuParentClass}>
          <div className="flex flex-col uppercase py-2 justify-cente">
            <div className="hover:text-cyan-500 pl-6 py-1 transition duration-500  hover:bg-cyan-500">
              <Link href="/about">About</Link>
            </div>
            <div className="hover:text-cyan-500 pl-6 py-1 transition duration-500  hover:bg-cyan-500">
              <Link href="/work"> Work</Link>
            </div>
            <div className="hover:text-cyan-500 pl-6 py-1 transition duration-500  hover:bg-cyan-500">
              <Link href="/resume"> Resume</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
