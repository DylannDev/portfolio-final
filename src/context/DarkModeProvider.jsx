/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const darkButton = darkMode
    ? "bg-secondary text-dark border-secondary hover:text-secondary active:bg-secondaryDark"
    : "bg-dark text-light border-dark hover:text-dark active:bg-slate-900";

  const normalButton =
    "bg-primary text-light border-primary hover:text-primary active:bg-primaryDark";
  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode, darkButton, normalButton }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
