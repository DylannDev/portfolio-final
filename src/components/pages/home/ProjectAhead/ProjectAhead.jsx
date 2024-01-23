import { useNavigate } from "react-router-dom";
import Button from "../../../reusable-ui/Button";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import { projectsData } from "../../../../data/projectsData/projectsData";
import { findProjectById } from "../../../../utils/array";
import ExternalLinks from "../../../reusable-ui/ExternalLinks";
import StackBadges from "../../../reusable-ui/StackBadges";

export default function ProjectAhead() {
  const navigate = useNavigate();
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
        <img
          src={`/images/${selectedProject.images}`}
          alt="image du projet crusty pizza"
          className="rounded-3xl w-full max-w-[600px] cursor-pointer"
          onClick={() => navigate(`/work/${selectedProject.id}`)}
        />
        <div className="lg:w-1/2 w-full max-w-[600px] flex flex-col gap-6">
          <Title label={selectedProject.name} className="text-left text-3xl" />
          {selectedProject.description.header}
          <StackBadges project={selectedProject} />
          <ExternalLinks project={selectedProject} />
          <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
            <Button label="Consulter tous mes projets" href="/work" />
          </div>
        </div>
      </div>
    </Section>
  );
}
