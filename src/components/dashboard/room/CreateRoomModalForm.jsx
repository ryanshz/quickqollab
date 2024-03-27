import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRoomModalForm = () => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/canvas');
	};

	return (
		<div>
			<h3 className='font-bold text-lg'>Create Room</h3>
			<p className='py-4'>Enter the form below to create a public/private room.</p>
			<div className='modal-action flex flex-col justify-center'>
				<form method='dialog' onSubmit={handleSubmit} className='flex flex-col gap-4'>
					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Room name' />
					</label>
					<label className='input input-bordered flex items-center gap-2'>
						<input type='text' className='grow' placeholder='Password (optional)' />
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
