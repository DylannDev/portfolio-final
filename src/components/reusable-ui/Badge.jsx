import { getShortenedLabel } from "../../utils/array";

/* eslint-disable react/prop-types */
export default function Badge({
  Icon,
  label,
  className,
  shortenLabel = false,
}) {
  const labelShortened = getShortenedLabel(label);

  return (
    <div
      className={`flex w-fit items-center gap-2 rounded-full px-3 py-1 bg-secondary text-dark font-semibold ${
        className ? className : "text-xs"
      }`}
    >
      {Icon && <div className="text-xl">{Icon}</div>}
      <span className={`whitespace-nowrap`}>
        {shortenLabel ? labelShortened : label}
      </span>
    </div>
  );
}
