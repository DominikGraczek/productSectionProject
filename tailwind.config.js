/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // Use import instead of require

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: false,
  plugins: [daisyui], // Use the imported plugin here
};
