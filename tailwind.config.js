/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo"],
      },
      height: {
        400: "450px",
      },
      width: {
        400: "450px",
      },
      saturate: {
        75: 0.75,
        80: 0.8,
        90: 0.9,
      },
      colors: {
        "maroon-red": "#990017",
      },
    },
  },
  plugins: [],
};
