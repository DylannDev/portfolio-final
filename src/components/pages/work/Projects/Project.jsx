import { useParams } from "react-router-dom";
import Section from "../../../reusable-ui/Section";
import { projectsData } from "../../../../data/projectsData/projectsData";
import { findProjectById } from "../../../../utils/array";
import ProjectDescription from "./ProjectDescription";
import ProjectInfos from "./ProjectInfos";
import MoreProjects from "./MoreProjects";
import { useContext } from "react";
import { DarkModeContext } from "../../../../context/DarkModeContext";
import BackButton from "../../../reusable-ui/BackButton";

export default function Project() {
  const { portfolioImage } = useContext(DarkModeContext);
  const { id } = useParams();

  const selectedProject = findProjectById(projectsData, id);

  return (
    <div className="fade-in">
      <BackButton />
      <div className="lg:pt-60 pt-44">
        <Section variant="large" className="flex justify-center">
          <div className="lg:max-w-3xl">
            <ProjectInfos selectedProject={selectedProject} />
            <ProjectDescription
              selectedProject={selectedProject}
              portfolioImage={portfolioImage}
            />
          </div>
        </Section>
      </div>
      <hr />
      <MoreProjects id={id} />
    </div>
  );
}
