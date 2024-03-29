import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useAuth } from '../../../middleware/AuthContext';

const SettingModalForm = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const { login } = useAuth();

	const [formData, setFormData] = useState({
		username: '',
		password: '',
		email: '',
	}); 

	const [errors, setErrors] = useState({
		username: '',
		password: '',
		email: '',
		authentication: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errorsCopy = { ...errors };

		if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
			errorsCopy.username = 'Only letters and numbers are allowed';
		} else {
			errorsCopy.username = '';
		}

		// Validation for password
		if (!/^[a-zA-Z0-9!?$#]+$/.test(formData.password)) {
			errorsCopy.password = 'Please enter only letters, numbers, and these special characters: !, ?, $, #';
		} else {
			errorsCopy.password = '';
		}

		if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			errorsCopy.email = 'Please enter a valid email address';
		} else {
			errorsCopy.email = '';
		}

		errorsCopy.authentication = '';

		setErrors(errorsCopy);

		const filteredFormData = Object.fromEntries(
			Object.entries(formData).filter(([_, value]) => value.trim() !== '')
		);

		if (Object.values(errorsCopy).every((error) => !error)) {
			try {
				const response = await fetch('http://127.0.0.1:5000/auth/update', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					// body: JSON.stringify(formData),
					body: JSON.stringify(filteredFormData),
				});

				const data = await response.json();

				if (response.ok) {
					login(data);
					navigate('/dashboard');
				} else {
					if (response.status === 409) {
					setErrors({ ...errors, authentication: 'Account with username exists' });
					setErrors({ ...errors, authentication: 'Account with email exists' });
					}
					console.error('Update failed:', data.message);
				}
			} catch (error) {
				console.error('An error occured: ', error);
			}
		}
	};

	const handleLogout = async (e) => {
		e.preventDefault(); 

		try {
			const response = await fetch('http://127.0.0.1:5000/auth/logout', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (response.ok) {
				logout();
				navigate('/');
			} else {
				console.error('Login failed:', data.message);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

	return (
		<div>
			<h3 className='font-bold text-lg pb-2'>Settings</h3>

			<label className='swap swap-rotate'>
				<input type='checkbox' className='theme-controller' value='corporate' />
				<Moon className='swap-off w-10 h-10' />
				<Sun className='swap-on w-10 h-10' color='#ff8040' />
			</label>

			<div className='modal-action flex flex-col justify-center'>
				<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
					{errors.authentication && <p className='text-red-500'>{errors.authentication}</p>}
					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' id='username' name='username' className='grow' placeholder='Update username' value={formData.username} onChange={handleChange} /> {errors.username && <p className='text-red-500'>{errors.username}</p>}
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input type='password' id='password' name='password' className='grow' placeholder='Update password' value={formData.password} onChange={handleChange} /> {errors.password && <p className='text-red-500'>{errors.password}</p>}
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' id='email' name='email' placeholder='Update email' value={formData.email} onChange={handleChange} /> {errors.email && <p className='text-red-500'>{errors.email}</p>}

					</label>
					<label>
						<input type='file' className='file-input file-input-bordered w-full ' />
					</label>
					<div className='flex flex-row justify-between'>
						<button type='submit' className='btn'>Save</button>
						<div className='flex flex-row gap-2'>	
							<form method='dialog'>
								<button className='btn'>Exit</button>
							</form>
							<button className='btn' onClick={handleLogout}>
								Logout
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SettingModalForm;
