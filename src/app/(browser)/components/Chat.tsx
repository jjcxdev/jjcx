interface ChatProps {
  label: string;
  text: string;
  href?: string;
}

export default function Chat({ label, text, href }: ChatProps) {
  const content = href ? (
    <a
      href={href}
      className="text-lightcoal hover:text-yellow-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  ) : (
    <div className="text-lightcoal">{text}</div>
  );
  return (
    <div className="w-full flex flex-col px-4 py-4">
      <div className="text-accent pr-1">{label}: </div>
      {content}
    </div>
  );
}
