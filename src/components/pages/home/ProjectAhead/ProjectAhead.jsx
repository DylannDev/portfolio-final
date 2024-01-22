import { useNavigate } from "react-router-dom";
import Button from "../../../reusable-ui/Button";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import { projectsData } from "../../../../data/projectsData/projectsData";
import { findProjectById } from "../../../../utils/array";
import StackBadges from "../../work/StackBadges";
import ExternalLinks from "../../../reusable-ui/ExternalLinks";

export default function ProjectAhead() {
  const navigate = useNavigate();
  const id = "crusty-pizza";
  const selectedProject = findProjectById(projectsData, id);
  return (
    <Section className="my-16" variant="large">
      <Title
        label="Projet Perso"
        description="Un aperçu d'une de mes réalisations."
        className="text-4xl text-left mb-8"
      />
      <div className="flex">
        <img
          src={`/images/${selectedProject.images}`}
          alt="image du projet crusty pizza"
          className="rounded-3xl w-1/2 cursor-pointer"
          onClick={() => navigate(`/work/${selectedProject.id}`)}
        />
        <div className="pl-8 w-1/2 flex flex-col gap-4">
          <Title label={selectedProject.name} className="text-left text-3xl" />
          {selectedProject.mediumDescription}
          <StackBadges project={selectedProject} />
          <ExternalLinks project={selectedProject} />
          <Button label="Consulter tous mes projets" href="/work" />
        </div>
      </div>
    </Section>
  );
}
