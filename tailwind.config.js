module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        700: "hsl(245, 84%, 61%)",
        900: "hsl(227, 64%, 14%)",
      },
      secondary: {
        700: "hsl(4, 100%, 85%)",
        900: "hsl(326, 100%, 84%)",
      },
      sky: {
        700: "hsl(169, 92%, 70%)",
      },
      black: {
        700: "hsl(0, 0%, 0%)",
        600: "hsla(0, 0%, 9%)",
        200: "hsl(0, 0%, 66%)",
        0: "hsl(0, 0%, 100%)",
      },
    },
    fontSize: {
      xs: [
        "14px",
        {
          lineHeight: "17px",
        },
      ],
      "xs.2.0": [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      sm: [
        "16px",
        {
          lineHeight: "20px",
        },
      ],
      md: [
        "18px",
        {
          lineHeight: "22px",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "31px",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "36px",
        },
      ],
      "2xl": [
        "40px",
        {
          lineHeight: "49px",
        },
      ],
      "3xl": [
        "48px",
        {
          lineHeight: "59px",
        },
      ],
      "3.1xl": [
        "22px",
        {
          lineHeight: "27px",
        },
      ],
      "4xl": [
        "53px",
        {
          lineHeight: "80px",
        },
      ],
      "4.1xl": [
        "22px",
        {
          lineHeight: "27px",
        },
      ],
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
