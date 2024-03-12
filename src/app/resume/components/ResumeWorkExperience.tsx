interface ResumeWorkExperienceProps {
  employer: string;
  position: string;
  location: string;
  dates: string;
}

export default function ResumeWorkExperience(props: ResumeWorkExperienceProps) {
  return (
    <div className="font-share-tech-mono hover:bg-secondary hover:rounded-md flex w-full flex-col p-4 text-sm leading-5">
      <div className="flex justify-between">
        <h1 className="font-bold">{props.employer}</h1>
        <h4 className="font-bold">{props.dates}</h4>
      </div>
      <h2 className="">{props.position}</h2>
      <h3 className="">{props.location}</h3>
    </div>
  );
}
