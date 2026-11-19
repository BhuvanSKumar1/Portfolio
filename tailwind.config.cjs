// Tailwind CSS v4 configuration for futuristic dark theme
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a0a", // near-black background
        "accent-violet": "#8b5cf6",
        "accent-blue": "#3b82f6",
        "foreground": "#D1D5DB", // soft white for body text
        "heading": "#FFFFFF", // bright white for headings
        "secondary": "#A1A1AA", // lighter gray for secondary text
        "foreground": "#374151", // dark gray for body text
        "heading": "#111827", // dark charcoal for headings
        "secondary": "#4B5563", // secondary text
        "highlight": "#5B21B6", // rich violet for specialization
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        "foreground": "#374151", // dark gray for body text
        "heading": "#111827", // dark charcoal for headings
        "secondary": "#4B5563", // secondary text
        "highlight": "#5B21B6", // rich violet for specialization
      },
    },
  },
  plugins: [],
};

