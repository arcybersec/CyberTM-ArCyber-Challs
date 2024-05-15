/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        gersamtheme: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#E82A2A",
          "secondary": "#FFFFFF",
          "accent": "#222222",
          "neutral": "#1C1717",
          "base-100": "#ffffff",
          "info": "#0000ff",
          "success": "#7ee82a",
          "warning": "#e8a72a",
          "error": "#e82a2a",
        },
      },
    ],
  },  
}

