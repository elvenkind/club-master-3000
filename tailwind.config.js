/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#360185',
        secondary: '#8F0177',
        accent: '#DE1A58',
        highlight: '#F4B342',
      },
    },
  },
  plugins: [],
}
