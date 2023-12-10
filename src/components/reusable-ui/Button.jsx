/* eslint-disable react/prop-types */
export default function Button({ Icon, label }) {
  return (
    <button className="flex items-center gap-2 rounded-full px-4 py-3 bg-primary hover:bg-primaryLight active:bg-primaryDark text-textLight font-medium">
      <div className="text-xl">{Icon && Icon}</div>
      <span className="">{label}</span>
    </button>
  );
}
