/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        inner: "740px",
      },
    },
    colors: {
      white: "#fff",
      transparent: "rgba(0, 0, 0, 0)",
      dark: "#230505",
      blue: "#1F5069",
      blue100: "#1C809A",
      blue300: "#5495EF",
      blue400: "#2375A0",
      blue500: "#5694f2",
      blue600: "#3063AB",
      ocean: "#d2dce1",
      green: "#30C69D",
      green100: "#1AC7A4",
      green300: "#19C8A2",
      green500: "#00A983",
      green600: "#26A8A4",
      green700: "#07886A",
      grey: "#FAFAFA",
      brown500: "#C89719",
      pink500: "#F2568E",
      violet500: "#3C19C8",
      red: "red",
      red500: "#FF2A2A",
      current: "currentColor",
      inherit: "inherit",
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateY(0)", opacity: "70%" },
        "100%": { transform: "translateY(8px)", opacity: "10%" },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      lp: "768px",
      // => @media (min-width: 768px) { ... }

      dp: "1100px",
      // => @media (min-width: 1100px) { ... }

      dpb: "1461px",
      // => @media (min-width: 1461px) { ... }

      large: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
