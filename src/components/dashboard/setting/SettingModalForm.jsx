import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useAuth } from '../../../middleware/AuthContext';

const SettingModalForm = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const handleSubmit = async (e) => {
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
				<form>
					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Update name' />
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Update password' />
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Update email' />
					</label>

					<div className='flex flex-row justify-between'>
						<button className='btn'>Save</button>
						<div className='flex flex-row gap-2'>
							<form method='dialog'>
								<button className='btn'>Exit</button>
							</form>
							<button className='btn' onClick={handleSubmit}>
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
