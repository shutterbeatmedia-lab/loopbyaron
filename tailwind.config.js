/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#fdf6ec',
          100: '#f8e5c5',
          200: '#f0c989',
          300: '#e4a64e',
          400: '#cc8028',
          500: '#ae6518',
          600: '#924e12',
          700: '#723b0c',
          800: '#522a08',
          900: '#341a05',
        },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
