/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Card from "../../reusable-ui/Card";
import ExternalLinks from "../../reusable-ui/ExternalLinks";
import StackBadges from "../../reusable-ui/StackBadges";

export default function ProjectCard({ project, darkMode, shortenLabel }) {
  const navigate = useNavigate();
  return (
    <Card
      className="min-w-[320px] w-full cursor-pointer p-8 hover:scale-105 transition-all"
      onClick={() => navigate(`/work/${project.id}`)}
    >
      <div className="flex flex-col gap-6 h-full ">
        <div className="flex flex-col items-center">
          <div className={`w-[250px] ${darkMode ? "fill-light" : "fill-dark"}`}>
            {project.logo}
          </div>
        </div>
        <div className="flex-1">{project.mediumDescription}</div>
        <StackBadges project={project} shortenLabel={shortenLabel} />
        <ExternalLinks project={project} />
      </div>
    </Card>
  );
}
