/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        color1: "#DA851E",
        color2: "#748de0",
        color3: "#4a8db7",
        color4: "#974063",
        color5: "#a1e1fa",
      },
    },
  },
  plugins: [],
};
