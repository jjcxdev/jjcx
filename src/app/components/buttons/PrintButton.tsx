
"use client";
import { FaPrint } from "react-icons/fa";

interface ButtonProps {
  text: string;
  href: string;
}

export default function PrintButton({ text, href }: ButtonProps) {
  const openPDF = () => {
    window.open(href, '_blank');
  };

  return (
    <button
      onClick={openPDF}
      className="no-print text-xs w-fit items-center flex gap-2 px-[0.25em] text-lightcoal hover:text-yellow-400 lowercase rounded-full py-[0.12em] bg-[#2a2828] border border-[#3e3c3c]"
    >
      <div className="text-yellow-400 flex">
        <FaPrint />
      </div>
      {text}
    </button>
  );
}
