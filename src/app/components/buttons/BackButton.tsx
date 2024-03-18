"use client";
import { IoReturnUpBackOutline } from "react-icons/io5";

interface ButtonProps {
  text: string;
  href: string;
}

export default function BackButton({ text, href }: ButtonProps) {
  const navigate = () => {
    window.location.href = href;
  };

  return (
    <button
      onClick={navigate}
      className="no-print text-xs w-fit items-center flex gap-2 px-[0.25em] text-lightcoal hover:text-yellow-400 lowercase rounded-md py-[0.12em] bg-[#2a2828] border border-[#3e3c3c]"
    >
      <div className="text-yellow-400 flex">
        <IoReturnUpBackOutline />
      </div>
      {text}
    </button>
  );
}
