/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";

export default function Badge({ Icon, label, className }) {
  const location = useLocation();

  const shortenLabel =
    label.length > 8 ? label.slice(0, 6).concat("...") : label;
  return (
    <div
      className={`flex w-fit items-center gap-2 rounded-full px-3 py-1 bg-secondary text-dark font-semibold ${
        className ? className : "text-xs"
      }`}
    >
      {Icon && <div className="text-xl">{Icon}</div>}
      <span className={`whitespace-nowrap`}>
        {location.pathname.includes("/work/") ? label : shortenLabel}
      </span>
    </div>
  );
}
