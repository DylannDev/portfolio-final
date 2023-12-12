/* eslint-disable react/prop-types */
export default function Button({ Icon, label }) {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-primary active:bg-primaryDark 
        hover:shadow-lg text-textLight  shadow-md font-medium text-lg"
    >
      {Icon && <div className="text-xl">{Icon}</div>}
      <span className="">{label}</span>
    </button>
  );
}
