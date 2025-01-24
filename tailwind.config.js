/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        peacoat: "#34313D",
        darkByzantineBlue: "#3A3054",
        oldHeliotrope: "#4B3F6B",
        manatee: "#9E9AA8",
        ghostWhite: "#EFF1F7",
        darkTurquoise: "#2BD0D0",
        footerBg: "#232127",
        footerLinks: "#BFBFBF",
      },
      backgroundImage: {
        "shorten-mobile": "url('../images/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('../images/bg-shorten-desktop.svg')",
        "boost-mobile": "url('../images/bg-boost-mobile.svg')",
        "boost-desktop": "url('../images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
