/* eslint-disable react/no-unescaped-entities */

import { MainSkillsData } from "../../../../data/projectsData/variablesSkillsData";
import AnchorLink from "../../../reusable-ui/AnchorLink";
import Title from "../../../reusable-ui/Title";
import MainSkillsText from "./MainSkillsText";

export default function CustomerNeedsText() {
  return (
    <>
      <Title
        label="Vos besoins"
        description="Que pourrions-nous faire ensemble ?"
        className="text-4xl lg:text-left text-center"
      />
      <p className="text-lg">
        Je crée des projets web de toutes envergures, allant de simples landing
        page à des applications web plus complexes, destinées principalement aux
        petites et moyennes entreprises. J'ai un attrait certain pour les
        projets novateurs, qui intègrent les méthodes agiles afin d'assurer une
        flexibilité optimale dans le processus de développement.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {MainSkillsData.map((skill, index) => (
          <MainSkillsText key={index} skill={skill} />
        ))}
      </div>

      <AnchorLink label="En savoir plus" sectionId="servicesSection" />
    </>
  );
}
