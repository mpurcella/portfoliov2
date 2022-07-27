import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import ContactForm from '../../../containers/contact-form/ContactForm';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import Wrapper from '../../wrapper/Wrapper';
import './Contact.scss';

const Contact = () => {
	// Sets Intersection Observer to trigger only one on enter
	const [contactRef, contactInView] = useInView({
		triggerOnce: true,
		threshold: 0.15
	});

	// Animates Contact Section
	const contactSpring = useSpring({
		to: {
			opacity: contactInView ? 1 : 0,
			y: contactInView ? 0 : 25
		},
		config: {
			duration: 400
		}
	});

	return (
		<section id='contact'>
			<Wrapper>
				<animated.div ref={contactRef} style={contactSpring}>
					<SectionHeading sectionHeadingClassName='section-heading contact-heading'>Contact</SectionHeading>
					<SectionText sectionTextClassName='section-text contact-text'>
						Want to connect, collaborate, hire me, or learn more about what makes me...me? Just fill out the
						form&nbsp;below!
					</SectionText>
					<ContactForm />
				</animated.div>
			</Wrapper>
		</section>
	);
};

export default Contact;
