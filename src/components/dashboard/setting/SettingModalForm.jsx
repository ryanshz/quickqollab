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

	/** 
	const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
	*/


	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('http://127.0.0.1:5000/auth/update', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				if (data && data.username && data.email) {
                login(data);
				}
				navigate('/dashboard');
			} else {
				console.error('Update failed:', data.message);
			}

		} catch(error) {
			console.error('An error occured: ', error);
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
					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Update username' value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Update password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Update email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
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
