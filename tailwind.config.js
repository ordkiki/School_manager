/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Les fichiers React
    "./node_modules/flowbite/**/*.js" // Les fichiers Flowbite
  ],
  theme: {
    extend: {}, // Vos personnalisations
  },
  plugins: [
    require('flowbite/plugin') // Importez le plugin Flowbite
  ],
}
