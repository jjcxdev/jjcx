import BrowserWindow from "../components/BrowserWindow";

export default function BrowserLayout() {
  return (
    <div className="flex max-w-5xl h-full w-full flex-col overflow-hidden rounded-lg border border-secondary shadow-xl aspect-video">
      <BrowserWindow />
    </div>
  );
}
