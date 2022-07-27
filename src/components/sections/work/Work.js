import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import { projectCardData } from '../../project-card/ProjectCardData';
import ProjectCard from '../../project-card/ProjectCard';
import Wrapper from '../../wrapper/Wrapper';
import './Work.scss';

const Work = () => {
	// Sets Intersection Observer to trigger only one on enter
	const [workRef, workInView] = useInView({
		triggerOnce: true,
		threshold: 0.15
	});

	// Animates Work Section
	const workSpring = useSpring({
		to: {
			opacity: workInView ? 1 : 0,
			y: workInView ? 0 : 25
		},
		config: {
			duration: 400
		}
	});

	return (
		<section id='work'>
			<Wrapper>
				<animated.div ref={workRef} style={workSpring}>
					<SectionHeading sectionHeadingClassName='section-heading work-heading'>
						Featured&nbsp;Work
					</SectionHeading>
					<SectionText sectionTextClassName='section-text work-text'>
						The projects featured below are just a snapshot of the skills and creativity that I feel best
						reflect my growth as a developer.
						<br />
						<br />
						This website will forever be evolving to document and showcase my journey. Check back
						occasionally to see where I have ended up and what I have created.
					</SectionText>
					<ul className='projects'>
						{projectCardData.map((item) => {
							return (
								<li className='projects-item' key={item.id}>
									<ProjectCard item={item} />
								</li>
							);
						})}
					</ul>
				</animated.div>
			</Wrapper>
		</section>
	);
};

export default Work;
