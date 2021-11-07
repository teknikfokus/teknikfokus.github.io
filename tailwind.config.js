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
        screen30: '30vh',
        screen40: '40vh',
        screen50: '50vh',
        screen60: '60vh',
        screen70: '70vh',
        screen80: '80vh',
        screen90: '90vh',
        "1/10": '10%',
      },
      width: {
        x: '50px',
      },
      maxWidth: {
        "xxs": '12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
