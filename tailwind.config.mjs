/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'agdasima':["Agdasima","sans-serif"]
			},
			colors:{
				primary:"#fead12",
				secondary:"#d70101"
			}
			
		},
	},
	plugins: [],
}
