import React from 'react';

const PasswordForm = () => {
	const handlePasswordSubmit = async (event) => {
		event.preventDefault();
		const password = event.target.password.value;

		// try {
		// 	// Verify the password against the server
		// 	const response = await fetch(`http://127.0.0.1:5000/room/${roomId}/verify-password`, {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({ password }),
		// 	});

		// 	if (response.ok) {
		// 		// setIsPasswordVerified(true);
		// 	} else {
		// 		alert('Incorrect password. Please try again.');
		// 	}
		// } catch (error) {
		// 	console.error('Error verifying password:', error);
		// }
	};
	return (
		<div>
			{' '}
			<form onSubmit={handlePasswordSubmit} className='flex flex-col items-center justify-center h-screen'>
				<input
					type='password'
					name='password'
					placeholder='Enter room password'
					required
					className='input input-bordered'
				/>
				<button type='submit' className='btn mt-4'>
					Enter Room
				</button>
			</form>
		</div>
	);
};

export default PasswordForm;
