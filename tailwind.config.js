/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#8BB5C9',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'Helvetica', 'Arial','sans-serif'],
      },
      fontSize: {
        'xl': '1rem',
        '4xl': '2.0rem',
      },
      fontWeight: {
        bold: 700,
      },
      fontStyle: {
        normal: 'normal',
      },
    },
  },
  plugins: [],
}

