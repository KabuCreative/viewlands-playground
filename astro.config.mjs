// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Viewlands Playground',
			customCss: ['./src/styles/custom.css',],
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'Home', link: '/' },
				{ 
					label: 'Image Gallery', 
					link: 'https://photos.app.goo.gl/u572zwjVaEj6E9La6', 
					attrs: { target: '_blank', rel: 'noopener' }
				},
				{
					label: 'Vision',
					items: [
						{ label: 'Project Goals / Timeline', slug: 'project-goals' },
						{ label: 'Educational Context', slug: 'education' },
					],
				},
				{
					label: 'The Plan',
					items: [
						{ label: 'Community Engagement', slug: 'community-engagement' },
						{ label: 'Natural & Built Environment', slug: 'natural-and-built-environment' },
						{ label: 'Engaging Play Experiences', slug: 'engaging-play-experiences' },
					],
				},
				{
					label: 'Support Us',
					items: [
						{ label: 'How You Can Help', slug: 'how-you-can-help' },
						{ label: 'Fundraising', slug: 'fundraising' },
						{ label: 'Our Supporters', slug: 'supporters' },
					],
				},
				// {
				// 	label: 'References',
				// 	items: [
				// 	{ label: 'Meeting Minutes', slug: 'minutes' },
				// 	],
				// },
			],
		}),
	],
});
