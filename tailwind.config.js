/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black-russian': '#0b0c10',
      bunker: '#202833',
      'glacier-gray': '#c5c6c8',
      'light-cyan': '#66fcf1',
      malachite: '#46a29f'
    }
  },
  plugins: []
}
