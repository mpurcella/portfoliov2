import React, { useState, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import { useSpring, animated } from 'react-spring';
import ScrollListener from '../scroll-listener/ScrollListener';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavbarMenuButton from '../../components/navbar-menu-button/NavbarMenuButton';
import NavbarMenu from '../navbar-menu/NavbarMenu';
import NavbarLinks from '../navbar-links/NavbarLinks';
import './Navbar.scss';

const Navbar = () => {
	// Sets state (true/false) based on width of window
	const [width, setWidth] = useState(window.innerWidth < 768);

	const updateWidth = () => {
		setWidth(window.innerWidth < 768);
	};

	useEffect(() => {
		window.addEventListener('resize', updateWidth);

		return () => {
			window.removeEventListener('resize', updateWidth);
		};
	});

	// Sets state for Focus Lock
	const [isLocked, setIsLocked] = useState(false);

	const handleFocusLock = () => {
		setIsLocked(!isLocked);
	};

	// Opens/closes navbarMenu
	const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);

	const handleNavbarMenu = () => {
		setNavbarMenuOpen(!navbarMenuOpen);
	};

	const closeNavbarMenu = () => {
		setNavbarMenuOpen(false);
	};

	const onResize = () => {
		if (window.innerWidth > 768) {
			setNavbarMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	});

	// Sets header scrolled styles based on scroll position
	const [headerScrolled, setHeaderScrolled] = useState(false);

	const handleNavbarScrolled = () => {
		if (window.scrollY > 60) {
			setHeaderScrolled(true);
		} else {
			setHeaderScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleNavbarScrolled);

		return () => {
			window.removeEventListener('scroll', handleNavbarScrolled);
		};
	}, []);

	// Shows/hides navbar on scroll up/down
	const [headerVisible, setHeaderVisible] = useState(true);
	const scroll = ScrollListener();

	useEffect(() => {
		if (scroll.y > 60 && scroll.y - scroll.lastY > 0) {
			setHeaderVisible(false);
		} else {
			setHeaderVisible(true);
		}
	}, [scroll.y, scroll.lastY]);

	// Toggles scrolling/blur on & off when the navbar menu is open/closed
	useEffect(() => {
		const body = document.body;
		const main = document.querySelector('.main');
		body.classList.toggle('navbar-menu-open-scroll', navbarMenuOpen);
		main.classList.toggle('navbar-menu-open-blur', navbarMenuOpen);

		return () => {
			body.classList.remove('navbar-menu-open-scroll', navbarMenuOpen);
			main.classList.remove('navbar-menu-open-blur', navbarMenuOpen);
		};
	}, [navbarMenuOpen]);

	// Handles 'logo' scroll
	const handleHeroScroll = () => {
		const hero = document.getElementById('hero');
		hero &&
			hero.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
	};

	// Handles classNames
	const headerClassNames = classNames('header', {
		visible: headerVisible,
		hidden: !headerVisible,
		scrolled: headerScrolled
	});

	// Scrolls to Top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	// React Spring Animations
	// Animation for Logo and Nav Menu Button
	const navSpring = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		},
		delay: 250,
		config: {
			duration: 500
		}
	});

	if (width) {
		return (
			<header className={headerClassNames}>
				<nav className='navbar'>
					<Link
						className='navbar-logo-link'
						to='/'
						onClick={() => {
							handleHeroScroll();
							closeNavbarMenu();
						}}
						onFocus={scrollToTop}
					>
						<animated.svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 2230 1575'
							width='2230'
							height='1575'
							role='img'
							aria-labelledby='svg-navbar-title'
							style={navSpring}
						>
							<title id='svg-navbar-title'>Logo</title>
							<g id='Layer 1'>
								<g id='&lt;Group&gt;'>
									<path
										id='&lt;Path&gt;'
										className='s0'
										d='m786.3 240l-515.4 889h-264.4l584.6-1008.5c20.5-35.6 50.2-64 85.7-83.7 33.3-18.5 71.2-28.2 109.5-28.2 38.4 0 76.2 9.7 109.6 28.2 35.5 19.7 65.1 48.9 85.6 84.5l70.9 122.8-132.4 228.3z'
									/>
									<path
										id='&lt;Path&gt;'
										className='s0'
										d='m2223.5 1147.7c-1.3 72.3-21.3 144.1-57.9 207.4-36.6 63.4-88.7 116.5-150.8 153.8-65.9 39.6-142.1 60.5-220.5 60.5-75.2 0-149.3-19.8-214.4-57.4-65.1-37.6-119.4-91.9-156.9-157l-129.6-224.5 132.4-228.5 195.3 338.6c35.6 61.7 102 100 173.2 100 72.3 0 137-37.3 173.1-99.9 36.2-62.6 36.2-137.4 0.1-200l-0.3-0.6-455.1-799.4-767.7 1325.3h-264.4l836.9-1444.8c20.6-35.6 50.2-64.7 85.7-84.4 33.3-18.5 71.2-28.2 109.5-28.2 38.4 0 76.3 9.7 109.6 28.2 35.5 19.7 65.1 48.9 85.6 84.5l0.4 0.6 458.2 804.9c39 67.8 58.9 144.1 57.6 220.9z'
									/>
								</g>
							</g>
						</animated.svg>
					</Link>
					<FocusLock disabled={!isLocked} autoFocus={false}>
						<NavbarMenuButton
							navbarMenuOpen={navbarMenuOpen}
							handleNavbarMenu={handleNavbarMenu}
							isLocked={isLocked}
							handleFocusLock={handleFocusLock}
							navSpring={navSpring}
						/>
						<NavbarMenu
							navbarMenuOpen={navbarMenuOpen}
							closeNavbarMenu={closeNavbarMenu}
							isLocked={isLocked}
						/>
					</FocusLock>
				</nav>
			</header>
		);
	} else {
		return (
			<header className={headerClassNames}>
				<nav className='navbar'>
					<Link
						className='navbar-logo-link'
						to='/'
						onClick={() => {
							handleHeroScroll();
							closeNavbarMenu();
						}}
						onFocus={scrollToTop}
					>
						<animated.svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 2230 1575'
							width='2230'
							height='1575'
							role='img'
							aria-labelledby='svg-navbar-title'
							style={navSpring}
						>
							<title id='svg-navbar-title'>Logo</title>
							<g id='Layer 1'>
								<g id='&lt;Group&gt;'>
									<path
										id='&lt;Path&gt;'
										className='s0'
										d='m786.3 240l-515.4 889h-264.4l584.6-1008.5c20.5-35.6 50.2-64 85.7-83.7 33.3-18.5 71.2-28.2 109.5-28.2 38.4 0 76.2 9.7 109.6 28.2 35.5 19.7 65.1 48.9 85.6 84.5l70.9 122.8-132.4 228.3z'
									/>
									<path
										id='&lt;Path&gt;'
										className='s0'
										d='m2223.5 1147.7c-1.3 72.3-21.3 144.1-57.9 207.4-36.6 63.4-88.7 116.5-150.8 153.8-65.9 39.6-142.1 60.5-220.5 60.5-75.2 0-149.3-19.8-214.4-57.4-65.1-37.6-119.4-91.9-156.9-157l-129.6-224.5 132.4-228.5 195.3 338.6c35.6 61.7 102 100 173.2 100 72.3 0 137-37.3 173.1-99.9 36.2-62.6 36.2-137.4 0.1-200l-0.3-0.6-455.1-799.4-767.7 1325.3h-264.4l836.9-1444.8c20.6-35.6 50.2-64.7 85.7-84.4 33.3-18.5 71.2-28.2 109.5-28.2 38.4 0 76.3 9.7 109.6 28.2 35.5 19.7 65.1 48.9 85.6 84.5l0.4 0.6 458.2 804.9c39 67.8 58.9 144.1 57.6 220.9z'
									/>
								</g>
							</g>
						</animated.svg>
					</Link>
					<NavbarMenuButton
						navbarMenuOpen={navbarMenuOpen}
						handleNavbarMenu={handleNavbarMenu}
						navSpring={navSpring}
					/>
					<NavbarLinks navbarLinksClassName='navbar-links-list ' closeNavbarMenu={closeNavbarMenu} />
				</nav>
			</header>
		);
	}
};

export default Navbar;
