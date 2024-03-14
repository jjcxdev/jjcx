import Link from "next/link";

interface BrowserTabProps {
  tabName: string;
  href: string;
}

export default function BrowserTab({ href, tabName }: BrowserTabProps) {
  return (
    <div className="flex flex-row">
      <Link href={href}>
        <div className="tab focus:bg-secondary relative flex items-center rounded-t-md py-2 px-3 text-xs font-medium z-10 text-lightcoal hover:bg-secondary">
          <div className="md:max-w-28 max-w-8 truncate">{tabName}</div>
        </div>
      </Link>
    </div>
  );
}
