/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#FACC15",
        cardbg: "#F3F4F6",
        border: "#E5E7EB",
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
      },
    },
  },
  plugins: [],
}

