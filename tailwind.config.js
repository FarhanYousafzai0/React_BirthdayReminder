/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all component files in your React app
      "./public/index.html",        // Include the main HTML file
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1d4ed8",  // Custom primary color
          secondary: "#9333ea", // Custom secondary color
          accent: "#f59e0b",   // Accent color
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Adding Inter font
          serif: ["Merriweather", "serif"], // Adding Merriweather font
        },
        spacing: {
          "128": "32rem", // Custom spacing value
          "144": "36rem",
        },
        borderRadius: {
          "4xl": "2rem", // Custom border radius
        },
        animation: {
          pingSlow: "ping 2s linear infinite", // Custom animation
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),        // Plugin for better form styling
      require("@tailwindcss/typography"),  // Plugin for typography utilities
      require("@tailwindcss/aspect-ratio"), // Plugin for aspect ratios
    ],
  };
  