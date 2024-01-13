/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DarkModeContext } from "../../../../context/DarkModeContext";
import { projectsData } from "../../../../data/projectsData/projectsData";
import Section from "../../../reusable-ui/Section";
import TitleProjects from "../../../reusable-ui/TitleProjects";
import ProjectCard from "../../home/WorkSection/ProjectCard";

export default function MoreProjects({ id }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Section variant="large" className="flex flex-col gap-16">
      <TitleProjects
        label="More Work"
        description="Quelques projets sur lesquels j'ai travaillé"
        size="text-4xl"
      />
      <div className={`grid grid-cols-3 justify-items-center  gap-8`}>
        {projectsData.map(
          (project, index) =>
            project.id !== id && (
              <ProjectCard key={index} project={project} darkMode={darkMode} />
            )
        )}
      </div>
    </Section>
  );
}
