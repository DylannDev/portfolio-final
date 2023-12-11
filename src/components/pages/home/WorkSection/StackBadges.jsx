/* eslint-disable react/prop-types */
import Badge from "../../../reusable-ui/Badge";

export default function StackBadges({ project }) {
  return (
    <div className="flex gap-1">
      {project.badges.map((badge, index) => (
        <Badge key={index} label={badge.label} Icon={badge.icon} />
      ))}
    </div>
  );
}
