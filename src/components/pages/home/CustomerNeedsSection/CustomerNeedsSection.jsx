/* eslint-disable react/no-unescaped-entities */
import Button from "../../../reusable-ui/Button";
import Section from "../../../reusable-ui/Section";
import { RxCheck } from "react-icons/rx";
import { MainSkillsData } from "../../../../data/projectsData/variablesSkillsData";
import Title from "../../../reusable-ui/Title";

export default function CustomerNeedsSection() {
  return (
    <Section
      variant="large"
      className="flex justify-between items-center my-16"
    >
      <div className="flex flex-col gap-4 w-1/2">
        <Title
          label="Vos besoins"
          description="Que pourrions-nous faire ensemble ?"
          className="text-4xl text-left"
        />
        <p className="text-lg">
          Je crée des projets web de toutes envergures, allant de simples
          landing page à des applications web plus complexes, destinées
          principalement aux petites et moyennes entreprises. J'ai un attrait
          certain pour les projets novateurs, qui intègrent les méthodes agiles
          afin d'assurer une flexibilité optimale dans le processus de
          développement.
        </p>
        <div className="flex gap-2">
          {MainSkillsData.map((skill, index) => (
            <div key={index} className="flex items-center gap-[2px]">
              <RxCheck className="text-xl text-secondary animate-pulse" />
              <span className="text-sm font-bold whitespace-nowrap ">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
        <Button label="En savoir plus" />
      </div>

      <img
        src="/images/illustrations/Hand-coding-pana.svg"
        alt="web developer illustration"
        className="max-h-[400px]"
      />
    </Section>
  );
}
