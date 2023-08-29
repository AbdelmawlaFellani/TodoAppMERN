/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xxs: '5px'
      },
      fontFamily:{
        GameTitle : 'PressStart2P',
        GameText :  'Silkscreen'
      },
      colors: {
        transparent: 'transparent',
        colortext: '#1e3445',
        colorbtn : '#F68361'
      } 
    },
  },
  plugins: [],
}