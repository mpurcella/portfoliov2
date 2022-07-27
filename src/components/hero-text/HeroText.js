import React from 'react';
import { useSpring, animated } from 'react-spring';
import './HeroText.scss';

const HeroText = (props) => {
	// Animates Hero Text
	const heroTextSpring = useSpring({
		from: {
			opacity: 0,
			y: 15
		},
		to: {
			opacity: 1,
			y: 0
		},
		delay: 1200,
		config: {
			duration: 300
		}
	});

	return (
		<animated.div className='hero-text' style={heroTextSpring}>
			<span>Web Developer.</span>
			<span>Music Junkie.</span>
			<span>Endlessly Curious.</span>
		</animated.div>
	);
};

export default HeroText;
