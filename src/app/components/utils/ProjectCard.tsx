interface CardProps {
  title: string;
  image: string;
  projectType: string;
  link: string;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  image,
  projectType,
  link,
}) => {
  return (
    <div className="rounded-lg overflow-hidden aspect-video w-full max-w-xs relative transition-all duration-300 ease-in-out group">
      <img
        src={image}
        alt={title}
        className="absolute object-cover top-0 left-0 w-full h-full transition duration-700 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-110 group-hover:pointer-events-none z-0"
      />

      <div
        aria-label={`View details for the project ${title} of type ${projectType}`}
        className="w-full h-full flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition invisible group-hover:visible duration-700 ease-in-out z-10">
        <h4 className="font-bold">{title}</h4>
        <p className="text-accent">{projectType}</p>
        <div className="py-2">
          <button
            className="w-fit font-space h-fit px-6 py-1 rounded-full border border-accent cursor-pointer"
            type="button"
            onClick={() => (window.location.href = link)}>
            see project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
