const { animation } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bouncex: "bouncex .5s ease-in-out 2",
      },
      colors: {
        mainBlack: "#151110",
        beige: "#faf9f7",
        darkBeige: "#f7f2ef",
        primaryBtn: "#d98f89",
        green: {
          100: "#d8f3dc",
          200: "#b7e4c7",
          300: "#95d5b2",
          400: "#74c69d",
          500: "#52b788",
          600: "#40916c",
          700: "#3b625f",
          800: "#1b4332",
          900: "#081c15",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "2xl": "1.365rem",
      },
      height: {
        "50v": "50vh",
      },

      keyframes: {
        bouncex: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(.5rem)",
          },
        },
      },
      margin: {
        "-100": "-100%",
      },
      padding: {
        "9/16": "56.25%",
        "1/3": "34.3333%",
      },
      screens: {
        mobile: "375px",
      },
      transitionProperty: {
        visibility: "visibility",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "1rem",
      lg: "2rem",
      full: "9999px",
      regular: "4rem",
    },

    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
    },
  },
  variants: {
    extend: {
      stroke: ["hover", "focus"],
      margin: ["last"],
    },
  },
  plugins: [],
};
