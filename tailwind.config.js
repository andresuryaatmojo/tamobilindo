/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1A2238",
          light: "#2E3C5F",
          dark: "#0F172A",
        },
        secondary: {
          DEFAULT: "#9DAAF2",
          light: "#BFCBFF",
          dark: "#7E8CE0",
        },
        accent: {
          DEFAULT: "#21E6C1",
          light: "#5FFFE4",
          dark: "#1BC2A1",
        },
        neutral: {
          DEFAULT: "#F3F4F6", // gray-100
          light: "#FFFFFF",   // white
          dark: "#6B7280",    // gray-500
        },
        text: {
          DEFAULT: "#1F2937", // gray-800
          light: "#6B7280",   // gray-500
          inverted: "#FFFFFF", // white
        },
        status: {
          success: "#10B981", // green-500
          warning: "#F59E0B", // amber-500
          error: "#EF4444",   // red-500
          info: "#3B82F6",    // blue-500
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
