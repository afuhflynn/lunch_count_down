/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "grayish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(235, 16%, 14%)",
        "very-ddark-blue": "hsl(234, 17%, 12%)",
        "black-low": "rgba(255, 255, 255, 0.08)",
      },
      fontSize: {
        main: "14px",
      },
      fontFamily: {
        main: "red-hat-text, sans-serif, poppins",
      },
      fontWeight: {
        main: "700",
      },
      backgroundImage: {
        pattern: "var(--pattern-bg)",
        stars: "var(--bg-stars)",
      },
    },
  },
  plugins: [],
};
