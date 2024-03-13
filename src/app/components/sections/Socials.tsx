import SecondaryButton from "../buttons/SecondaryButton";

export default function Socials() {
  return (
    <div className="uppercase font-normal">
      <h2 className="text-xs underline pb-2">Socials</h2>
      <div className="flex gap-10">
        <div>
          <SecondaryButton text="x" href="https://www.x.com/jjcxdev" />
        </div>
        <div>
          <SecondaryButton
            text="github"
            href="https://www.github.com/jjcxdev"
          />
        </div>
        <div>
          <SecondaryButton
            text="linkedin"
            href="https://www.linkedin.com/in/justinjchambers"
          />
        </div>
      </div>
    </div>
  );
}
