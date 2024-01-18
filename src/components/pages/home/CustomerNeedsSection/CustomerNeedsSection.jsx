import Button from "../../../reusable-ui/Button";
import Section from "../../../reusable-ui/Section";
import { PiPlusCircle } from "react-icons/pi";
import { MainSkillsData } from "../../../../data/SkillsData/skillsData";
import Title from "../../../reusable-ui/Title";
import { RxCheck } from "react-icons/rx";

export default function CustomerNeedsSection() {
  return (
    <Section variant="large" className="flex justify-between items-center">
      <div className="flex flex-col gap-4 w-1/2">
        <Title
          label="Vos besoins"
          description="Que pourrions-nous faire ensemble ?"
          className="text-4xl text-left"
        />
        <p>
          Je développe des projets web, quelles que soient leurs dimensions, de
          la landing page à l’application web en passant par le SaaS, pour des
          petites et moyennes entreprises. J’ai une aspiration certaine pour les
          projets entrepreneuriaux innovants, et les méthodes agiles.
        </p>
        <div className="flex gap-2">
          {MainSkillsData.map((skill, index) => (
            <div key={index} className="flex items-center gap-[2px]">
              <RxCheck className="text-xl text-secondary animate-pulse" />
              <span className="text-sm font-bold whitespace-nowrap ">
                {skill}
              </span>
            </div>
          ))}
        </div>
        <Button label="En savoir plus" Icon={<PiPlusCircle />} />
      </div>

      <img
        src="/images/illustrations/Hand-coding-pana.svg"
        alt="web developer illustration"
        className="max-h-[400px]"
      />
    </Section>
  );
}
