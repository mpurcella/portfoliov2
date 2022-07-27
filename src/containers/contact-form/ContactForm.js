import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/modal/Modal';
import './ContactForm.scss';

const ContactForm = () => {
	// Sets state to open Modal and to track whether submission was successful
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

	// Closes Modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// React Form Hooks to create Form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitted, isSubmitting }
	} = useForm();

	// Posts/Logs data on submit
	const onSubmit = async (data) => {
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (result.success) {
				setIsSuccessful(true);
			} else {
				setIsSuccessful(false);
			}
			console.log(result);
		} catch (error) {
			setIsSuccessful(false);
			console.log(error);
		}
		setIsModalOpen(true);
	};

	// Resets form if submit is successful
	useEffect(() => {
		if (isSuccessful && isSubmitted) {
			reset();
		} else if (!isSuccessful && isSubmitted) {
			return;
		}
	}, [isSuccessful, isSubmitted, reset]);

	return (
		<>
			<form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
				<input {...register('access_key')} type='hidden' value='a17d3cc8-b9d7-4c89-a622-aec5c8c5171e' />
				<div className='first-name'>
					<label className='label' htmlFor='firstName'>
						First Name<span>*</span>
					</label>
					<input
						{...register('firstName', { required: 'A first name is required.' })}
						type='text'
						className='form-input first-name-input'
						id='firstName'
						aria-required='true'
						autoCorrect='off'
					/>
					{errors.firstName && <p className='input-error'>{errors.firstName.message}</p>}
				</div>
				<div className='last-name'>
					<label className='label' htmlFor='lastName'>
						Last Name
					</label>
					<input
						{...register('lastName')}
						type='text'
						className='form-input last-name-input'
						id='lastName'
						aria-required='false'
						autoCorrect='off'
					/>
				</div>
				<div className='email-address'>
					<label className='label' htmlFor='emailAddress'>
						Email Address<span>*</span>
					</label>
					<input
						{...register('emailAddress', {
							required: 'An email address is required.',
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Please enter a valid email address'
							}
						})}
						type='email'
						className='form-input email-address-input'
						id='emailAddress'
						aria-required='true'
						autoCorrect='off'
					/>
					{errors.emailAddress && <p className='input-error'>{errors.emailAddress.message}</p>}
				</div>
				<div className='message'>
					<label className='label' htmlFor='message'>
						Message<span>*</span>
					</label>
					<textarea
						{...register('message', { required: 'A message is required.' })}
						className='form-text-area message-text-area'
						id='message'
						rows='10'
						aria-required='true'
						autoCorrect='off'
					></textarea>
					{errors.message && <p className='input-error'>{errors.message.message}</p>}
				</div>
				<button
					type='submit'
					className={isSubmitting ? 'button-submit disabled' : 'button-submit'}
					disabled={isSubmitting}
				>
					{isSubmitting && <span className='loader'></span>}
					Submit
				</button>
			</form>
			<Modal isModalOpen={isModalOpen} isSuccessful={isSuccessful} closeModal={closeModal} />
		</>
	);
};

export default ContactForm;
