/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        2: "repeat(2, minmax(0, 25rem))",
        3: "repeat(3, minmax(0, 15rem))",
      },
    },
  },
  plugins: [daisyui],
};
