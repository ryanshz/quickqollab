import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../middleware/AuthContext';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordForm = ({ title }) => {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const { login } = useAuth();
	const [errors, setErrors] = useState({
		password: '',
		authentication: '',
	});

	const resetForm = () => {
		setErrors({
			password: '',
			authentication: '',
		});
		document.getElementById('password').value = '';
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setErrors({ ...errors, [name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errorsCopy = { ...errors };

		if (!errors.password.trim()) {
			errorsCopy.password = 'Password is required';
		}

		errorsCopy.authentication = '';
		setErrors(errorsCopy);

		if (Object.values(errorsCopy).every((error) => !error)) {
			try {
				const response = await fetch('http://127.0.0.1:5000/auth/update', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					body: JSON.stringify({ password: errors.password }),
				});

				const data = await response.json();

				if (response.ok) {
					login(data);
					resetForm();
					document.getElementById('create-setting-modal').close();
					toast.success('password is Successful', {
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
							id='password'
							name='password'
							className='grow'
							placeholder='Enter password'
							onChange={handleChange}
						/>
						{errors.password && <p className='text-red-500'>{errors.password}</p>}
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
