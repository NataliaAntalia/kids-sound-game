// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                pulseCustom: {
                    '0%, 100%': {
                        boxShadow: '0 0 0 0 var(--pulse-color)',
                    },
                    '50%': {
                        boxShadow: '0 0 0 8px var(--pulse-color)',
                    },
                },
            },
            animation: {
                pulseCustom: 'pulseCustom var(--duration, 1.5s) ease-out infinite',
            },
        },
    },
    plugins: [],
};
