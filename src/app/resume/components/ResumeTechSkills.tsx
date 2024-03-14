interface ResumeTechSkillsProps {
  category: string;
  skill: string;
}

export default function ResumeTechSkills(props: ResumeTechSkillsProps) {
  return (
    <div className="font-normal flex flex-col text-sm">
      <div className="flex flex-col md:flex-row">
        <p className="font-semibold">{props.category}:</p>
        <p className="pl-1">{props.skill}</p>
      </div>
    </div>
  );
}
