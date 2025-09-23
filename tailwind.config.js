/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "tektur-extrabold": ["Tektur-ExtraBold"],
        "tektur-semibold":["Tektur-SemiBold"],
        "tektur-medium":["Tektur-Medium"],
        "tektur-regular":["Tektur-Regular"],


        "inter-medium":["Inter_18pt-Medium"],
        "inter-semibold":["Inter_18pt-SemiBold"],
        "inter-regular":["Inter_18pt-Regular"]
      }
    },
  },
  plugins: [],
}