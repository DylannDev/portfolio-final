import { MainSkillsData } from "../../../../data/projectsData/variablesSkillsData";
import Section from "../../../reusable-ui/Section";
import MainSkillsContent from "./MainSkillsContent";

export default function MainSkills() {
  return (
    <Section className="border-y-[1px] border-slate-200" variant="large">
      <div className="grid grid-cols-5 justify-items-center sm:flex sm:justify-around gap-1">
        {MainSkillsData.map((skill, index) => (
          <MainSkillsContent key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
