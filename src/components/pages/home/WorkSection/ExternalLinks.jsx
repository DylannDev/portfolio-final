/* eslint-disable react/prop-types */
import ExternalLink from "./ExternalLink";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ExternalLinks({ project }) {
  return (
    <div className="flex gap-4 border-primary">
      <ExternalLink
        to={project.links.github}
        label="Github"
        Icon={<FaGithub />}
      />

      <ExternalLink
        to={project.links.demo}
        label="Demo"
        Icon={<FiExternalLink />}
      />
    </div>
  );
}
