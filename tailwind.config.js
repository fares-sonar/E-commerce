/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      colors: {
        lightRed: "var(--red)",
        lightGreen: "var(--green)",
      },
    },
  },
  plugins: [],
};
