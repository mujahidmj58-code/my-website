/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#142033",
        coal: "#041A3D",
        mist: "#F7F9FD",
        moss: "#0A4DB3",
        fern: "#FFC62F",
        coral: "#F2A900",
        skyglass: "#E8F1FF",
        royal: "#0646AD",
        pearl: "#FFFFFF",
        mint: "#FFE8A3"
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Marcellus", "Manrope", "ui-sans-serif", "system-ui"],
        brand: ["Syne", "Manrope", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(4, 26, 61, 0.11)",
        lift: "0 30px 90px rgba(4, 26, 61, 0.23)"
      }
    }
  },
  plugins: []
};
