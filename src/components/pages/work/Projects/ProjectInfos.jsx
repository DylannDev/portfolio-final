/* eslint-disable react/prop-types */
import Title from "../../../reusable-ui/Title";
import StackBadges from "../../home/WorkSection/StackBadges";
import ExternalLinks from "../../home/WorkSection/ExternalLinks";

export default function ProjectInfos({ selectedProject }) {
  return (
    <div className="flex flex-col gap-6 pb-16">
      <Title
        label={selectedProject.name}
        description={selectedProject.shortDescription}
        className="text-4xl"
      />
      <div className="flex justify-between items-center">
        <StackBadges project={selectedProject} />
        <ExternalLinks project={selectedProject} />
      </div>
    </div>
  );
}
