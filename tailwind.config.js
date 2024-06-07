/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin::-webkit-scrollbar": {
          width: "8px",
        },
        ".scrollbar-thin::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "10px",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },

        ".scrollbar-medium::-webkit-scrollbar": {
          width: "12px",
        },
        ".scrollbar-medium::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        ".scrollbar-medium::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "10px",
        },
        ".scrollbar-medium::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
