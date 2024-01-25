/* eslint-disable react/no-unescaped-entities */
import { PiCode, PiFileArrowDown } from "react-icons/pi";
import Button from "../../../reusable-ui/Button";
import CvDevweb from "/public/cv-dylann-xavero-devweb-2024.pdf";

export default function TextHero() {
  return (
    <div className="flex flex-col xl:w-1/2 w-full gap-5">
      <h1 className="text-2xl -mb-5">
        Hello 👋🏻, je suis <span className="font-bold">Dylann Xavero</span>
      </h1>
      <h1 className="font-bold md:text-[5rem] text-[3.5rem] leading-[1.15] font-title">
        <span className="text-primary">Développeur </span>
        <span className="whitespace-nowrap">Front-End</span>
        <span className="text-secondary">.</span>
      </h1>
      <p className="text-xl">
        Créateur d'expériences web captivantes et intuitives, je transforme vos
        ambitions digitales en réalité.
      </p>
      <div className="flex gap-2">
        <Button
          Icon={<PiFileArrowDown />}
          label="Voir mon CV"
          variant="dark"
          href={CvDevweb}
          target="_blank"
        />
        <Button Icon={<PiCode />} label="Mes Projets" href="/work" />
      </div>
    </div>
  );
}
