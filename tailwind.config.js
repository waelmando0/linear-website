/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontSize: {
				xl: '1.38rem',
				'7xl': '5rem',
			},
			colors: {
				white: '#fff',
				background: '#000212',
				'custom-border': 'rgba(255, 255, 255, 0.08)',
				gray: '#858699',
				'gray-dark': '#222326',
				'primary-text': '#b4bcd0',
				offWhite: '#f7f8f8',
				'border-white': 'rgba(255, 255, 255, 0.08)',
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
				'navigation-height': 'var(--navigation-height)',
			},
			backgroundImage: {
				'primary-gradient':
					'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
				'page-gradient':
					'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)',
			},
			transitionDelay: {
				0: '0ms',
			},
			keyframes: {
				'fade-in': {
					from: { opacity: 0, transform: 'translateY(-10px)' },
					to: { opacity: 1, transform: 'none' },
				},
			},
			animation: {
				'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
			},
		},
	},
	plugins: [],
};
