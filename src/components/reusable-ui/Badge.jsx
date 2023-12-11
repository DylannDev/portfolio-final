/* eslint-disable react/prop-types */
export default function Badge({ Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full px-3 py-1 bg-secondary  text-textDark  text-xs font-semibold   ">
      {Icon && <div className="text-xl">{Icon}</div>}
      <span>{label}</span>
    </div>
  );
}
