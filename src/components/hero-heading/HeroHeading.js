import React from 'react';
import { useSpring, animated } from 'react-spring';
import './HeroHeading.scss';

const HeroHeading = () => {
	// Animates Hero Heading
	const heroHeadingSpring = useSpring({
		from: {
			opacity: 0,
			y: 15
		},
		to: {
			opacity: 1,
			y: 0
		},
		delay: 1000,
		config: {
			duration: 300
		}
	});

	return (
		<animated.h1 className='hero-heading' style={heroHeadingSpring}>
			<span className='hero-heading-top'>
				<span>Mike</span>
			</span>
			<span className='hero-heading-bottom'>
				<span>Purcella</span>
			</span>
		</animated.h1>
	);
};

export default HeroHeading;
