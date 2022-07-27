import React from 'react';
import './SectionText.scss';

const SectionText = (props) => {
	return <p className={props.sectionTextClassName}>{props.children}</p>;
};

export default SectionText;
