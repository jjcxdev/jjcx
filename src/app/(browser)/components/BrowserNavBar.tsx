import { IoReload } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";

interface BrowserNavBarProps {
  activeUrl: string;
  activeGithubUrl: string;
}
export default function BrowserNavBar({
  activeUrl,
  activeGithubUrl,
}: BrowserNavBarProps) {
  return (
    <div className="flex items-center space-x-1.5 border-b border-secondary bg-[#2c2c2c] py-1 px-1.5 sm:space-x-2.5 sm:py-1.5 sm:px-2">
      <div className="text-accent">
        <IoArrowBack />
      </div>
      <div className="ml-2.5 text-accent">
        <IoArrowForward />
      </div>
      <div className="text-accent">
        <IoReload />
      </div>

      <div className="flex flex-1 items-center rounded bg-coal py-1 px-2 text-xs text-lightcoal sm:text-sm">
        <div className="mr-1 flex items-center">
          <IoMdLock />
        </div>
        <Link
          className="hover:text-yellow-400"
          href={activeUrl}
          target="_blank"
        >
          <span className="truncate">{activeUrl}</span>
        </Link>
      </div>
      <Link
        className="px-2 hover:text-yellow-400 text-accent"
        href={activeGithubUrl}
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        className="px-2 hover:text-yellow-400 text-accent"
        href={activeUrl}
        target="_blank"
      >
        <FaGlobe />
      </Link>
      <div className="text-accent">
        <CiMenuKebab />
      </div>
    </div>
  );
}
