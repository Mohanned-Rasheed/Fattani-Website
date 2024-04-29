/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      blg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        DarkPurple: "#111626",
        DarkPurple2: "#161a31",
        gold: "#ae7f45",
        darkerGold: "#8a6b3b",
      },
      spacing: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
      },
    },
  },
  plugins: [],
};
