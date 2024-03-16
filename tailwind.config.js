/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primaryBlue : '#1F203E',
                secondaryYellow : '#FFD166',
                lightMode : '#D4DCE6',
                darkMode : '#0F101E',
              },
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}