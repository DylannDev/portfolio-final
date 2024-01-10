import { useContext } from "react";
import { PiMoon, PiSun } from "react-icons/pi";
import { DarkModeContext } from "../../../../context/DarkModeProvider";

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      onClick={toggleDarkMode}
      className="ml-3 p-1 bg-dark rounded-full text-light cursor-pointer text-2xl"
    >
      {darkMode ? <PiSun /> : <PiMoon />}
    </div>
  );
}
