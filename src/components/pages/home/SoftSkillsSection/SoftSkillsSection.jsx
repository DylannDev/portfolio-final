import { softSkillsData } from "../../../../data/softSkillsData/softSkillsData";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import SoftSkillsCard from "./SoftSkillsCard";

export default function SoftSkillsSection() {
  return (
    <Section className="mt-20">
      <Title
        label="Soft-Skills"
        description="Zoom sur mes qualités de développeur front-end."
        className="mb-6"
      />
      <div className="flex gap-4 text-center">
        {softSkillsData.map((skill, index) => (
          <SoftSkillsCard key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
