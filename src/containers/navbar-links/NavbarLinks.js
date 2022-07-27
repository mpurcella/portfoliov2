import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { navbarLinksData } from './NavbarLinksData';
import './NavbarLinks.scss';

const NavbarLinks = (props) => {
	// Sets active class for 'about' navbar link when scrolling
	const [aboutActive, setAboutActive] = useState(false);

	const handleAboutActive = () => {
		const about = document.querySelector('#about');
		const aboutTop = about.getBoundingClientRect().top;
		const aboutBottom = about.getBoundingClientRect().bottom;

		if (aboutTop > 1) {
			setAboutActive(false);
		} else if (aboutTop <= 1 && aboutBottom >= 1) {
			setAboutActive(true);
		} else if (aboutBottom < 1) {
			setAboutActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleAboutActive);

		return () => {
			window.removeEventListener('scroll', handleAboutActive);
		};
	});

	// Sets active class for 'work' navbar link when scrolling
	const [workActive, setWorkActive] = useState(false);

	const handleWorkActive = () => {
		const work = document.querySelector('#work');
		const workTop = work.getBoundingClientRect().top;
		const workBottom = work.getBoundingClientRect().bottom;

		if (workTop > 1) {
			setWorkActive(false);
		} else if (workTop <= 1 && workBottom >= 1) {
			setWorkActive(true);
		} else if (workBottom < 1) {
			setWorkActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleWorkActive);

		return () => {
			window.removeEventListener('scroll', handleWorkActive);
		};
	});

	// Sets active class for 'contact' navbar link when scrolling
	const [contactActive, setContactActive] = useState(false);

	const handleContactActive = () => {
		const contact = document.querySelector('#contact');
		const contactTop = contact.getBoundingClientRect().top;
		const contactBottom = contact.getBoundingClientRect().bottom;

		if (contactTop > 1) {
			setContactActive(false);
		} else if (contactTop <= 1 && contactBottom >= 1) {
			setContactActive(true);
		} else if (contactBottom < 1) {
			setContactActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleContactActive);

		return () => {
			window.removeEventListener('scroll', handleContactActive);
		};
	});

	// Handles 'about' scroll
	const handleAboutScroll = () => {
		const about = document.getElementById('about');
		about &&
			about.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
	};

	// Handles 'work' scroll
	const handleWorkScroll = () => {
		const work = document.getElementById('work');
		work &&
			work.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
	};

	// Handles 'contact' scroll
	const handleContactScroll = () => {
		const contact = document.getElementById('contact');
		contact &&
			contact.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
	};

	// Scrolls to section based on URL address
	useEffect(() => {
		const url = window.location.href.split('/');
		const target = url[url.length - 1].toLowerCase();
		const element = document.getElementById(target);
		element &&
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
	}, []);

	// Animates each NavLink
	const navLink1Spring = useSpring({
		from: {
			opacity: 0,
			y: -15
		},
		to: {
			opacity: 1,
			y: 0
		},
		delay: 450,
		config: {
			duration: 300
		}
	});

	const navLink2Spring = useSpring({
		from: {
			opacity: 0,
			y: -15
		},
		to: {
			opacity: 1,
			y: 0
		},
		delay: 550,
		config: {
			duration: 300
		}
	});

	const navLink3Spring = useSpring({
		from: {
			opacity: 0,
			y: -15
		},
		to: {
			opacity: 1,
			y: 0
		},
		delay: 650,
		config: {
			duration: 300
		}
	});

	return (
		<ol className={props.navbarLinksClassName}>
			<animated.li className='navbar-links-item' key={navbarLinksData[0].linkId} style={navLink1Spring}>
				<Link
					className={aboutActive ? 'navbar-links-link active' : 'navbar-links-link'}
					to={navbarLinksData[0].linkPath}
					onClick={(e) => {
						e.preventDefault();
						props.closeNavbarMenu();
						handleAboutScroll();
					}}
					tabIndex={props.tabIndex}
				>
					{navbarLinksData[0].linkName}
				</Link>
			</animated.li>
			<animated.li className='navbar-links-item' key={navbarLinksData[1].linkId} style={navLink2Spring}>
				<Link
					className={workActive ? 'navbar-links-link active' : 'navbar-links-link'}
					to={navbarLinksData[1].linkPath}
					onClick={(e) => {
						e.preventDefault();
						props.closeNavbarMenu();
						handleWorkScroll();
					}}
					tabIndex={props.tabIndex}
				>
					{navbarLinksData[1].linkName}
				</Link>
			</animated.li>
			<animated.li className='navbar-links-item' key={navbarLinksData[2].linkId} style={navLink3Spring}>
				<Link
					className={contactActive ? 'navbar-links-link active' : 'navbar-links-link'}
					to={navbarLinksData[2].linkPath}
					onClick={(e) => {
						e.preventDefault();
						props.closeNavbarMenu();
						handleContactScroll();
					}}
					tabIndex={props.tabIndex}
				>
					{navbarLinksData[2].linkName}
				</Link>
			</animated.li>
		</ol>
	);
};

export default NavbarLinks;
