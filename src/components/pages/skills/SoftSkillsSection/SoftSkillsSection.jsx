/* eslint-disable react/no-unescaped-entities */
import { softSkillsData } from "../../../../data/softSkillsData/softSkillsData";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import SoftSkillsCard from "./SoftSkillsCard";

export default function SoftSkillsSection() {
  return (
    <Section className="mt-20">
      <Title
        variant="section"
        label="Soft-Skills"
        description="Zoom sur mes qualités de développeur front-end."
      />
      <div className="grid grid-cols-5 gap-4 text-center mb-12">
        {softSkillsData.map((skill, index) => (
          <SoftSkillsCard key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
