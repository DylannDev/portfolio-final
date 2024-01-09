/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Badge from "../../reusable-ui/Badge";
import Button from "../../reusable-ui/Button";
import { PiCode, PiFileArrowDown } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "../../reusable-ui/SocialIcon";
import ExternalLink from "./WorkSection/ExternalLink";
import CvDevweb from "../../../../public/cv-dylann-xavero-devweb-2024.pdf";

export default function Hero() {
  return (
    <div className="flex h-[100dvh]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col w-1/2 gap-5">
          <h1 className="text-xl -mb-5">
            Hello 👋🏻, je suis <span className="font-bold">Dylann Xavero</span>
          </h1>
          <h1 className="font-extrabold text-[5rem] leading-[1.15] ">
            <span className="text-primary">Développeur</span> <br />
            <span className="whitespace-nowrap">Front-End</span>
            <span className="text-secondary">.</span>
          </h1>
          <h2 className="text-xl">
            Créateur d'expériences web captivantes et intuitives, <br />
            je transforme vos ambitions digitales en réalité.
          </h2>
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
        <div className="flex justify-end w-1/2">
          <div className="grid place-content-center w-[500px] h-[500px] rounded-full border-[1px] border-slate-200 ">
            <img
              className="rounded-full w-[400px]"
              src="public/images/portrait-dylann-carré-ai.png"
              alt="portrait dylann xavero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
