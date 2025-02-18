/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgdark: "#1B1A17", // Softer dark shade for a refined contrast
        bgcolor: "#EDDDC6", // Primary beige theme color
        bgfooter: "#3B2F2F", // Warm deep brown for a rich footer
        glassblue: "#C8B6A6", // Translucent warm tint
        glasswhite: "#FAF3E0", // Light creamy glass effect
        primary: "#3E2723", // Deep brown for strong accents
        primarylight: "#6E4F3A", // Softer brown for subtle elements
        primarycat: "#9D826F", // Muted warm brown for category sections
        heading: "#5E4436", // Elegant brown with a slight vintage tone
        popupbg: "#A8907A", // Warm nude for pop-ups
        primarygcat2: "#D9B08C", // Soft warm tone for product categories
        branddeepblue: "#574E42", // Muted deep neutral tone
        brandlightcyan: "#F5EFE6", // Off-white with a warm undertone
        brandBlue: "#3B2F2F", // Darker brown, keeping depth
        brandPurplelight: "#EADBC8", // Soft, warm, and elegant pastel beige
        brandWhite: "#FDF8F3", // A refined off-white for a luxe feel
      },
      width: {
        '0': '0px',
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
