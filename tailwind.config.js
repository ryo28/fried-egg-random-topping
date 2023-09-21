/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        LightYellow: "#FDD378",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
