/* eslint-disable react/prop-types */
export default function Badge({ Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-textLight text-lg font-light">
      <div className="text-xl">{Icon && Icon}</div>
      <span>{label}</span>
    </div>
  );
}
