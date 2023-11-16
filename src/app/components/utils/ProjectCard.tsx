interface CardProps {
  title: string;
  image: string;
  projectType: string;
  href: string;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  image,
  projectType,
  href,
}) => {
  const handleCardClicked = () => {
    window.location.href = href;
  };

  return (
    <a
      tabIndex={0}
      href={href}
      className="project-card rounded-lg group cursor-pointer overflow-hidden aspect-video w-full max-w-xs relative transition-all duration-300 ease-in-out z-0"
      onClick={handleCardClicked}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClicked();
        }
      }}
      aria-label={`View details for the project ${title} of type ${projectType}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute object-cover top-0 left-0 w-full h-full transition duration-700 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-110 pointer-events-none z-0"
      />
      <div className="w-full h-full flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition invisible group-hover:visible duration-700 ease-in-out z-10">
        <h4 className="font-bold">{title}</h4>
        <p className="text-accent">{projectType}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
