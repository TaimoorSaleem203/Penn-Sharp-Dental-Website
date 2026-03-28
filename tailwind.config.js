/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {

      colors: {
        primary: "#93CDF5",
        secondary: "#E9F6FF",
        header: "#4594D9",
        text: "#63ABE6",
        side: "#1E2326",
        surface: "#FAFEFE",
      },
      fontFamily: {
        primary: ["Lato", "sans-serif"],
      },

      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["28px", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5" }],
      },

      spacing: {
        section: "80px",
        container: "1200px",
      },

      borderRadius: {
        primary: "12px",
        secondary: "20px",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        button: "0 4px 14px rgba(69, 148, 217, 0.4)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        400: "400ms",
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1200px",
        },
      },


    },
  },
  plugins: [],
};