/* eslint-disable react/prop-types */
import TitleProjects from "../../../reusable-ui/TitleProjects";
import StackBadges from "../../home/WorkSection/StackBadges";
import ExternalLinks from "../../home/WorkSection/ExternalLinks";

export default function ProjectInfos({ selectedProject }) {
  return (
    <div className="flex flex-col gap-6 pb-16">
      <TitleProjects
        label={selectedProject.name}
        description={selectedProject.shortDescription}
      />
      <div className="flex justify-between items-center">
        <StackBadges project={selectedProject} />
        <ExternalLinks project={selectedProject} />
      </div>
    </div>
  );
}
