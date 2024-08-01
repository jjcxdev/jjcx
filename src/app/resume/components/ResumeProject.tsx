interface ResumeProjectProps {
  client?: string;
  bullets?: string[];
}

export default function ResumeProject(props: ResumeProjectProps) {
  return (
   <div className="font-normal flex hover:bg-secondary hover:rounded-md flex-col px-4 py-1 text-sm">
      <div className="flex flex-wrap">
        <p className="mr-1 whitespace-normal">
          {props.client && (
            <span className="font-semibold whitespace-nowrap">
              {props.client}:
            </span>
          )}
          <span className="font-normal">
            {props.bullets?.map((line, index) => (
              <span className="text-sm" key={index}>
                {line}{index < (props.bullets??[]).length - 1 ? ', ' : ''}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
}
