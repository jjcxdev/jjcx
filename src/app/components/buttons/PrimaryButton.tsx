'use client';

interface ButtonProps {
  text: string;
  href: string;
}

export default function PrimaryButton({ text, href }: ButtonProps) {
  const navigate = () => {
    window.location.href = href;
  };

  return (
    <button
      onClick={navigate}
      className='text-xs px-[0.25em] text-yellow-400 hover:text-lightcoal lowercase rounded-md py-[0.12em] bg-[#2a2828] border border-[#3e3c3c]'
    >
      {text}
    </button>
  );
}
