const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.{md,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
