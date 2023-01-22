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
			colors: {
				white: '#fff',
				background: '#000212',
			},
			spacing: {
				0: '0',
				1: '0.4rem',
				2: '0.8rem',
				3: '1.2rem',
				4: '1.6rem',
				5: '2rem',
				6: '2.4rem',
				7: '2.8rem',
				8: '3.2rem',
				9: '3.6rem',
				10: '4rem',
				11: '4.4rem	',
				12: '4.8rem	',
			},
		},
	},
	plugins: [],
};
