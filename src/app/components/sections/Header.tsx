import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-coal fixed flex w-full no-print flex-col">
      <div className="flex h-14 w-full items-center justify-center">
        <Link href="/">
          {" "}
          <Image
            src="./jjcx_logo_dark.svg"
            alt="jjcx logo"
            height={20}
            width={65}
          />{" "}
        </Link>
      </div>
      <div className="flex h-14 w-full items-center justify-center">
        <Navigation />
      </div>
    </header>
  );
}
