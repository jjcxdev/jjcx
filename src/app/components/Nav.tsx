import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { MenuToggle } from "./Toggle";
import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton";

export default function NavBar({ isAboutAtTop }: { isAboutAtTop: boolean }) {
  const [navbar, setNavbar] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setNavbar(!navbar);
  };

  const baseClass =
    " py-2 transition duration-600 border-b border-accent bg-neutral-900/50 backdrop-blur-md";
  const conditionalClass = isAboutAtTop ? "bg-accent/10" : "";
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

  const navOpacity = isAboutAtTop ? 1 : 0;

  return (
    <>
      <motion.header
        className={`w-full fixed top-0 z-40 ${navSectionClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: navOpacity, transition: { duration: 0.3 } }}
        ref={containerRef}>
        <nav className={finalClass}>
          <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
            <div className="flex flex-row items-center justify-between">
              <div className="flex w-1/3 items-center md:hidden">
                <MenuToggle toggle={toggleMenu} />
              </div>
              <div className="hidden md:flex gap-4 w-1/3">
                <Link
                  className="text-accent hover:text-white"
                  href="#about-section">
                  About
                </Link>
                <Link
                  className="text-accent hover:text-white"
                  href="#work-section">
                  Work
                </Link>
                <Link
                  className="text-accent hover:text-white"
                  href="./justinchambers_resume_2023.pdf">
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
              <Link href="#about-section">
                <div className="text-accent pl-6 py-1 transition duration-500 hover:text-dark hover:bg-accent">
                  About
                </div>
              </Link>
            </div>

            <div className="block">
              <Link href="#work-section">
                <div className="text-accent pl-6 py-1 transition duration-500 hover:text-dark hover:bg-accent">
                  Work
                </div>
              </Link>
            </div>

            <div className="block">
              <Link href="./justinchambers_resume_2023.pdf">
                <div className="text-accent pl-6 py-1 transition duration-500 hover:text-dark hover:bg-accent">
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
