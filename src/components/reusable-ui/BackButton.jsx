import { PiArrowLeft } from "react-icons/pi";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  return (
    <button
      className={`flex items-center gap-1  hover:border-b-[1px] pb-[2px] absolute z-10 cursor-pointer mt-[20dvh] ${
        darkMode ? "text-light border-b-light" : "text-primary border-b-primary"
      }`}
      onClick={() => navigate(-1)}
    >
      <PiArrowLeft />
      <span>Retour</span>
    </button>
  );
}
