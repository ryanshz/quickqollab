import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useAuth } from '../../../middleware/AuthContext';
import { toast, Flip  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingModalForm = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const { login } = useAuth();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		email: '',
		profile_picture: null,
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
		email: '',
		profile_picture: null,
		authentication: '',
	});

	const resetForm = () => {
        setFormData({
            username: '',
            password: '',
            email: '',
			profile_picture: null,
        });
        setErrors({
            username: '',
            password: '',
            email: '',
            authentication: '',
        });
		document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').value = '';
		document.getElementById('profile_picture').value = '';
    };

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: '' });
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (!file.type.startsWith('image/')) {
			setErrors({ ...errors, profile_picture: 'Please select an image file.' });
			setFormData({ ...formData, profile_picture: null }); // Clear the profile picture data
			return;
		}
		else {
			setErrors({ ...errors, profile_picture: '' });
		}
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result.split(',')[1];
			setFormData({ ...formData, profile_picture: base64String });
		};
		reader.readAsDataURL(file);
	};
	
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const errorsCopy = { ...errors };
		const userData = JSON.parse(localStorage.getItem('user'));

		if(formData.username.trim() === userData.username) {
			errorsCopy.username = 'Username cannot be the same as your current one';
		}
		else if (formData.username.trim() && !/^[a-zA-Z0-9]+$/.test(formData.username)) {
			errorsCopy.username = 'Please enter only letters and numbers';
		} else {
			errorsCopy.username = '';
		}

		if (formData.password.trim() && !/^[a-zA-Z0-9!?$#]+$/.test(formData.password)) {
			errorsCopy.password = 'Please enter only letters, numbers, and these special characters: !, ?, $, #';
		} else {
			errorsCopy.password = '';
		}

		if(formData.email.trim() === userData.email) {
			errorsCopy.email = 'Email cannot be the same as your current one';
		}
		else if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email)) {
			errorsCopy.email = 'Please enter a valid email address';
		} else {
			errorsCopy.email = '';
		}

		if (!formData.username.trim() && !formData.password.trim() && !formData.email.trim()) {
			errorsCopy.username = 'At least one field is required';
			errorsCopy.password = 'At least one field is required';
			errorsCopy.email = 'At least one field is required';
		}

		errorsCopy.authentication = '';
		setErrors(errorsCopy);
		console.log(JSON.stringify(formData));
		if (Object.values(errorsCopy).every((error) => !error)) {
			try {
				const response = await fetch('http://127.0.0.1:5000/auth/update', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
					body: JSON.stringify(formData),
				});

				const data = await response.json();

				if (response.ok) {
					login(data);
					resetForm();
					document.getElementById('create-setting-modal').close();
					toast.success('Profile successfully updated!', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Flip,
						});
				} else {
					if (response.status === 409) {
						setErrors({ ...errors, authentication: 'Account with this username or email already exists.' });
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

	// {Handle logout DO NOT TOUCH}
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

	const handleExit = () => {
		resetForm();
	}

	return (
		<div>
			<h3 className='font-bold text-lg pb-2'>Settings</h3>
			<label className='swap swap-rotate'>
				<input type='checkbox' className='theme-controller' value='corporate' />
				<Moon className='swap-off w-10 h-10' />
				<Sun className='swap-on w-10 h-10' color='#ff8040' />
			</label>
			<div className='modal-action flex flex-col justify-center'>
				<form className='flex flex-col gap-4' method='dialog' onSubmit={handleSubmit}>
					{errors.authentication && <p className='text-red-500'>{errors.authentication}</p>}
					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='text'
							id='username'
							name='username'
							className='grow'
							placeholder='Update username'
							onChange={handleChange}
						/>
						{errors.username && <p className='text-red-500'>{errors.username}</p>}
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='password'
							id='password'
							name='password'
							className='grow'
							placeholder='Update password'
							onChange={handleChange}
						/>
						{errors.password && <p className='text-red-500'>{errors.password}</p>}
					</label>

					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='text'
							className='grow'
							id='email'
							name='email'
							placeholder='Update email'
							onChange={handleChange}
						/>
						{errors.email && <p className='text-red-500'>{errors.email}</p>}
					</label>
					<label>
						<input type='file' 
						id='profile_picture'
						name='profile_picture'
						onChange={handleFileChange}
						className='file-input file-input-bordered w-full ' 
						accept='image/*'/>
						{errors.profile_picture && <p className='text-red-500'>{errors.profile_picture}</p>}
					</label>
					<div className='flex flex-row justify-between'>
						<button className='btn'>Save</button>
						<div className='flex flex-row gap-2'>
							<button className='btn' onClick={handleLogout}>
								Logout
							</button>
							<form method='dialog'>
								<button className='btn' onClick={handleExit}>Exit</button>
							</form>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SettingModalForm;
