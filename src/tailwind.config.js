/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo 2", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        cyan: {
          400: "#38bdf8",
          500: "#06b6d4",
        },
        violet: {
          600: "#7c3aed",
        },
        slate: {
          900: "#0f172a",
        },
      },
      transitionProperty: {
        "bg-and-text": "background-color, color",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
