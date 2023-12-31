/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue1: "#305fac",
        primaryBlue2: "#5483d0",
        primaryBlue3: "#173056",
        primaryGrey1: "#d6d9e4",
        primaryGrey2: "#646d89",
        primaryOrange1: "#E44A0C",
        primaryOrange2: "#FF7037",
        primaryOrange3: "#FF986F",
        primaryOrange4: "#FFB899",
        primaryOrange5: "#FFD5C2",
        primaryOrange6: "#FFF1EC",
        secondaryYellow1: "#FFCA62",
        secondaryYellow2: "#FFF5EC",
        secondaryBlue1: "#76D0FC",
        secondaryBlue2: "#ECFBFF",
        secondaryGreen1: "#1CCD83",
        secondaryGreen2: "#E7FDF4",
        secondaryPink1: "#FABAC0",
        secondaryPink2: "#FFF0F1",
        secondaryEtc1: "#000000",
        secondaryEtc2: "#F6F6F9",
        secondaryEtc3: "#EA1010",
      },
      boxShadow: {
        custom1:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        custom2:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        custom3: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        custom4: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
      },
      fontSize: {
        headLine1: ["56px", { lineHeight: "64px", fontWeight: "700" }],
        headLine2: ["36px", { lineHeight: "44px", fontWeight: "700" }],
        headLine3: ["24px", { lineHeight: "32px", fontWeight: "700" }],
        headLine4: ["18px", { lineHeight: "32px", fontWeight: "700" }],
        headLine5: ["16px", { lineHeight: "32px", fontWeight: "700" }],
        body1: ["18px", { lineHeight: "26px", fontWeight: "500" }],
        body2: ["16px", { lineHeight: "28px", fontWeight: "500" }],
        body3: ["14px", { lineHeight: "24px", fontWeight: "500" }],
        display: ["88px", { lineHeight: "96px", fontWeight: "900" }],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
