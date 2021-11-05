module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#14273E',
        blue: {
          primary: '#14273E',
        },
      },
      height: {
        x: '50px',
      },
      width: {
        x: '50px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
