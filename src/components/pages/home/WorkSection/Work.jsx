import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import { projectsData } from "../../../../projectsData/projectsData";
import { DarkModeContext } from "../../../../context/DarkModeContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const { darkMode } = useContext(DarkModeContext);

  const location = useLocation();

  const homePageActive = location.pathname === "/";

  return (
    <Section
      className="flex flex-col justify-center items-center"
      variant="large"
    >
      <Title
        label="Work"
        description={
          homePageActive
            ? "Voici un aperçu derniers projets que j'ai pu réaliser."
            : "Quelques projets sur lesquels j'ai pris plaisir à travailler."
        }
      />
      <div
        className={`grid justify-items-center gap-8 ${
          homePageActive ? "grid-cols-3" : "grid-cols-2 max-w-[750px]"
        }`}
      >
        {projectsData.map((project, index) =>
          homePageActive ? (
            index < 3 && (
              <ProjectCard key={index} project={project} darkMode={darkMode} />
            )
          ) : (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          )
        )}
      </div>
    </Section>
  );
}
