/* eslint-disable react/prop-types */

import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function AnchorLink({ label, sectionId, variant = "normal" }) {
  const { darkButton, normalButton } = useContext(DarkModeContext);
  const handleClickToSection = () => {
    const id = document.getElementById(sectionId);
    id.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <a
      onClick={handleClickToSection}
      className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 active:text-light hover:bg-transparent 
  border-[1px] transition-all duration-300 cursor-pointer shadow-md w-fit ${
    variant === "normal" ? normalButton : darkButton
  }`}
    >
      {label}
    </a>
  );
}
