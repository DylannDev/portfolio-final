import { useParams } from "react-router-dom";
import Section from "../../../reusable-ui/Section";
import { projectsData } from "../../../../data/projectsData/projectsData";
import { findProjectById } from "../../../../utils/array";
import ProjectDescription from "./ProjectDescription";
import ProjectInfos from "./ProjectInfos";
import MoreProjects from "./MoreProjects";

export default function Project() {
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
      <MoreProjects id={id} />
    </>
  );
}
