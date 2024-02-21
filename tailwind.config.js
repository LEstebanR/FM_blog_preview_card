/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(47, 88%, 63%)",
        gray: "hsl(0, 0%, 50%)",
      },
      boxShadow: {
        hover: "10px 10px 0 1px rgba(0, 0, 0)",
        card: "8px 8px 0 1px rgba(0, 0, 0)",
      },
      spacing: {
        100: "33rem",
      },
      fontFamily: {
        card: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
