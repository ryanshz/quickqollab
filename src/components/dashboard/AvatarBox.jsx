import React from 'react';

const AvatarBox = ({ user }) => {
	// {Re-format user.date_created to MM-DD-YEAR}
	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', options);
	};

	const formattedDate = formatDate(user.date_created);
	console.log("user.profile_picture:", user.profile_picture);

	return (
		<div className='w-full h-full'>
			{user ? (
				<div className='w-full h-full flex flex-row items-center justify-start p-4 gap-4'>
					<div className='avatar pr-2 w-32'>
						<div className='w-32 rounded-3xl'>
						<img
                                src={user.profile_picture ? `data:image/jpeg;base64,${user.profile_picture}` : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}
                                alt='Profile Avatar'
                            />
						</div>
					</div>

					<div className='flex flex-col gap-1 hover:cursor-default'>
						<h1 className='text-4xl font-bold'>
							Welcome <span className='underline decoration-success'>{user.username}</span>.
						</h1>

						<p className='text-base-neutral font-thin'>Joined: {formattedDate}</p>
					</div>
				</div>
			) : (
				<div>User not logged in.</div>
			)}
		</div>
	);
};

export default AvatarBox;
