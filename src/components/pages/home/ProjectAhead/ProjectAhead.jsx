import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import { projectsData } from "../../../../data/projectsData/projectsData";
import { findProjectById } from "../../../../utils/array";
import ProjectAheadText from "./ProjectAheadText";
import ProjectAheadImage from "./ProjectAheadImage";

export default function ProjectAhead() {
  const id = "crusty-pizza";
  const selectedProject = findProjectById(projectsData, id);
  return (
    <Section className="my-16" variant="large">
      <Title
        label="Projet Perso"
        description="Un aperçu d'une de mes réalisations."
        className="text-4xl text-center lg:text-left mb-8"
      />
      <div className="flex lg:flex-row lg:items-start gap-8 flex-col items-center ">
        <ProjectAheadImage selectedProject={selectedProject} />
        <ProjectAheadText selectedProject={selectedProject} />
      </div>
    </Section>
  );
}
