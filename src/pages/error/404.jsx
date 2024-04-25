import React from 'react';
import ReactPlayer from 'react-player';

const NotFound404 = () => {
	return (
		<div className='flex flex-col place-content-center px-4 '>
			<div className='text-center flex flex-col items-center justify-center gap-2'>
				<h1 className='text-9xl font-black text-gray-200 dark:text-gray-700'>404</h1>
				<p className='text-2xl font-bold tracking-tight text-primary-content sm:text-4xl '>Uh-oh!</p>
				<p className='px-4 text-neutral'>We can't find that page. 😔</p>
				<div className='rounded-2xl'>
					<ReactPlayer url='https://www.youtube.com/watch?v=h2Gw01Gl40o' playing={true} />
				</div>
				<a
					href='/'
					className='mt-6 inline-block rounded bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400'>
					Go Back Home
				</a>{' '}
			</div>
		</div>
	);
};

export default NotFound404;
