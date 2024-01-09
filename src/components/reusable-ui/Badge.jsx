/* eslint-disable react/prop-types */
export default function Badge({ Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full px-3 py-1 bg-secondary  text-dark  text-xs font-semibold   ">
      {Icon && <div className="text-xl">{Icon}</div>}
      <span className={`whitespace-nowrap`}>
        {label.length > 8 ? label.slice(0, 6).concat("...") : label}
      </span>
    </div>
  );
}
