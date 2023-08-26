"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true); // sets isClient to true when the component mounts on the client-side
  }, []);

  if (!isClient) {
    return null;
  }

  const closeNavbar = () => setIsOpen(false);

  return (
    <div className="fixed left-0 top-0 z-50 grid grid-cols-3 items-center w-full px-6 py-4 bg-opacity-50 backdrop-blur">
      {/* Menu Section */}
      <div className="flex relative justify-start">
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex items-center px-3 py-2 rounded hover:text-accent transition duration-500">
            {isOpen ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>
        <div
          className={`absolute top-full left-0  w-full flex flex-col ${
            isOpen ? "block" : "hidden" // Handles the toggle state for small screens
          } md:flex`}
          role="menu">
          <div className="text-base uppercase flex flex-col md:flex-row md:items-center ">
            <div
              className="border rounded-lg border-accent my-1 pl-2"
              onClick={closeNavbar}
              role="none">
              {" "}
              {/* role="none" to remove menuitem semantics */}
              <Link
                href="/about"
                className="block py-2 md:px-4 "
                role="menuitem">
                About
              </Link>
            </div>
            <div
              className="border rounded-lg border-accent my-1 pl-2"
              onClick={closeNavbar}
              role="none">
              <Link
                href="/work"
                className="block py-2 md:px-4 "
                role="menuitem">
                Work
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* Logo Section - Centered within its grid column */}
      <div className="flex justify-center">
        <Link href="/">
          <Image src="/jjcx_logo.svg" width={75} height={75} alt="jjcx logo" />
        </Link>
      </div>

      {/* Contact Section */}
      <div className="flex justify-end">
        <Link href="mailto: j@jjcx.dev" className="">
          <button
            type="button"
            className=" rounded-lg border-2 border-accent hover:text-black hover:border-black hover:bg-accent transition duration-500 text-sm px-3 py-1.5 text-center whitespace-nowrap">
            contact
          </button>
        </Link>
      </div>
    </div>

    // <div className="flex py-2 px-6 items-center justify-between flex-wrap md:flex-nowrap">
    //   <div className="flex flex-grow">
    //     <div className="md:hidden">
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         aria-label={isOpen ? "Close menu" : "Open menu"}
    //         className="flex items-center px-3 py-2 rounded hover:text-black-400">
    //         {isOpen ? <AiOutlineClose /> : <FiMenu />}
    //       </button>
    //     </div>
    //     <div
    //       className={`w-full flex flex-col ${
    //         isOpen ? "block" : "hidden" // Handles the toggle state for small screens
    //       } md:flex`}
    //       role="menu">
    //       <div className="text-base uppercase font-extrabold flex flex-col md:flex-row md:items-center ">
    //         <div onClick={closeNavbar} role="none">
    //           {" "}
    //           {/* role="none" to remove menuitem semantics */}
    //           <Link href="/" className="block py-2 md:px-4 " role="menuitem">
    //             About
    //           </Link>
    //         </div>
    //         <div onClick={closeNavbar} role="none">
    //           <Link
    //             href="/course"
    //             className="block py-2 md:px-4 "
    //             role="menuitem">
    //             Work
    //           </Link>
    //         </div>
    //       </div>
    //       <div></div>
    //     </div>
    //   </div>

    //   <div className="flex flex-grow">
    //     <div className="flex items-center justify-center flex-shrink-0 w-auto h-auto">
    //       <Link href="/">
    //         <Image
    //           src="/jjcx_logo.svg"
    //           width={75}
    //           height={75}
    //           alt="jjcx logo"
    //         />
    //       </Link>
    //     </div>
    //   </div>

    //   <div className="flex flex-grow">
    //     <button
    //       type="button"
    //       className="font-bold rounded-lg text-sm px-4 py-2 text-center uppercase whitespace-nowrap">
    //       Contact
    //     </button>
    //   </div>
    // </div>
  );
}
export default Nav;
