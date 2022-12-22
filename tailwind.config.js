module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#14273E',
        blue: {
          "primary-lightest": '#516e9c',
          "primary-light": '#223959',
          "primary": '#14273E',
          "primary-trans": 'rgba(20, 39, 62, 0.7)',
        },
        gray: {
          "trans": 'rgba(156, 163, 175, 0.4)'
        }
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
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
