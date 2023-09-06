// ButtonComponent.tsx

interface ButtonProps {
  href: string;
  text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ href, text }) => {
  const navigate = () => {
    window.location.href = href;
  };

  return (
    <button
      onClick={navigate}
      className=" border-2 py-1 px-3 hover:bg-dark text-dark border-cyan-500 hover:text-cyan-500 hover:border-cyan-500 bg-cyan-500 transition duration-300 text-sm text-center whitespace-nowrap">
      {text}
    </button>
  );
};

export default PrimaryButton;
