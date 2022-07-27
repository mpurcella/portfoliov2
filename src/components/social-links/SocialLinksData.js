import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const socialLinksData = [
	{
		linkIcon: <FiGithub />,
		linkPath: 'https://github.com/mpurcella',
		linkAriaLabel: 'Github',
		linkId: 1
	},
	{
		linkIcon: <FiLinkedin />,
		linkPath: 'https://www.linkedin.com/in/mpurcella/',
		linkAriaLabel: 'LinkedIn',
		linkId: 2
	},
	{
		linkIcon: <FiInstagram />,
		linkPath: 'https://www.instagram.com/mpurcella',
		linkAriaLabel: 'Instagram',
		linkId: 3
	},
	{
		linkIcon: <FiMail />,
		linkPath: 'mailto:mjpurcella@gmail.com',
		linkAriaLabel: 'Email',
		linkId: 4
	}
];

export { socialLinksData };
