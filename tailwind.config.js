/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        mobile: "375px",
        dekstop: "1440px",
      },
      fontSize: {
        base: "20px",
        title: "1.6rem",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        White: "hsl(0, 0%, 100%)",
        LightGray: "hsl(212, 45%, 89%)",
        GrayishBlue: "hsl(220, 15%, 55%)",
        DarkBlue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
