import Title from "../../../reusable-ui/Title";
import Section from "../../../reusable-ui/Section";
import { skillsData } from "../../../../data/skillsData/skillsData.jsx";
import SkillsCard from "./SkillsCard";

export default function SkillsSection() {
  return (
    <>
      <Section variant="large">
        <Title
          variant="section"
          label="Skills"
          description="Voici les technos sur lesquelles je suis à l'aise."
        />

        <div className="grid md:grid-cols-3 gap-4 xs:justify-items-center md:justify-items-stretch xl:gap-6">
          {skillsData.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </Section>
    </>
  );
}
