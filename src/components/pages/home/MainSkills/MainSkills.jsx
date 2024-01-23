import { MainSkillsData } from "../../../../data/projectsData/variablesSkillsData";
import { getShortenedLabel } from "../../../../utils/array";
import Section from "../../../reusable-ui/Section";

export default function MainSkills() {
  return (
    <Section className="border-y-[1px] border-slate-200" variant="large">
      <div className="grid grid-cols-5 justify-items-center sm:flex sm:justify-around gap-1">
        {MainSkillsData.map((skill, index) => (
          <div
            key={index}
            className="flex lg:flex-row flex-col items-center gap-4"
          >
            <span className="text-5xl text-primary">{skill.icon}</span>
            <span className="sm:hidden text-xs uppercase font-bold font-title text-center">
              {skill.label === "Styled-Components"
                ? getShortenedLabel(skill.label)
                : skill.label && skill.label === "TailwindCSS"
                ? "Tailwind"
                : skill.label}
            </span>
            <span className="sm:flex hidden sm:text-sm uppercase font-bold font-title text-center">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
