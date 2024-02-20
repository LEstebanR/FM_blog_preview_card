/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(47, 88%, 63%)",
      },
      boxShadow: {
        "hover": "15px 15px 0 5px rgba(0, 0, 0)",
        "card": "15px 15px 0 1px rgba(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
