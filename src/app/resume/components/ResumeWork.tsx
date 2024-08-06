interface ResumeWorkProps {
  employer: string;
  jobTitle: string;
  location: string;
  dates: string;
}

export default function ResumeWork(props: ResumeWorkProps) {
  return (
    <div className="font-normal hover:bg-secondary hover:rounded-md flex flex-col px-4 text-sm leading-5">
      <div className="flex flex-col md:justify-between">
        <h1 className="font-bold">{props.employer}</h1>
        <h2 className="font-bold">{props.jobTitle}</h2>
      </div>
<div className="flex">
      <h3 className="font-bold">{props.location}</h3>&nbsp;|&nbsp;<h4 className="font-bold">{props.dates}</h4>
      </div>
    </div>
  );
}
