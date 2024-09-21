/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this according to your project structure
    "./public/index.html", // Include any other paths where you might use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'gray-70': '#b0b0b0', // Example custom color
      },
    },
  },
  plugins: [],
}
