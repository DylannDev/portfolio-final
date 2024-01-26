import Section from "../../reusable-ui/Section";
import Title from "../../reusable-ui/Title";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../../data/projectsData/projectsData";

export default function Work() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Section className="flex flex-col justify-center" variant="large">
      <Title
        variant="section"
        label="Work"
        description="Quelques projets sur lesquels j'ai pris plaisir à travailler."
      />
      <div className="flex justify-center md:justify-start mb-6">
        <p>
          Cliquez sur les cartes pour
          <span className="font-bold"> en savoir plus</span>.
        </p>
      </div>
      <div
        className={`grid justify-items-center md:grid-cols-2 gap-4 xl:gap-6 max-w-[750px]
        `}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            darkMode={darkMode}
            shortenLabel
          />
        ))}
      </div>
    </Section>
  );
}
