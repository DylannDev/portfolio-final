/* eslint-disable react/prop-types */
export default function Button({ Icon, label }) {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-transparent hover:bg-primaryLight active:bg-primaryLight border-[1px] border-primary  text-primary font-medium">
      {Icon && <div className="text-xl">{Icon}</div>}
      <span className="">{label}</span>
    </button>
  );
}
