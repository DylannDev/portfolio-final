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

  return (
    <Section variant="large">
      <Title
        label="Work"
        description={
          location.pathname === "/"
            ? "Voici un aperçu derniers projets que j'ai pu réaliser."
            : "Quelques projets sur lesquels j'ai pris plaisir à travailler."
        }
      />
      <div className="flex justify-between">
        {projectsData.map((project, index) =>
          location.pathname === "/" ? (
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
