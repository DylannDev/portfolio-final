/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DarkModeContext } from "../../../../context/DarkModeContext";
import { projectsData } from "../../../../data/projectsData/projectsData";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import ProjectCard from "../ProjectCard";

export default function MoreProjects({ id }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Section variant="large" className="flex flex-col">
      <Title
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
                shortenLabel={true}
              />
            )
        )}
      </div>
    </Section>
  );
}
