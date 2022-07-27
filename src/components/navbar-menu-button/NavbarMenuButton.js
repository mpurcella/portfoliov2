import React from 'react';
import { animated } from 'react-spring';
import './NavbarMenuButton.scss';

const NavbarMenuButton = (props) => {
	const isExpanded = props.isLocked ? true : false;

	return (
		<animated.button
			type='button'
			className='navbar-menu-button'
			aria-label='Menu'
			aria-expanded={isExpanded}
			onClick={() => {
				props.handleNavbarMenu();
				props.handleFocusLock();
			}}
			style={props.navSpring}
		>
			<div className={props.navbarMenuOpen ? 'line line-1 active' : 'line line-1'}></div>
			<div className={props.navbarMenuOpen ? 'line line-2 active' : 'line line-2'}></div>
			<div className={props.navbarMenuOpen ? 'line line-3 active' : 'line line-3'}></div>
		</animated.button>
	);
};

export default NavbarMenuButton;
