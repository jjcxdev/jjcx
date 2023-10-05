interface SkillProps {
  title: string;
  value: number;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ title, icon, value }) => {
  const radius = 58; // SVG circle radius
  const circumference = 2 * Math.PI * radius;
  const progress = circumference + (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative md:w-36 md:h-36 w-14 h-14 ">
        <svg className="absolute top-0 left-0 w-full h-full">
          <circle
            r={radius}
            cx="50%"
            cy="50%"
            className="text-dark stroke-current fill-none w-full h-full"
            strokeWidth="10"
          />
          <circle
            r={radius}
            cx="50%"
            cy="50%"
            className="text-accent stroke-current fill-none w-full h-full transform -rotate-90 origin-center"
            strokeWidth="10"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={progress}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:w-16 md:h-16 w-12 h-12 flex items-center justify-center">
          <img src={icon} alt={title} className="w-full h-full" />
        </div>
      </div>
      <div
        className="font-poppins text-clamp-xs
       text-center">
        {title}
      </div>
    </div>
  );
};

export default Skill;
