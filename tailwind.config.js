module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: "#0A0F2A",
        cyan: {
          400: "#00F0FF",
        },
        pink: {
          500: "#FF2D75",
        },
        purple: {
          500: "#7B4DFF",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 10px #00F0FF, 0 0 20px rgba(0, 240, 255, 0.3)",
        "neon-pink": "0 0 10px #FF2D75, 0 0 20px rgba(255, 45, 117, 0.3)",
      },
    },
  },
  plugins: [],
};