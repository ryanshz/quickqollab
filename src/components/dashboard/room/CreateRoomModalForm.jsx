import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../middleware/AuthContext';

const CreateRoomModalForm = () => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		password: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('http://127.0.0.1:5000/room/new', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				navigate('/canvas');
			} else {
				// Handle error response
				console.error('Failed to create room:', response.statusText);
			}
		} catch (error) {
			// Handle network errors
			console.error('Network error:', error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div>
			<h3 className='font-bold text-lg'>Create Room</h3>
			<p className='py-4'>Enter the form below to create a public/private room.</p>
			<div className='modal-action flex flex-col justify-center'>
				<form method='dialog' onSubmit={handleSubmit} className='flex flex-col gap-4'>
					<input
						type='text'
						name='host'
						value={user.username}
						onChange={handleChange}
						className='grow'
						hidden
					/>
					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='text'
							name='title'
							value={formData.title}
							onChange={handleChange}
							className='grow'
							placeholder='Room name'
							autocomplete='off'
						/>
					</label>
					<label className='input input-bordered flex items-center gap-2'>
						<input
							type='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							className='grow'
							placeholder='Password (optional)'
							autocomplete='off'
						/>
					</label>
					{/* if there is a button in form, it will close the modal */}
					<div className='flex flex-row justify-between'>
						<button className='btn' type='submit'>
							Create Room
						</button>
						<form method='dialog'>
							<button className='btn'>Exit</button>
						</form>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateRoomModalForm;
