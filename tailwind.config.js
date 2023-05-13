module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      margin: {
        320: "320px",
      },
      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      screens: {
        xs: '300px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        
      },
      colors: {
        navBar: "#1d1e25",
        primary: "#121316",
        textBase: "#8f9091",
        grad: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(#F1F9F5  2px,#121316 5px , #121316 50px)',
        circularDark: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F1F9F5  5px , #F1F9F5  50px)',
        circularDarksm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F1F9F5  5px , #F1F9F5  30px)'
      }
    },
  },
  plugins: [],
};