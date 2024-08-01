interface ResumeTechSkillsProps {
  category: string;
  skill: string;
}

export default function ResumeTechSkills(props: ResumeTechSkillsProps) {
  return (
    <div className="font-normal flex flex-col text-sm py-0.5">
      <div className="flex flex-wrap">
        <p className="mr-1 whitespace-normal">
        <span className="font-semibold whitespace-nowrap">{props.category}:</span>
        <span className="font-normal">{props.skill}</span>
        </p>

      </div>
    </div>
  );
}
