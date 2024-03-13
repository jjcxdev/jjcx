interface ResumeTechSkillsProps {
  category: string;
  skill: string;
}

export default function ResumeTechSkills(props: ResumeTechSkillsProps) {
  return (
    <div className="font-normal flex flex-col text-sm">
      <div className="flex">
        <p className="font-semibold">{props.category}:</p>
        <p className="pl-1">{props.skill}</p>
      </div>
    </div>
  );
}
