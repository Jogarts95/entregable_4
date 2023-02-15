/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      font: {
        colorPrimaryFont: '#5C8EF2',
        colorSecundaryFont: '#99E9F2',
        colorTertiaryFont: '#F2E96D',
        colorFourthFont: '#F2EC9B',
      },
      background: {
        backgroundColor: '#0F1926',
        colorPrimary: '#5C8EF2',
        colorSecundary: '#99E9F2',
        colorTertiary: '#F2E96D',
        colorFourth: '#F2EC9B',
      },

    },
    fontFamily: {
      primaryFont: ['Roboto', 'sans-serif'],
      secundaryFont: ['Noto Sans', 'sans-serif']
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
    },

  },
  plugins: [],
}
