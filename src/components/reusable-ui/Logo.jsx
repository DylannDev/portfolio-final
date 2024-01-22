import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Logo() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <img
      src={`/images/${darkMode ? "logo-dev-blanc.svg" : "logo-dev-black.svg"}`}
      alt="Logo Dylann Dev"
      className="w-[250px]"
    />
  );
}
