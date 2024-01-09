module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      borderWidth: {
        '6': '6px',  // Custom width for the general border
        '12': '28px' // Custom width for the thicker bottom border
      },
      borderColor: {
        'classic-white': '#ffffff', // Ensuring white is available
      },
      borderColor: {
        'classic-white': '#ffffff', // Ensuring white is available
      },
      colors: {
        primary: '#14273E',
        blue: {
          "primary-lightest": '#516e9c',
          "primary-light": '#223959',
          "primary": '#14273E',
          "primary-trans": 'rgba(20, 39, 62, 0.7)',
        },
        gray: {
          "trans": 'rgba(156, 163, 175, 0.4)',
          "normal": '#D8DADF',
          
        },
        blackTrans : {
          "trans": 'rgba(0, 0, 0, 0.4)',
        },
        test: {
          te: '#51569C'
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

