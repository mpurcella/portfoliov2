import HeartLineImage from '../../images/project-images/heart-line.jpeg';
import JukeboxMonkeyRecordsImage from '../../images/project-images/jukebox-monkey-records.jpeg';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaSass, FaBootstrap } from 'react-icons/fa';
import { IoLogoReact } from 'react-icons/io5';
import { DiHtml5, DiJavascript1, DiJqueryLogo } from 'react-icons/di';

const projectCardData = [
	{
		projectName: 'Heart Line',
		projectPath: 'https://mpurcella.github.io/artist-page-v2-react/',
		projectImage: HeartLineImage,
		projectImageAlt: 'Heart Line Home Page',
		projectYear: "'21",
		projectTags: [
			{
				technology: 'React',
				icon: <IoLogoReact />,
				projectTagClassName: 'project-tags-item react',
				id: 1
			},
			{
				technology: 'SCSS',
				icon: <FaSass />,
				projectTagClassName: 'project-tags-item scss',
				id: 2
			}
		],
		projectDescriptionTop:
			'This project was created to gain experience working with React and to explore its many features and subtleties - from initializing and setting states, to passing props, to utilizing hooks, to creating a dynamic routing system and easily navigable website.',
		projectDescriptionBottom:
			'As a musician, I have always dreamed of writing, recording, and releasing an album. That dream was the inspiration for this website.',
		projectLinks: [
			{
				icon: <FiGithub />,
				path: 'https://github.com/mpurcella/artist-page-v2-react',
				ariaLabel: 'Heart Line Github Repository',
				id: 1
			},
			{
				icon: <FiExternalLink />,
				path: 'https://mpurcella.github.io/artist-page-v2-react/',
				ariaLabel: 'Heart Line Website',
				id: 2
			}
		],
		id: 1
	},
	{
		projectName: 'Jukebox Monkey Records',
		projectPath: 'https://mpurcella.github.io/jukebox-monkey-records/',
		projectImage: JukeboxMonkeyRecordsImage,
		projectImageAlt: 'Jukebox Monkey Records Home Page',
		projectYear: "'21",
		projectTags: [
			{
				technology: 'HTML',
				icon: <DiHtml5 />,
				projectTagClassName: 'project-tags-item html',
				id: 1
			},
			{
				technology: 'JavaScript',
				icon: <DiJavascript1 />,
				projectTagClassName: 'project-tags-item javascript',
				id: 2
			},
			{
				technology: 'jQuery',
				icon: <DiJqueryLogo />,
				projectTagClassName: 'project-tags-item jquery',
				id: 3
			},
			{
				technology: 'SCSS',
				icon: <FaSass />,
				projectTagClassName: 'project-tags-item scss',
				id: 4
			},
			{
				technology: 'Bootstrap',
				icon: <FaBootstrap />,
				projectTagClassName: 'project-tags-item bootstrap',
				id: 5
			}
		],
		projectDescriptionTop:
			'This project was created to utilize the various layouts, components, forms, and utilities that Bootstrap provides to develop a fully responsive and user-friendly website. Using JavaScript to manipulate the DOM, I implemented e-commerce functionality.',
		projectDescriptionBottom:
			'Music is one of the biggest passions in my life, and I wanted to celebrate that by making a website to showcase artists and their work.',
		projectLinks: [
			{
				icon: <FiGithub />,
				path: 'https://github.com/mpurcella/jukebox-monkey-records',
				ariaLabel: 'Jukebox Monkey Records Github Repository',
				id: 1
			},
			{
				icon: <FiExternalLink />,
				path: 'https://mpurcella.github.io/jukebox-monkey-records/',
				ariaLabel: 'Jukebox Monkey Records Website',
				id: 2
			}
		],
		id: 2
	}
];

export { projectCardData };
