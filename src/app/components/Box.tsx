interface BoxProps {
  title: string;
  info: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, info }) => {
  return (
    <div className="rounded-lg w-fit  shadow-md">
      <div className="bg-white text-dark rounded-t-xl p-4">{title}</div>
      <div className="rounded-b-xl">{info}</div>
    </div>
  );
};

export default Box;
