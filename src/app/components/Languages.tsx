interface LanguageProps {
  IconComponent: React.ElementType;
  text: string;
}

const Languages: React.FC<LanguageProps> = ({ IconComponent, text }) => {
  return (
    <div
      className="flex flex-col justify-center p-4"
      role="listitem"
      aria-label={`${text} language`}>
      <div
        className="flex justify-center text-4xl"
        aria-hidden="true"
        role="img">
        <IconComponent aria-label="Dynamic Icon" />
      </div>
      <div className="flex justify-center" role="text">
        {text}
      </div>
    </div>
  );
};

export default Languages;
