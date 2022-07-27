import React from 'react';
import { socialLinksData } from './SocialLinksData';
import './SocialLinks.scss';

const SocialLinks = (props) => {
	return (
		<ul className={props.socialLinksClassName}>
			{socialLinksData.map((item) => {
				return (
					<li className='social-links-item' key={item.linkId}>
						<a
							href={item.linkPath}
							className='social-links-link'
							target='_blank'
							rel='noopener noreferrer'
							aria-label={item.linkAriaLabel}
							tabIndex={props.tabIndex}
						>
							{item.linkIcon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;
