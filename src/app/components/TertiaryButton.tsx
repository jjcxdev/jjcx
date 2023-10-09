import React, { ReactNode } from "react";

interface ButtonProps {
  href: string;
  text: string;
  icon?: ReactNode; // Optional icon prop
}

const TertiaryButton: React.FC<ButtonProps> = ({ href, text, icon }) => {
  const navigate = () => {
    window.open(href, "_blank")?.focus();
  };

  return (
    <button
      onClick={navigate}
      className="border-2 flex flex-row items-center py-2 px-5 bg-dark hover:text-dark hover:bg-accent text-accent  hover:border-dark border-accent transition duration-300 text-sm text-center whitespace-nowrap">
      {icon && <span className="mr-2">{icon}</span>} {text}
    </button>
  );
};

export default TertiaryButton;
