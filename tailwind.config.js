/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "upskill-blue": "#100531",
                "upskill-gray": "#ececf1",
                "upskill-blue-light": "#541FEB",
                "upskill-red": "#FF2222",
                "upskill-orange": "#F56122",
                "upskill-green": "#21A201",
            },
        },
    },
    plugins: [],
};
