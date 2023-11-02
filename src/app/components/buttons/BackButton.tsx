"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
  href: string;
  text: string;
  icon?: ReactNode; // Optional icon prop
}

const BackButton: React.FC<ButtonProps> = ({ href, text, icon }) => {
  const navigate = () => {
    window.open(href, "_blank")?.focus();
  };

  return (
    <button
      onClick={navigate}
      className="flex flex-row items-center justify-start py-2 text-neutral-100 hover:text-accent  transition duration-300 text-sm text-center whitespace-nowrap">
      {icon && <span className="mr-1">{icon}</span>} {text}
    </button>
  );
};

export default BackButton;
