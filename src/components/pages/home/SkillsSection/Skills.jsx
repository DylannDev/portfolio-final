import Title from "../../../reusable-ui/Title";
import SkillsCard from "./SkillsCard";
import { skillsData } from "../../../../data/SkillsData/skillsData";
import Section from "../../../reusable-ui/Section";

export default function Skills() {
  return (
    <Section>
      <Title
        label="Skills"
        description="Voici les technos sur lesquelles je suis à l'aise."
      />

      <div className="flex justify-around">
        {skillsData.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
