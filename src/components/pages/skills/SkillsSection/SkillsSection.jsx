import Title from "../../../reusable-ui/Title";
import Section from "../../../reusable-ui/Section";
import { skillsData } from "../../../../data/SkillsData/skillsData";
import SkillsCard from "./SkillsCard";

export default function SkillsSection() {
  return (
    <>
      <Section>
        <Title
          variant="section"
          label="Skills"
          description="Voici les technos sur lesquelles je suis à l'aise."
        />

        <div className="flex justify-around">
          {skillsData.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </Section>
    </>
  );
}
