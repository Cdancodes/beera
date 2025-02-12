module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldDark: "#695400",
        goldMid: "#CFA500",
        defaultColor: "#000000",
        textColor: "#FFFFFF",
        footerColor: "#F6F4F2"
      },
      fontFamily: {
        grandiflora: ["Grandiflora One", "cursive"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
