/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
    'Bebas-Neue':["Bebas Neue",'serif'],
    'Lato':["Lato",'serif'],
    'Playfair-Display':["Playfair Display",'serif'],
    'Montserrat':['Montserrat','serif'],
      'Nunito':['Nunito','serif'],
      'Lora':['Lora','serif'],
      'GothicA1':['Gothic A1','serif'],
      'Hanken-Grotesk':['Hanken Grotesk','serif'],
  },
  colors: {
    'mustard':{
     '100':"#FFD447",
     '200':"#fcbe11",
    },
    'night':"#121113",
    'lavender-bush':"#EEEEEE",
  },
    extend: {
      gridAutoRows: {
      '2fr': 'minmax(0, 2fr)',
    },
  },
  },
  plugins: [],
}

