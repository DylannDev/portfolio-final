/* eslint-disable react/no-unescaped-entities */
import { PiFileArrowDown } from "react-icons/pi";
import Button from "../../../reusable-ui/Button";
import CvDevweb from "/public/cv-dylann-xavero-devweb-2024.pdf";
import Section from "../../../reusable-ui/Section";

export default function ResumeSection() {
  return (
    <Section className="mb-0">
      <div className="flex justify-between items-center">
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
