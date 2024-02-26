import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
	return (
		<main className='flex flex-row items-center justify-center h-screen w-screen flex-grow'>
			<div className='h-full w-1/5 flex flex-col p-3 border-2 border-green-800 rounded-md'>
				<div className='mb-4'>
					<div className='divider divider-neutral'>Active Room Session</div>
					<button className='btn btn-primary w-full bg-yellow-500'>Room 1</button>
					<button className='btn btn-secondary w-full'>Room 2</button>
					{/* Add more buttons as needed for active room sessions */}
				</div>
				<div>
					<div className='divider divider-neutral'>Other Room Sessions</div>
					<button className='btn btn-secondary w-full'>Room 3</button>
					<button className='btn btn-secondary w-full'>Room 4</button>
					{/* Add more buttons as needed for other room sessions */}
				</div>
			</div>

			<div className='h-full w-3/4 flex flex-col items-center justify-center gap-2'>
				<div>
					<img src='static/logo.png' alt='' width='200' />
				</div>
				<div className='w-5/6 h-5/6 border-black grid grid-rows-3 items-center rounded-md pl-2 pr-2 bg-black'>
					<div className='flex items-center justify-center'>
						<div className='avatar'>
							<div className='w-24 rounded-full'>
								<img
									src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
									alt='Avatar'
								/>
							</div>
						</div>
						<Link to='/profile' className='btn btn-block'>
							View your profile
						</Link>
					</div>
					<div className='flex items-center justify-center'>
						<div>
							<svg xmlns='http://www.w3.org/2000/svg' height='80' width='100' viewBox='0 0 512 512'>
								{/* Font Awesome SVG path */}
								<path
									fill='#63E6BE'
									d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z'
								/>
							</svg>
						</div>
						<button className='btn btn-block'>View your settings</button>
					</div>
					<div className='flex items-center justify-center'>
						<div>
							<svg xmlns='http://www.w3.org/2000/svg' height='80' width='100' viewBox='0 0 576 512'>
								{/* Font Awesome SVG path */}
								<path
									fill='#63E6BE'
									d='M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z'
								/>
							</svg>
						</div>
						<button className='btn btn-block'>Go back to your current room session</button>
					</div>
				</div>
			</div>

			<div className='h-full w-1/5 flex flex-col p-3 border-2 border-green-800 rounded-md'>
				{/* Quick Actions */}
				<div className='mb-4'>
					<div className='divider divider-neutral'>Quick Actions</div>
					<button className='btn btn-primary w-full'>Create New Room</button>
					<button className='btn btn-secondary w-full'>Join Room</button>
					{/* Add more buttons for quick actions */}
				</div>
			</div>
		</main>
	);
}

export default Dashboard;
