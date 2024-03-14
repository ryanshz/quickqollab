import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Additional validation could be added here

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
				navigate('/dashboard');
			} else {
				console.error('Signup failed:', data.message);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};
	return (
		<div className='min-h-screen py-40' style={{ backgroundImage: 'linear-gradient(115deg, #6EE7B7, #3BCB6D)' }}>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
					<div
						className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center'
						style={{
							backgroundImage:
								"url('https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg')",
						}}>
						<h1 className='text-white text-3xl mb-3'>Welcome</h1>
						<div>
							<p className='text-white'>
								Random
								<a href='#' className='text-green-500 font-semibold'>
									Learn more
								</a>
							</p>
						</div>
					</div>
					<div className='w-full lg:w-1/2 py-16 px-12'>
						<h2 className='text-3xl mb-4 text-black'>Register</h2>
						<p className='mb-4 text-black'>Create your account. It's free and only takes a minute.</p>
						<form onSubmit={handleSubmit}>
							<div className='grid grid-cols-1 gap-5'>
								<input
									type='text'
									name='username'
									value={formData.username}
									onChange={handleChange}
									placeholder='Username'
									className='border border-black py-1 px-2 w-full'
									required // Ensures the user can't submit the form without filling this out
								/>
							</div>
							<div className='mt-5'>
								<input
									type='email' // Changed to 'email' for proper email validation
									name='email'
									value={formData.email}
									onChange={handleChange}
									placeholder='Email'
									className='border border-black py-1 px-2 w-full'
									required
								/>
							</div>
							<div className='mt-5'>
								<input
									type='password'
									name='password'
									value={formData.password}
									onChange={handleChange}
									placeholder='Password'
									className='border border-black py-1 px-2 w-full'
									required
								/>
							</div>
							{/* You mentioned not to worry about the checkbox for now, so it's omitted */}
							<div className='mt-5'>
								<button type='submit' className='w-full bg-green-500 py-3 text-center text-black'>
									Register Now
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
