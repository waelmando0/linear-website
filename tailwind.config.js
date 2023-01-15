/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: '"SF Pro Display", -apple-system,BilnkMacSystemFont, "Segoe UI",Robot,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue", Sans-serif',
			},
			fontSize: {
				md: '1.6rem',
				lg: '2.2rem',
				'5xl': '8rem',
			},
			colors: {
				background: '#000212',
			},
		},
	},
	plugins: [],
};
