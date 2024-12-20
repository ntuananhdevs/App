/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "media",
  safelist: ["isToggled"],
  theme: {
      fontFamily: {
          sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
          mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
      },
      extend: {
          colors: ({ colors }) => ({
              primary : colors.blue,
              danger : colors.rose,
              warning : colors.yellow,
              success : colors.lime,
              info : colors.blue,
              gray : colors.zinc,
          }),
      }
      
  },
  plugins: [],
}

