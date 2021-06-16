module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Work Sans'],
      'body': ['Montserrat']
    },
    transitionProperty: {
      'max-height': 'max-height',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
