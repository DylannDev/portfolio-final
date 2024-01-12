import { useParams } from "react-router-dom";
import Section from "../../../reusable-ui/Section";
import { projectsData } from "../../../../projectsData/projectsData";
import { findProjectById } from "../../../../utils/array";
import ProjectDescription from "./ProjectDescription";
import ProjectInfos from "./ProjectInfos";
import ProjectCard from "../../home/WorkSection/ProjectCard";
import { DarkModeContext } from "../../../../context/DarkModeContext";
import { useContext } from "react";
import TitleProjects from "../../../reusable-ui/TitleProjects";

export default function Project() {
  const { darkMode } = useContext(DarkModeContext);
  const { id } = useParams();

  const selectedProject = findProjectById(projectsData, id);

  return (
    <>
      <Section className="flex justify-center pt-[30dvh]">
        <div className="max-w-3xl">
          <ProjectInfos selectedProject={selectedProject} />
          <ProjectDescription selectedProject={selectedProject} />
        </div>
      </Section>
      <hr />
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
                <ProjectCard
                  key={index}
                  project={project}
                  darkMode={darkMode}
                />
              )
          )}
        </div>
      </Section>
    </>
  );
}
