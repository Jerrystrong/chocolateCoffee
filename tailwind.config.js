/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing:{
        '.5':'14px',
        '1':'16px',
        '2':'18px',
        '3':'24px',
        '4':'32px',
        '4.5':'42px',
        '5':'56px',
        '6':'62px',
        '10':'100px',
        '25':'25%',
        '100':'100%'
      },
      colors:{
        'primary':'#7b593a',
        'secondary':'#075E54 '
      }
    }
  },
  plugins: []
}
