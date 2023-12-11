/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textDark: "#1e293b",
        textLight: "#FFFFFF",
        primary: "#646cff",
        primaryLight: "#858BFF",
        primaryDark: "#4751FF",
        secondary: "#5ceab9",
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
