/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',  
  ],
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#EC441E'
        },
        gray: {
          50: '#F9FBFA'
        }
      }
    },
  },
  plugins: [ require('tailwindcss-rtl')]
}
