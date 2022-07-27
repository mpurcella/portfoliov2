import React from 'react';
import { useSpring, animated } from 'react-spring';
import About from '../../components/sections/about/About';
import Contact from '../../components/sections/contact/Contact';
import Hero from '../../components/sections/hero/Hero';
import Work from '../../components/sections/work/Work';
import SocialLinks from '../../components/social-links/SocialLinks';
import Email from '../../components/email/Email';
import './Home.scss';

const Home = () => {
	// Animates "aside" elements
	const asideSpring = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		},
		delay: 1500,
		config: {
			duration: 300
		}
	});

	return (
		<main className='main'>
			<Hero />
			<About />
			<Work />
			<Contact />
			<animated.div className='side-social-links' style={asideSpring}>
				<SocialLinks socialLinksClassName='social-links-list aside-social' />
			</animated.div>
			<animated.div className='side-email' style={asideSpring}>
				<Email />
			</animated.div>
		</main>
	);
};

export default Home;
