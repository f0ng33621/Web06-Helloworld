/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary1: "#A8D18D;",
        primary2: "#F392A9;",
        primary3: "#FBC5C5;",
        primary4: "#60405C;",
        primary5: "#FDEEE7;",
      },
    },
  },
  plugins: [],
};
