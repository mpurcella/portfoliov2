import React from 'react';
import './SectionHeading.scss';

const SectionHeading = (props) => {
	return <h2 className={props.sectionHeadingClassName}>{props.children}</h2>;
};

export default SectionHeading;
