import Card from "../../../reusable-ui/Card";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import ExternalLinks from "./ExternalLinks";
import StackBadges from "./StackBadges";
import { projectsData } from "../../../../projectsData/projectsData";
import { DarkModeContext } from "../../../../context/DarkModeContext";
import { useContext } from "react";

export default function Work() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Section variant="large">
      <Title
        label="Work"
        description="Voici quelques projets sur lesquels j'ai pris plaisir à travailler."
      />
      <div className="flex justify-between">
        {projectsData.map((project, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-6 h-full">
              <div className="flex flex-col items-center">
                <div
                  className={`w-[250px] ${
                    darkMode ? "fill-light" : "fill-dark"
                  }`}
                >
                  {project.image.src}
                </div>
              </div>
              <div>{project.description}</div>
              <StackBadges project={project} />
              <ExternalLinks project={project} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
