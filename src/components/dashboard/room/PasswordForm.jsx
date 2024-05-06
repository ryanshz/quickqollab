import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../middleware/AuthContext';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordForm = ({ title, roomID }) => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		roompassword: '',
		room_id: roomID,
		authentication: '',
	});

	const [errors, setErrors] = useState({
		roompassword: '',
		authentication: '',
	});

	const resetForm = () => {
		setErrors({
			roompassword: '',
			authentication: '',
		});
		document.getElementById('roompassword').value = '';
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name);
		console.log(value);
		console.log(roomID);
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errorsCopy = { ...errors };

		if (!errors.roompassword.trim()) {
			errorsCopy.roompassword = 'Password is required';
		}

		errorsCopy.authentication = '';
		setErrors(errorsCopy);

		if (formData.roompassword.trim() && !/^[a-zA-Z0-9!?$#]+$/.test(formData.password)) {
			errorsCopy.roompassword = 'Please enter only letters, numbers, and these special characters: !, ?, $, #';
		} else {
			errorsCopy.roompassword = '';
		}

		console.log(formData.roompassword);

		if (Object.values(errorsCopy).every((error) => !error)) {
			try {
				const response = await fetch('/room/verify_password', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					body: JSON.stringify(formData),
				});

				const data = await response.json();

				if (response.ok) {
					document.getElementById('create-password-modal').close();
					navigate(`/canvas/${data.room_id}`);
					toast.success('Password is Successful', {
						position: 'top-center',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
						transition: Flip,
					});
				} else {
					if (response.status === 409) {
						setErrors({ ...errors, authentication: 'Password is incorrect' });
					} else {
						setErrors({ ...errors, authentication: data.message || 'An unexpected error occurred.' });
					}
				}
			} catch (error) {
				console.error('An error occurred:', error);
				setErrors({ ...errors, authentication: 'Failed to connect to the server.' });
			}
		}
	};

	const handleExit = () => {
		resetForm();
	};

	return (
		<div>
			<h3 className='font-bold text-lg'>
				Room name: <span className='text-green-400'>{title}</span>
			</h3>
			<div className='modal-action flex flex-col justify-center'>
				<form className='flex flex-col gap-4' method='dialog' onSubmit={handleSubmit}>
					{errors.authentication && <p className='text-red-500'>{errors.authentication}</p>}
					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='password'
							id='roompassword'
							name='roompassword'
							className='grow'
							placeholder='Enter Password'
							onChange={handleChange}
						/>
						{errors.roompassword && <p className='text-red-500'>{errors.roompassword}</p>}
					</label>
					<div className='flex flex-row justify-between'>
						<button className='btn'>Submit</button>
						<div className='flex flex-row gap-2'>
							<form method='dialog'>
								<button className='btn' onClick={handleExit}>
									Cancel
								</button>
							</form>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PasswordForm;
