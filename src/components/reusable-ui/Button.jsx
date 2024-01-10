import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

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
  const { darkButton, normalButton } = useContext(DarkModeContext);

  return (
    <a
      className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 active:text-light hover:bg-transparent 
      border-[1px] transition-all duration-300 cursor-pointer shadow-md ${
        variant === "normal" ? normalButton : darkButton
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
