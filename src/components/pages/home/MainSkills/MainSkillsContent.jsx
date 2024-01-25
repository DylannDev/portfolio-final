import { getShortenedLabel } from "../../../../utils/array";

/* eslint-disable react/prop-types */
export default function MainSkillsContent({ skill }) {
  const shortenStyledComponents =
    skill.label === "Styled-Components"
      ? getShortenedLabel(skill.label)
      : skill.label;

  const shortenTailwind =
    skill.label === "TailwindCSS" ? "Tailwind" : skill.label;

  return (
    <div className="flex lg:flex-row flex-col items-center gap-4">
      <span className="text-5xl text-primary">{skill.icon}</span>
      <span className="sm:hidden text-xs uppercase font-bold font-title text-center">
        {shortenStyledComponents && shortenTailwind}
      </span>
      <span className="sm:flex hidden sm:text-sm uppercase font-bold font-title text-center">
        {skill.label}
      </span>
    </div>
  );
}
