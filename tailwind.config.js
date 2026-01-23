// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#050816",
//         secondary: "#aaa6c3",
//         tertiary: "#151030",
//         "black-100": "#100d25",
//         "black-200": "#090325",
//         "white-100": "#f3f3f3",
//       },
//       boxShadow: {
//         card: "0px 35px 120px -15px #211e35",
//       },
//       screens: {
//         xs: "450px",
//       },
//       backgroundImage: {
//         "hero-pattern": "url('/src/assets/herobg.png')",
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0e27",
        secondary: "#94a3b8",
        tertiary: "#1e293b",
        "black-100": "#0f172a",
        "black-200": "#020617",
        "white-100": "#f1f5f9",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
