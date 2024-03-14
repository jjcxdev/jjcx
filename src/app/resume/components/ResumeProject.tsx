interface ResumeProjectProps {
  client: string;
  description: string;
  bullets: string[];
}

export default function ResumeProject(props: ResumeProjectProps) {
  return (
    <div className="font-normal flex hover:bg-secondary hover:rounded-md flex-col p-4 text-sm">
      <div className="flex flex-col md:flex-row pb-1">
        <p className="font-semibold pr-1">{props.client}:</p>
        <p className="">{props.description}</p>
      </div>
      {props.bullets.map((line, index) => (
        <p className="md:pl-6 text-sm" key={index}>
          • {line}
        </p>
      ))}
    </div>
  );
}
