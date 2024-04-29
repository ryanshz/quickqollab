import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { api } from '../../../config/tunnel';

const socket = io(api.flask_api);

const CreateRoomModalForm = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		title: '',
		password: '',
		authentication: '',
	});

	const resetForm = () => {
		setFormData({
			title: '',
			password: '',
		});
		setErrors({
			title: '',
			password: '',
		});
		// delete something
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errorsCopy = { ...errors };

		if (!/^(?!\s)(?!.*\s$)(?!.*\s{2})[a-zA-Z0-9\s-]+$/.test(formData.title)) {
			errorsCopy.title =
				'Please enter only letters, number, hyphens, and spaces. Title must not start or end with space, or have consecutive spaces.';
		} else {
			errorsCopy.title = '';
		}

		if (formData.password.trim() && !/^[a-zA-Z0-9!?$#]+$/.test(formData.password)) {
			errorsCopy.password = 'Please enter only letters, numbers, and these special characters: !, ?, $, #';
		} else {
			errorsCopy.password = '';
		}

		errorsCopy.authentication = '';

		setErrors(errorsCopy);

		if (Object.values(errorsCopy).every((error) => !error)) {
			try {
				const response = await fetch(`${api.flask_api}/room/new`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					body: JSON.stringify(formData),
				});

				const data = await response.json();
				console.log(data);

				if (response.ok) {
					socket.emit('create_room', data.response, (socketResponse) => {
						navigate(`/canvas/${data.response.room_id}`, {
							state: {
								roomData: data.response,
								message: 'Your room was successfully created!',
							},
						});
					});
				} else {
					if (response.status === 409) {
						setErrors({ ...errors, authentication: 'Another room with this title exists.' });
					} else {
						setErrors({ ...errors, authentication: data.message || 'An unexpected error occurred.' });
					}
				}
			} catch (error) {
				console.error('Network error:', error);
				setErrors({ ...errors, authentication: 'Error connecting to the network.' });
			}
		}
	};

	const handleExit = () => {
		resetForm();
	};

	return (
		<div>
			<h3 className='font-bold text-lg'>Create Room</h3>
			<p className='py-4'>Enter the form below to create a public/private room.</p>
			{errors.authentication && <p className='text-red-500'>{errors.authentication}</p>}
			<div className='modal-action flex flex-col justify-center'>
				<form method='dialog' onSubmit={handleSubmit} className='flex flex-col gap-4'>
					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='text'
							id='title'
							name='title'
							value={formData.title}
							onChange={handleChange}
							className='grow'
							placeholder='Room name'
							autoComplete='off'
							required
						/>
						{errors.title && <p className='text-red-500 text-sm'>{errors.title}</p>}
					</label>
					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='password'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							className='grow'
							placeholder='Password (optional)'
							autoComplete='off'
						/>
						{errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
					</label>
					{/* if there is a button in form, it will close the modal */}
					<div className='flex flex-row justify-between'>
						<button className='btn' type='submit'>
							Create Room
						</button>
						<form method='dialog'>
							<button className='btn' onClick={handleExit}>
								Exit
							</button>
						</form>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateRoomModalForm;
