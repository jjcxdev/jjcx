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
      className=" border-2 py-1 px-3 hover:bg-dark text-dark border-accent hover:text-accent hover:border-accent bg-accent transition duration-300 text-sm text-center whitespace-nowrap">
      {text}
    </button>
  );
};

export default PrimaryButton;
