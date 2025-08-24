/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ switch between light & dark mode with a class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkblue: "#003366",   // Primary
          brightblue: "#1BA3E2", // Secondary
          teal: "#40E0D0",       // Accent
          white: "#FFFFFF",      // Neutral
        },
      },
    },
  },
  plugins: [],
};
