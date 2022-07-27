import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';
import { useState } from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ item }) => {
	// Sets state (true/false) based on width of window
	const [width, setWidth] = useState(window.innerWidth < 992);

	const updateWidth = () => {
		setWidth(window.innerWidth < 992);
	};

	useEffect(() => {
		window.addEventListener('resize', updateWidth);

		return () => {
			window.removeEventListener('resize', updateWidth);
		};
	});

	// Sets Intersection Observer to trigger only one on enter
	const [cardRef, cardInView] = useInView({
		triggerOnce: true,
		threshold: 0.15
	});

	// Animates Project Cards
	const cardSpring = useSpring({
		to: {
			opacity: cardInView ? 1 : 0,
			y: cardInView ? 0 : 40
		},
		config: {
			duration: 400
		}
	});

	if (width) {
		return (
			<animated.div className='project-card' ref={cardRef} style={cardSpring}>
				<div className='project-card-info'>
					<h3 className='project-name'>{item.projectName}</h3>
					<ul className='project-tags-list'>
						{item.projectTags.map((item) => {
							return (
								<li className={item.projectTagClassName} key={item.id}>
									{item.icon}
								</li>
							);
						})}
					</ul>
					<ul className='project-links-list'>
						{item.projectLinks.map((item) => {
							return (
								<li className='project-links-item' key={item.id}>
									<a
										href={item.path}
										className='project-links-link'
										target='_blank'
										rel='noopener noreferrer'
										aria-label={item.ariaLabel}
									>
										{item.icon}
									</a>
								</li>
							);
						})}
					</ul>
					<div className='project-description'>
						<p className='project-description-top'>{item.projectDescriptionTop}</p>
						<p className='project-description-bottom'>{item.projectDescriptionBottom}</p>
					</div>
				</div>
				<div className='project-card-image'>
					<img src={item.projectImage} alt={item.projectImageAlt} />
				</div>
			</animated.div>
		);
	} else {
		return (
			<animated.div className='project-card' ref={cardRef} style={cardSpring}>
				<div className='project-card-info'>
					<h3 className='project-name'>{item.projectName}</h3>
					<ul className='project-tags-list'>
						{item.projectTags.map((item) => {
							return (
								<li className={item.projectTagClassName} key={item.id}>
									{item.technology}
								</li>
							);
						})}
					</ul>
					<ul className='project-links-list'>
						{item.projectLinks.map((item) => {
							return (
								<li className='project-links-item' key={item.id}>
									<a
										href={item.path}
										className='project-links-link'
										target='_blank'
										rel='noopener noreferrer'
										aria-label={item.ariaLabel}
									>
										{item.icon}
									</a>
								</li>
							);
						})}
					</ul>
					<div className='project-description'>
						<p className='project-description-top'>{item.projectDescriptionTop}</p>
						<p className='project-description-bottom'>{item.projectDescriptionBottom}</p>
					</div>
				</div>
				<div className='project-card-image'>
					<a href={item.projectPath} className='project-image' target='_blank' rel='noopener noreferrer'>
						<img src={item.projectImage} alt={item.projectImageAlt} />
					</a>
				</div>
			</animated.div>
		);
	}
};

export default ProjectCard;
