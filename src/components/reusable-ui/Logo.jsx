import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  return (
    <img
      src={`/images/${darkMode ? "logo-dev-blanc.svg" : "logo-dev-black.svg"}`}
      alt="Logo Dylann Dev"
      className="w-[250px] cursor-pointer"
      onClick={() => navigate("/")}
    />
  );
}
