import SecondaryButton from "../buttons/SecondaryButton";

export default function Navigation() {
  return (
    <nav className="flex h-14 w-full justify-center border-b-[.5px] border-t-[.5px] border-secondary bg-coal">
      <ul className="font-share-tech-mono max-w-5xl flex w-full items-center justify-around text-xs uppercase">
        <li className="hover:text-yellow-400">
          <a href="../../portfolio/">Work</a>
        </li>
        <li className="hover:text-yellow-400">
          <a href="../../resume/">Resume</a>
        </li>
        <li className="hover:text-yellow-400">
          <a href="../../blog/">Blog</a>
        </li>
        <li className="hover:text-yellow-400">
          <a href="https://www.x.com/jjcxdev">X</a>
        </li>
        <li className="hover:text-yellow-400">
          <a href="https://www.github.com/jjcxdev">GitHub</a>
        </li>
        <li className="hover:text-yellow-400">
          <a href="https://www.linkedin.com/in/justinjchambers">Linkedin</a>
        </li>
      </ul>
    </nav>
  );
}
