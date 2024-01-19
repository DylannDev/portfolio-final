import { MainSkillsData } from "../../../../data/projectsData/variablesSkillsData";
import Section from "../../../reusable-ui/Section";

export default function MainSkills() {
  return (
    <Section className="border-y-[1px] border-slate-200" variant="large">
      <div className="flex justify-around">
        {MainSkillsData.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-5xl text-primary">{skill.icon}</span>
            <span className="text-sm uppercase font-bold font-title">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
