/* eslint-disable react/no-unescaped-entities */
import { PiFileArrowDown } from "react-icons/pi";
import Button from "../../../reusable-ui/Button";
import CvDevweb from "/public/cv-dylann-xavero-devweb-2024.pdf";
import Section from "../../../reusable-ui/Section";

export default function ResumeSection() {
  return (
    <Section className="mb-0 pt-0">
      <div className="flex gap-20 lg:flex-row flex-col justify-between items-center">
        <img
          src="/images/illustrations/Resume-folder-amico.svg"
          alt="illustration cv"
          className="max-w-[200px]"
        />
        <p className="text-xl flex flex-col items-center gap-4">
          <span className="font-bold text-center">
            Besoin d'en savoir plus sur mon parcours ?
          </span>
          <span>Téléchargez mon CV en ligne.</span>
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
