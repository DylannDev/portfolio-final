import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({
  Icon,
  label,
  href,
  target,
  onClick,
  variant = "normal",
}) {
  const { darkButton, normalButton } = useContext(DarkModeContext);

  return (
    <Link
      className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 active:text-light hover:bg-transparent 
      border-[1px] transition-all duration-300 cursor-pointer shadow-md w-fit ${
        variant === "normal" ? normalButton : darkButton
      }`}
      to={href}
      target={target}
      rel="noreferrer"
      onClick={onClick}
    >
      {Icon && <div className="text-xl">{Icon}</div>}
      <span className="">{label}</span>
    </Link>
  );
}
