/* eslint-disable react/prop-types */
import Badge from "./Badge";

export default function StackBadges({ project, shortenLabel }) {
  return (
    <div className="flex gap-1 overflow-x-clip">
      {project.badges.map((badge, index) => (
        <Badge
          key={index}
          label={badge.label}
          Icon={badge.icon}
          shortenLabel={shortenLabel}
        />
      ))}
    </div>
  );
}
