import React from 'react';
import SocialLinks from '../../components/social-links/SocialLinks';
import NavbarLinks from '../navbar-links/NavbarLinks';
import './NavbarMenu.scss';

const NavbarMenu = (props) => {
	const isHidden = props.isLocked ? true : false;
	const tabIndex = props.isLocked ? 0 : -1;

	return (
		<div className={props.navbarMenuOpen ? 'navbar-menu active' : 'navbar-menu'} aria-hidden={!isHidden}>
			<NavbarLinks
				navbarLinksClassName='navbar-links-list '
				closeNavbarMenu={props.closeNavbarMenu}
				tabIndex={tabIndex}
			/>
			<SocialLinks socialLinksClassName='social-links-list header-social' tabIndex={tabIndex} />
		</div>
	);
};

export default NavbarMenu;
