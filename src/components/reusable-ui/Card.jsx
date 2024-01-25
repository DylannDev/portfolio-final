import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

/* eslint-disable react/prop-types */
export default function Card({ children, className, onClick }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      onClick={onClick}
      className={`border-[1px] border-slate-200 rounded-3xl ${
        !darkMode && "shadow-md "
      } ${className ? className : "p-8"}`}
    >
      {children}
    </div>
  );
}
