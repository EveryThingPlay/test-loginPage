/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',

		'./error.vue',
	],
	theme: {
		colors: {
			primary: '#6172F3',
			secondary: '#8098F9',
			main: '#F5F8FF',
			light: '#E0EAFF',
			separator: '#71717A',
			placeholder: '#2D31A633',
			...colors,
		},
		fontFamily: {
			sans: ['"Montserrat"', 'sans-serif'],
			'sans-ui': ['"Inter"', 'sans-serif'],
		},
	},
	plugins: [],
};
