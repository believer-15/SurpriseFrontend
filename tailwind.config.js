
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
        contactColor: '#837B7B',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'Helvetica', 'Arial','sans-serif'],
      },
      fontSize: {
        'm': '1rem',
        'l': '1.50rem',
        'xl': '1.75rem',
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

