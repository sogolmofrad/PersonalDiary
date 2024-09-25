/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        7: "repeat(7,9vh )",
      },
    },
  },
  plugins: [],
};
