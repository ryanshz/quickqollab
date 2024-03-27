import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../middleware/AuthContext';
import { ArrowUpAZ, UsersRound, Mail } from 'lucide-react';

const SignUpForm = () => {
	const navigate = useNavigate();
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

		errorsCopy.authentication = '';

		setErrors(errorsCopy);

		if (Object.values(errorsCopy).every((error) => !error)) {
			try {
				const response = await fetch('http://127.0.0.1:5000/auth/signup', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
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
					if (response.status === 409) {
						setErrors({ ...errors, authentication: 'Account with username or email already exists' });
					}
					console.error('Signup failed:', data.message);
				}
			} catch (error) {
				console.error('An error occurred:', error);
			}
		}
	};
	return (
		<div className='w-full h-full justify-center flex flex-row border border-gray-800 rounded-xl gap-4 border-green-400/10 shadow-green-400/10 shadow-xl transition'>
			<div className='w-1/3'>
				<img
					src='https://images.unsplash.com/photo-1610043238036-7309f1cc52d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt=''
					className='h-full w-full rounded-xl'
				/>
			</div>

			<div className='w-2/3 h-full flex flex-col justify-center items-center p-8 '>
				<div className='flex flex-col gap-2 items-start justify-start w-full'>
					<h1 className='text-6xl font-bold text-primary-content '>Sign Up</h1>
					<p className='text-xl font-thin text-neutral-content pt-1 pb-8'>
						Start your collaborating journey with <span className='font-bold'>us</span>
					</p>
				</div>

				<form onSubmit={handleSubmit} className='w-full h-full flex flex-col gap-4'>
					{' '}
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
						<Mail />
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder='Email'
							className='w-full'
							required
						/>
						{errors.email && <p className='text-red-500'>{errors.email}</p>}
					</label>
					<label className='input input-bordered flex items-center gap-2'>
						<ArrowUpAZ />
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Password'
							onChange={handleChange}
							className='w-full'
							required
						/>
						{errors.password && <p className=''>{errors.password}</p>}
					</label>
					<button className='btn btn-outline rounded-xl w-full'>Sign Up</button>
				</form>
				<div className='pt-1'>
					<h3 className='font-thin'>
						Have an account?{' '}
						<span>
							<Link to='/login' className='link'>
								Click here
							</Link>
						</span>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
