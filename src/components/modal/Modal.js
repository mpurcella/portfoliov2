import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import { FaTimes } from 'react-icons/fa';
import './Modal.scss';

const Modal = (props) => {
	// Toggles scrolling off when a modal is open
	useEffect(() => {
		let body = document.body;
		body.classList.toggle('modal-open-scroll', props.isModalOpen);

		return () => {
			body.classList.remove('modal-open');
		};
	}, [props.isModalOpen]);

	if (props.isModalOpen === false) {
		return null;
	} else if (props.isSuccessful) {
		return ReactDOM.createPortal(
			<div className='modal-overlay' onClick={props.closeModal}>
				<div className='modal'>
					<FocusLock autoFocus={false}>
						<button className='modal-close-btn' onClick={props.closeModal}>
							<FaTimes />
						</button>
						<p className='modal-text'>
							You're awesome!
							<br />
							<br />
							<span>&#128077;</span>
							<br />
							<br />
							I'll be in touch shortly.
						</p>
					</FocusLock>
				</div>
			</div>,
			document.querySelector('#portal')
		);
	} else if (!props.isSuccessful) {
		return ReactDOM.createPortal(
			<div className='modal-overlay' onClick={props.closeModal}>
				<div className='modal'>
					<FocusLock autoFocus={false}>
						<button className='modal-close-btn' onClick={props.closeModal}>
							<FaTimes />
						</button>
						<p className='modal-text'>
							Uh oh! Something went wrong.
							<br />
							<br />
							<span>&#129300;</span>
							<br />
							<br />
							Please try submitting your message again. If the problem continues, please contact
							me&nbsp;directly by clicking{' '}
							<a
								href='mailto:mjpurcella@gmail.com'
								className='modal-contact-link'
								target='_blank'
								rel='noopener noreferrer'
							>
								here
							</a>
							.
						</p>
					</FocusLock>
				</div>
			</div>,
			document.querySelector('#portal')
		);
	}
};

export default Modal;
