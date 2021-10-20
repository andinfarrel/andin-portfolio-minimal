module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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
