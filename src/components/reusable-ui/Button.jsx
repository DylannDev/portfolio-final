/* eslint-disable react/prop-types */
export default function Button({
  Icon,
  label,
  href,
  target,
  download,
  onClick,
  variant = "normal",
}) {
  return (
    <a
      className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 active:bg-primaryDark hover:bg-transparent 
      border-[1px] text-light transition-all duration-300 cursor-pointer shadow-md ${
        variant !== "normal"
          ? "bg-dark border-dark  hover:text-dark"
          : "bg-primary border-primary  hover:text-primary"
      }`}
      href={href}
      download={download}
      target={target}
      rel="noreferrer"
      onClick={onClick}
    >
      {Icon && <div className="text-xl">{Icon}</div>}
      <span className="">{label}</span>
    </a>
  );
}
