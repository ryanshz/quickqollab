import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useAuth } from '../../middleware/AuthContext';

const Login = () => {
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
					body: JSON.stringify(formData),
				});

				const data = await response.json();

				if (response.ok) {
					login(data); // Update global state with user data
					navigate('/profile');
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
		<section className='bg-white'>
			<div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
				<aside className='relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
					<img
						alt=''
						src='https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
						className='absolute inset-0 h-full w-full object-cover'
					/>
				</aside>

				<main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
					<div className='max-w-xl lg:max-w-3xl'>
						<Link to='/'></Link>

						<h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
							Login to QuickQollab
						</h1>

						<p className='mt-4 leading-relaxed text-gray-500'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
							quibusdam aperiam voluptatum.
						</p>

						<form onSubmit={handleSubmit} className='mt-8 grid grid-cols-6 gap-6'>
							<div className='col-span-6 sm:col-span-3'>
								<label htmlFor='Username' className='block text-sm font-medium text-gray-700'>
									Username
								</label>

								<input
									type='text'
									id='username'
									name='username'
									placeholder='Username'
									value={formData.username}
									onChange={handleChange}
									className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									required
								/>
								{errors.username && <p className='text-red-500'>{errors.username}</p>}
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label htmlFor='Password' className='block text-sm font-medium text-gray-700'>
									Password
								</label>

								<input
									type='password'
									id='password'
									name='password'
									placeholder='Password'
									value={formData.password}
									onChange={handleChange}
									className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									required
								/>
								{errors.password && <p className='text-red-500'>{errors.password}</p>}
							</div>

							<div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
								<button
									type='submit'
									className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
									Login
								</button>
								{errors.authentication && <p className='text-red-500'>{errors.authentication}</p>}

								<p className='mt-4 text-sm text-gray-500 sm:mt-0'>
									Dont have an account?{' '}
									<Link className='text-gray-700 underline' to='/signup/'>
										Register
									</Link>
								</p>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	);
};

export default Login;
