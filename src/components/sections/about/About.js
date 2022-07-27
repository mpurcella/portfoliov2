import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import AboutImage from '../../../images/about-image/portrait.jpeg';
import ButtonLink from '../../button-link/ButtonLink';
import Wrapper from '../../wrapper/Wrapper';
import './About.scss';

const About = () => {
	// Sets Intersection Observer to trigger only once on enter
	const [aboutRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.15
	});

	// Animates About Sections
	const aboutSpring = useSpring({
		to: {
			opacity: inView ? 1 : 0,
			y: inView ? 0 : 25
		},
		config: {
			duration: 400
		}
	});

	return (
		<section id='about'>
			<Wrapper>
				<animated.div ref={aboutRef} style={aboutSpring}>
					<SectionHeading sectionHeadingClassName='section-heading about-heading'>About</SectionHeading>
					<div className='about-info-container'>
						<SectionText sectionTextClassName='section-text about-text'>
							Hi!
							<br />
							<br />
							I'm Mike, a Front-end Web Developer located in the&nbsp;
							<span className='rose-emoji'>
								&#127801;&nbsp;City
								<span className='rose-emoji-tooltip'>Portland, Oregon</span>
							</span>
							. My coding experience began with "hacking" custom backgrounds and songs into my Myspace
							profile. It wasn't until later in life that I decided to pursue a career in it...
							<br />
							<br />
							Web development, that is.
							<br />
							<br />
							Now I'm focused on building products that bring true measurable results to end users.
							<br />
							<br />
							When I'm not working on new projects to strengthen my skills as a developer, you can find me
							scouring the web for music, binge-watching a new show, or taking in the sights and sounds of
							the&nbsp;city.
							<br />
							<br />
							If you want to learn more about me, my experience, or my background, just click the
							link&nbsp;below!
						</SectionText>
						<div className='about-image-container'>
							<div className='about-image'>
								<img src={AboutImage} alt='Michael Purcella Portrait' />
							</div>
						</div>
					</div>
					<div className='about-button'>
						<ButtonLink
							buttonLinkPath='https://drive.google.com/file/d/1JDyHlH5xKDVgM7GSN-9PRLbkD6UBDp9C/view?usp=sharing'
							buttonLinkName='View Resume'
						/>
					</div>
				</animated.div>
			</Wrapper>
		</section>
	);
};

export default About;
