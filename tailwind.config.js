/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
            survey: '#F4F2E9', // Your specific hex color
          },
      },
    },
    plugins: [],
  }