/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.html', './src/**/*.js'],
    theme: {
    extend: {
    screens: {
        xs: "480px",
        sm: "635px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
    },
    },
    },
    plugins: [],
};
