"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuToggle from "@/app/components/utils/MenuToggle";
import { MdEmail } from "react-icons/md";
import "@fontsource/monomaniac-one";
import "@fontsource/space-mono";
import { FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";

export default function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleLinkClicked = () => {
    setIsMenuVisible(false);
  };

  return (
    <>
      <nav className="w-full text-accent bg-transparent backdrop-blur-sm fixed h-8 z-50">
        <div className="2xl:w-4/5  max-w-7xl mx-auto w-[95vw] py-1">
          <div className="flex flex-row items-center h-full justify-between">
            <div className="hidden font-space text-xs lg:flex gap-4 w-1/3">
              <Link
                onKeyDown={(e) => handleKeyDown(e, "#about-section")}
                href="#about-section"
                tabIndex={0}>
                about
              </Link>
              <Link
                onKeyDown={(e) => handleKeyDown(e, "#work-section")}
                href="#work-section"
                tabIndex={0}>
                work
              </Link>
              <Link
                onKeyDown={(e) =>
                  handleKeyDown(e, "./justinchambers_resume_2023.pdf", true)
                }
                href="./justinchambers_resume_2023.pdf"
                tabIndex={0}>
                resume
              </Link>
            </div>
            <div className="flex z-50 items-center w-1/3 lg:justify-center justify-start">
              <Link href="/">
                <Image
                  src="/jjcx_logo.svg"
                  width={75}
                  height={20}
                  alt="jjcx logo"
                  priority={true}
                  style={{ width: "75px", height: "20px" }}
                />
              </Link>
            </div>
            <div className="flex items-center w-1/3 justify-end">
              <div className="hidden lg:flex flex-row gap-6">
                <Link
                  target="_blank"
                  rel="noopener referrer"
                  onKeyDown={(e) =>
                    handleKeyDown(e, "https://www.github.com/jjcxdev", true)
                  }
                  href="https://www.github.com/jjcxdev"
                  passHref
                  className="flex flex-row items-center hover:text-white gap-2">
                  <FaGithub />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener referrer"
                  onKeyDown={(e) =>
                    handleKeyDown(e, "https://twitter.com/jjcxdev", true)
                  }
                  href="https://twitter.com/jjcxdev"
                  passHref
                  className="flex flex-row items-center hover:text-white gap-2">
                  <FaXTwitter />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener referrer"
                  onKeyDown={(e) =>
                    handleKeyDown(e, "https://medium.com/@jjcx", true)
                  }
                  href="https://medium.com/@jjcx"
                  passHref
                  className="flex flex-row items-center hover:text-white gap-2">
                  <FaMedium />
                </Link>
              </div>
              <div className="lg:hidden">
                <MenuToggle
                  isOpen={isMenuVisible}
                  onClick={toggleMenuVisibility}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`h-[100vh] bg-neutral-900 flex flex-col justify-around backdrop-blur-sm transform z-10 transition-all ease-in-out duration-300 ${
            isMenuVisible
              ? "opacity-100 translate-y-0 visible pointer-events-auto"
              : "opacity-0 -translate-y-10 invisible pointer-events-none"
          } flex flex-col font-space text-accent items-center justify-center`}>
          <div>
            <div
              onClick={handleLinkClicked}
              className={`${
                isMenuVisible ? "transition-delay-100" : "transition-delay-400"
              } py-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all justify-center flex w-full h-fit ease-in-out duration-300 ${
                isMenuVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}>
              <Link href="#about-section">about</Link>
            </div>
            <div
              onClick={handleLinkClicked}
              className={`${
                isMenuVisible ? "transition-delay-200" : "transition-delay-300"
              } py-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all justify-center flex w-full h-fit ease-in-out duration-300 ${
                isMenuVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}>
              <Link href="#work-section">work</Link>
            </div>
            <div
              onClick={handleLinkClicked}
              className={`${
                isMenuVisible ? "transition-delay-300" : "transition-delay-200"
              } py-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all justify-center flex w-full h-fit ease-in-out duration-300 ${
                isMenuVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}>
              <Link href="./justinchambers_resume_2023.pdf">resume</Link>
            </div>
          </div>
          <div
            className={`${
              isMenuVisible ? "transition-delay-400" : "transition-delay-100"
            } py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all justify-center flex w-full h-fit ease-in-out duration-300 ${
              isMenuVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}>
            <div className="flex flex-col items-center gap-6">
              <Link
                href="mailto:j@jjcx.dev"
                className="flex flex-row items-center hover:text-white gap-2">
                <MdEmail />{" "}
                <span className="text-white hover:text-accent">j@jjcx.dev</span>
              </Link>
              <div className="flex flex-row gap-6">
                <Link
                  target="_blank"
                  rel="noopener referrer"
                  passHref
                  tabIndex={0}
                  href="https://www.github.com/jjcxdev"
                  className="flex flex-row items-center hover:text-white gap-2">
                  <FaGithub />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener referrer"
                  passHref
                  tabIndex={0}
                  href="https://twitter.com/jjcxdev"
                  className="flex flex-row items-center hover:text-white gap-2">
                  <FaXTwitter />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener referrer"
                  passHref
                  tabIndex={0}
                  href="https://medium.com/@jjcx"
                  className="flex flex-row items-center hover:text-white gap-2">
                  <FaMedium />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
