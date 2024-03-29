import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../middleware/AuthContext';
import { ArrowUpAZ, UsersRound } from 'lucide-react';

const LoginForm = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
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

		errorsCopy.authentication = '';

		setErrors(errorsCopy);

		if (Object.values(errorsCopy).every((error) => !error)) {
			try {
				const response = await fetch('http://127.0.0.1:5000/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					body: JSON.stringify(formData),
				});

				const data = await response.json();

				if (response.ok) {
					login(data);
					navigate('/dashboard');
				} else {
					if (response.status === 401) {
						setErrors({ ...errors, authentication: 'Please enter a valid username or password' });
					}
					console.error('Login failed:', data.message);
				}
			} catch (error) {
				console.error('An error occurred:', error);
			}
		}
	};
	return (
		<div className='w-full h-full justify-center flex '>
			<div className='w-2/3 h-full flex flex-col justify-center items-center p-8 border border-gray-800 rounded-xl gap-4 border-green-400/10 shadow-green-400/10 shadow-xl transition'>
				<div className='w-full'>
					<img className='rounded-xl ' src='/images/login/login.jpg' alt='' />
				</div>
				<div className='flex flex-col gap-2 items-start justify-start w-full'>
					<h1 className='text-6xl font-bold text-primary-content'>Sign in</h1>
					<p className='text-xl font-thin text-neutral-content pt-1'>
						Keep it all together and you'll be fine.
					</p>
				</div>

				<form onSubmit={handleSubmit} className='w-full h-full flex flex-col gap-2'>
					{errors.authentication && <p className='text-red-500'>{errors.authentication}</p>}
					<label className='input input-bordered flex items-center gap-2'>
						<UsersRound />
						<input
							placeholder='Username'
							type='text'
							id='username'
							name='username'
							value={formData.username}
							onChange={handleChange}
							className=''
							required
						/>
						{errors.username && <p className='text-red-500'>{errors.username}</p>}
					</label>
					<label className='input input-bordered flex items-center gap-2'>
						<ArrowUpAZ />
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={handleChange}
							className='w-full'
							required
						/>
						{errors.password && <p className='text-red-500'>{errors.password}</p>}
					</label>
					<button class='btn btn-outline rounded-xl w-full'>Sign In</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
