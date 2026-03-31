// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Covers all files inside the 'app' directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Covers all files inside the 'components' directory
    // Add any other folders where you store components or pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}