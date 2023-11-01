/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      primary: "#CCCCCC",
      primarydark: "#B8B8B8",
      primarylight: "#F5F5F5",
      secondary: "#3D3D3D",
      secondarylight: "#525252",
      background: "#FFFFFF",
    },
  },
  plugins: [require("preline/plugin")],
};