module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
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
