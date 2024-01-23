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
      className="flex lg:flex-row flex-col gap-20 justify-between items-center my-16"
    >
      <div className="flex flex-col lg:items-start items-center gap-6 lg:gap-4 lg:w-1/2 max-w-[700px] ">
        <Title
          label="Vos besoins"
          description="Que pourrions-nous faire ensemble ?"
          className="text-4xl lg:text-left text-center"
        />
        <p className="text-lg">
          Je crée des projets web de toutes envergures, allant de simples
          landing page à des applications web plus complexes, destinées
          principalement aux petites et moyennes entreprises. J'ai un attrait
          certain pour les projets novateurs, qui intègrent les méthodes agiles
          afin d'assurer une flexibilité optimale dans le processus de
          développement.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {MainSkillsData.map((skill, index) => (
            <div key={index} className="flex  items-center gap-[2px]">
              <RxCheck className="text-xl text-secondary animate-pulse" />
              <span className="text-sm font-bold">{skill.label}</span>
            </div>
          ))}
        </div>
        <Button label="En savoir plus" />
      </div>

      <img
        src="/images/illustrations/Hand-coding-pana.svg"
        alt="web developer illustration"
        className="lg:max-h-[400px] max-h-[550px]"
      />
    </Section>
  );
}
