module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "white": "#E7E7EB",
      "gray": "#6E707A",
      "light-gray": "#A09FB1",
      "black": "#100E1D",
      "dark-blue": "#1E213A",
    },
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
