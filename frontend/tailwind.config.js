module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "760px",
      // => @media (min-width: 760px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "20px",
        md: "20px",
        lg: "0rem",
        xl: "0rem",
        "2xl": "0rem",
        "3xl": "0rem",
      },
    },
    extend: {
      keyframes: {},
      animation: {},
      colors: {
        mgray: {
          50: "#fafafa",
          100: "#F5F5F5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        orange: {
          50: "#fbefe6",
          100: "#f9e6d9",
          200: "#f3ccb0",
          300: "#eeb58c",
          400: "#eaa675",
          500: "#EA6506",
          600: "#d95b00",
          700: "#c35200",
          800: "#ae4900",
          900: "#4c2000",
        },
        red: {
          50: "#fdecec",
          100: "#fac5c5",
          200: "#f8a9a9",
          300: "#f48282",
          400: "#f26969",
          500: "#ef4444",
          600: "#d93e3e",
          700: "#aa3030",
          800: "#832525",
          900: "#641d1d",
        },
        blue: {
          200: "#c1dceb",
          600: "#6690a3",
        },
        theme: {
          200: "#F2F2F2",
          300: "#c9c6bd",
          400: "#d0c0b1",
          500: "#BFC4C0",
          600: "#C09573",
          700: "#B1926D",
          800: "#424A54",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "760px",
          },
          "@screen lg": {
            minWidth: "80%",
          },
          "@screen xl": {
            maxWidth: "1160px",
          },
          "@screen 2xl": {
            maxWidth: "1160px",
          },
          "@screen 3xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
