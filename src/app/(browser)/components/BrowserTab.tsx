import Link from "next/link";

interface BrowserTabProps {
  tabName: string;
  href: string;
}

export default function BrowserTab({ href, tabName }: BrowserTabProps) {
  return (
    <div>
      <Link href={href}>
        <div className="tab focus:bg-secondary relative flex  items-center rounded-t-md py-2 px-3 text-xs font-medium sm:min-w-[10rem] z-10 text-lightcoal hover:bg-secondary">
          <div className="w-full max-w-24 truncate">{tabName}</div>
        </div>
      </Link>
    </div>
  );
}
