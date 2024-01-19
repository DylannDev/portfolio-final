/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1e293b",
        light: "#FFFFFF",
        primary: "#646cff",
        primaryShade1: "#858BFF",
        primaryDark: "#4751FF",
        secondary: "#5ceab9",
        secondaryDark: "#1CD997",
        secondaryLight: "#EDFDF7",
        tertiary: "#ef4270",
        primaryLight: "#EBECFF",
        backgroundDark: "#0f172a",
        borderLight: "#f9f9f9",
        borderDark: "#1e293b",
      },
    },
  },
  plugins: [],
};
