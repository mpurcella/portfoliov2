import React from 'react';
import { useSpring, animated } from 'react-spring';
import './HeroSubheading.scss';

const HeroSubheading = () => {
	// Animates Hero Subheading
	const heroSubheadingSpring = useSpring({
		from: {
			opacity: 0,
			y: 15
		},
		to: {
			opacity: 1,
			y: 0
		},
		delay: 1100,
		config: {
			duration: 300
		}
	});

	return (
		<animated.h2 className='hero-subheading' style={heroSubheadingSpring}>
			From imagination to&nbsp;screen
		</animated.h2>
	);
};

export default HeroSubheading;
