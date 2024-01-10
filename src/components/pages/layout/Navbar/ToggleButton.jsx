import { useContext } from "react";
import { PiMoon, PiSun } from "react-icons/pi";
import { DarkModeContext } from "../../../../context/DarkModeProvider";

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      onClick={toggleDarkMode}
      className={`ml-3 p-1 rounded-full cursor-pointer text-2xl hover:bg-primary transition-all duration-300 ${
        darkMode ? "bg-light text-dark hover:text-light" : "bg-dark text-light"
      }`}
    >
      {darkMode ? <PiSun /> : <PiMoon />}
    </div>
  );
}
