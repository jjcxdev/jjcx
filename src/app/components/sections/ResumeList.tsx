import SecondaryButton from "../buttons/SecondaryButton";

export default function ResumeList() {
  return (
    <div className="uppercase font-normal w-full">
      <h2 className="text-xs underline pb-2">Related Experience</h2>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Front End Developer</p>
          <p className="pb-4 text-sm text-[#7F7F7F]">Freelance</p>
        </div>
        <h3 className="text-[#c6c6c6] text-sm ">2022-Now</h3>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Front End Developer</p>
          <p className="pb-4 text-sm text-[#7F7F7F]">Epic Toronto</p>
        </div>
        <h3 className="text-[#c6c6c6] text-sm ">2015-2019</h3>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Front End Developer</p>
          <p className="pb-4 text-sm text-[#7F7F7F]">Ethereum Films</p>
        </div>
        <h3 className="text-[#c6c6c6] text-sm ">2012-2019</h3>
      </div>
      <div className="flex justify-end">
        <SecondaryButton text="View Resume" href="../../resume/" />
      </div>
    </div>
  );
}
