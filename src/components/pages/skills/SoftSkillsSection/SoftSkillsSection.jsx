/* eslint-disable react/no-unescaped-entities */
import { PiFileArrowDown } from "react-icons/pi";
import { softSkillsData } from "../../../../data/softSkillsData/softSkillsData";
import Button from "../../../reusable-ui/Button";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import SoftSkillsCard from "./SoftSkillsCard";
import CvDevweb from "/public/cv-dylann-xavero-devweb-2024.pdf";

export default function SoftSkillsSection() {
  return (
    <Section className="my-20">
      <Title
        label="Soft-Skills"
        description="Zoom sur mes qualités de développeur front-end."
      />
      <div className="flex gap-4 text-center mb-12">
        {softSkillsData.map((skill, index) => (
          <SoftSkillsCard key={index} skill={skill} />
        ))}
      </div>
      <div className="flex justify-between items-center pt-8">
        <img
          src="/images/Resume-folder-amico.svg"
          alt="illustration cv"
          className="max-w-[200px]"
        />
        <p className="text-xl font-bold pr-4 text-center">
          Besoin d'en savoir plus sur mon parcours ? <br />
          Téléchargez mon CV en ligne.
        </p>
        <Button
          Icon={<PiFileArrowDown />}
          label="Voir mon CV"
          href={CvDevweb}
          target="_blank"
        />
      </div>
    </Section>
  );
}
