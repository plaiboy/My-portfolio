module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fffdf9",
          200: "#f0ebeb",
          800: "#4d4d4d",
          900: "#212121",
          "50_01": "#fefafa",
          "900_ad": "#1e1515ad",
          "50_68": "#fffdf968",
          "50_02": "#fafafa",
        },
        black: { "900_2b": "#0201012b" },
        blue: { 700: "#2270e2" },
        green: { 400: "#49a078" },
        deep_orange: { "600_2b": "#ec5d2a2b" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { playfairdisplay: "Playfair Display", poppins: "Poppins" },
      boxShadow: { bs: "0px 0px  45px 0px #f0ebeb" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
