module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-120': 'repeat(auto-fill, minmax(120px, 1fr))'
      }
    }
  },
  variants: {},
  plugins: []
};
