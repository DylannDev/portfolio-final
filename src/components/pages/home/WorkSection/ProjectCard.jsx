/* eslint-disable react/prop-types */
import Card from "../../../reusable-ui/Card";
import ExternalLinks from "./ExternalLinks";
import StackBadges from "./StackBadges";

export default function ProjectCard({ project, darkMode }) {
  return (
    <Card>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col items-center">
          <div className={`w-[250px] ${darkMode ? "fill-light" : "fill-dark"}`}>
            {project.logo}
          </div>
        </div>
        <div>{project.description}</div>
        <StackBadges project={project} />
        <ExternalLinks project={project} />
      </div>
    </Card>
  );
}
