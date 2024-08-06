interface ResumeEducationProps {
  school: string;
  program: string;
  location: string;
  dates: string;
}

export default function ResumeEducation(props: ResumeEducationProps) {
  return (
    <div className="font-normal flex flex-col hover:bg-secondary hover:rounded-md px-4 py-1 text-sm leading-5">
      <div className="flex flex-col md:justify-between">
        <h1 className="font-bold">{props.school}</h1>
        <h2 className="">{props.program}</h2>

      </div>
      <div className="flex">
      <h3 className="">{props.location}</h3>&nbsp;|&nbsp;<h4>{props.dates}</h4></div>
    </div>
  );
}
