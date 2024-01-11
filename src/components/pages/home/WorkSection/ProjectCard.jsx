/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Card from "../../../reusable-ui/Card";
import ExternalLinks from "./ExternalLinks";
import StackBadges from "./StackBadges";

export default function ProjectCard({ project, darkMode }) {
  return (
    <Link to={`/work/${project.id}`}>
      <Card className="max-w-[360px] cursor-pointer p-8 hover:scale-105 transition-all">
        <div className="flex flex-col gap-6 h-full ">
          <div className="flex flex-col items-center">
            <div
              className={`w-[250px] ${darkMode ? "fill-light" : "fill-dark"}`}
            >
              {project.logo}
            </div>
          </div>
          <div>{project.shortDescription}</div>
          <StackBadges project={project} />
          <ExternalLinks project={project} />
        </div>
      </Card>
    </Link>
  );
}
