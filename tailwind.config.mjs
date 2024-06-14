/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#1E3A8A',  // Your primary blue color
		  secondary: '#FFFFFF', // White color
		},
		gradientColorStops: theme => ({
		  ...theme('colors'),
		  'gradient-blue': '#3B82F6',
		  'gradient-lightblue': '#60A5FA',
		}),
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		  },
	  },
	},
	plugins: [],
  }
  