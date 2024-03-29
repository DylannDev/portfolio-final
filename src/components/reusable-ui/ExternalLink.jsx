/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ExternalLink({ to, label, Icon }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Link
      to={to}
      className="flex items-center gap-1 text-primary font-medium text-lg hover:underline underline-offset-4"
      target="_blank"
      onClick={(e) => handleClick(e)}
    >
      {Icon}
      <span>{label}</span>
    </Link>
  );
}
