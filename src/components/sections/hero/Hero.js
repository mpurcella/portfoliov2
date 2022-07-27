import React from 'react';
import HeroHeading from '../../hero-heading/HeroHeading';
import HeroSubheading from '../../hero-subheading/HeroSubheading';
import HeroText from '../../hero-text/HeroText';
import Wrapper from '../../wrapper/Wrapper';
import './Hero.scss';

const Hero = () => {
	return (
		<section id='hero'>
			<Wrapper>
				<HeroHeading />
				<HeroSubheading />
				<HeroText />
			</Wrapper>
		</section>
	);
};

export default Hero;
