import React from 'react';
import './ButtonLink.scss';

const ButtonLink = (props) => {
	return (
		<a href={props.buttonLinkPath} className='button-link' target='_blank' rel='noopener noreferrer'>
			{props.buttonLinkName}
		</a>
	);
};

export default ButtonLink;
