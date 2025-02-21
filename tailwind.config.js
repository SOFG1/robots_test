// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        dark: "#11103C",
        light: "#EDEFFB",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}