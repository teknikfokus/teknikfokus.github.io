const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        short: { raw: "(max-height: 800px)" },
      },
      colors: {
        teknikfokus: {
          50: "hsl(213, 60%, 97%)",
          100: "hsl(213, 63%, 94%)",
          200: "hsl(209, 61%, 86%)",
          300: "hsl(208, 61%, 74%)",
          400: "hsl(207, 59%, 60%)",
          500: "hsl(208, 56%, 48%)",
          600: "hsl(209, 62%, 39%)",
          700: "hsl(210, 61%, 32%)",
          800: "hsl(210, 57%, 27%)",
          900: "hsl(211, 51%, 24%)",
          950: "hsl(213, 51%, 16%)",
        },
        primary: "var(--color-primary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
