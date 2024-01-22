import { useParams } from "react-router-dom";
import Section from "../../../reusable-ui/Section";
import { projectsData } from "../../../../data/projectsData/projectsData";
import { findProjectById } from "../../../../utils/array";
import ProjectDescription from "./ProjectDescription";
import ProjectInfos from "./ProjectInfos";
import MoreProjects from "./MoreProjects";
import { useContext } from "react";
import { DarkModeContext } from "../../../../context/DarkModeContext";

export default function Project() {
  const { portfolioImage } = useContext(DarkModeContext);
  const { id } = useParams();

  const selectedProject = findProjectById(projectsData, id);

  return (
    <>
      <Section className="flex justify-center pt-[30dvh]">
        <div className="max-w-3xl">
          <ProjectInfos selectedProject={selectedProject} />
          <ProjectDescription
            selectedProject={selectedProject}
            portfolioImage={portfolioImage}
          />
        </div>
      </Section>
      <hr />
      <MoreProjects id={id} />
    </>
  );
}
