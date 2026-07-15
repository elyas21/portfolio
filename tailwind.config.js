/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // semantic tokens backed by CSS variables
        surface:    "var(--color-surface)",
        "surface-2":"var(--color-surface-2)",
        "surface-3":"var(--color-surface-3)",
        ink:        "var(--color-ink)",
        "ink-2":    "var(--color-ink-2)",
        "ink-3":    "var(--color-ink-3)",
        border:     "var(--color-border)",
        accent:     "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        // keep legacy names mapped to variables so existing classes still work
        primary:    "var(--color-surface)",
        secondary:  "var(--color-ink-2)",
        tertiary:   "var(--color-surface-3)",
        "black-100":"var(--color-surface-2)",
        "black-200":"var(--color-surface)",
        "white-100":"var(--color-ink)",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 32px 0 rgba(99,102,241,0.10)",
        "card-light": "0 4px 32px 0 rgba(99,102,241,0.08)",
      },
      screens: { xs: "450px" },
    },
  },
  plugins: [],
};
