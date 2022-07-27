import React from 'react';
import SocialLinks from '../social-links/SocialLinks';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<SocialLinks socialLinksClassName='social-links-list footer-social' />
			<a
				href='https://github.com/mpurcella/portfoliov2'
				className='footer-text-link'
				target='_blank'
				rel='noopener noreferrer'
			>
				Designed &amp; Built by Mike&nbsp;Purcella
			</a>
		</footer>
	);
};

export default Footer;
