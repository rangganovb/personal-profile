/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Warna Utama dari Desain Figma
      colors: {
        "dark-blue": "#232946",
        "grayish-blue": "#5A5F73",
        "primary-purple": "#7755FF",
        "primary-pink": "#FF54B0",
        "border-gray": "#E5E7EB",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #E0EAFE 0%, #F9E5FF 100%)",
        "btn-gradient": "linear-gradient(90deg, #7755FF 0%, #FF54B0 100%)",
      },
    },
  },
  plugins: [],
};
