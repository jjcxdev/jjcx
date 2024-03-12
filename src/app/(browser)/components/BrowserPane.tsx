import Image from "next/image";

interface BrowserPaneProps {
  activeImage: string;
}

export default function BrowserPane({ activeImage }: BrowserPaneProps) {
  return (
    <div className="w-full aspect-video relative">
      <Image
        src={activeImage}
        alt="Displayed Content"
        width={1440}
        height={697}
      />
    </div>
  );
}
