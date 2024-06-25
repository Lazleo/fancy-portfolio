/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5BF4BD",
        accent: "#1E2973",
        neutral: "#F3F3F3",
        darkBg: "#0B1036",
        midBg: "#0E546A",
        lightBg: "#18B69A",
      },
    },
    fontFamily: {
      primary: "anona",
      text: "puritan",
    },
  },
  plugins: [],
};
