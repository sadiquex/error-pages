/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: "#d9bb7f",
        mediumBrown: "#5e4d2a",
        darkBrown: "#6c4e1a",
        mediumGreen: "#049a37",
        darkAsh: "#202020",
        orangeYellow: "#fdae1d",
      },
      fontFamily: {
        // usege (font-fontDaysOne)
        daysOne: ["var(--fontDaysOne)"],
      },
    },
  },
  plugins: [],
};
