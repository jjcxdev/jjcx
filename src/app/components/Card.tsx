interface CardProps {
  title: string;
  image: string;
  projectType: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, image, projectType, link }) => {
  return (
    <div className="rounded-lg aspect-square w-full max-w-xs relative transition-all duration-300 ease-in-out group">
      <img
        src={image}
        alt={title}
        className="absolute object-contain top-0 left-0 w-full h-full transform scale-95 group-hover:scale-50 transition-transform duration-300 ease-in-out opacity-100 group-hover:opacity-75"
      />
      <a
        href={link}
        aria-label={`View details for the project ${title} of type ${projectType}`}
        className="card-container absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-4 transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 ease-in-out ">
        <h4 className="font-bold">{title}</h4>
        <p className="text-accent">{projectType}</p>
      </a>
    </div>
  );
};

export default Card;
