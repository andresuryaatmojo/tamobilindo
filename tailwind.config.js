/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#1A2238",
        secondary: "#9DAAF2",
        accent: "#21E6C1",
        text: "#22223B",
        muted: "#9A9A9A",
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
