import React from 'react';

const ShapeBox = () => {
	return (
		<div className='w-1/2 h-full border-2 border-green-800 grid grid-cols-5 items-center rounded-md pl-2 pr-2 bg-neutral-500'>
			<div className='flex items-center justify-center'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='25' height='25'>
					<path
						fill='#ffffff'
						d='M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z'
					/>
				</svg>
			</div>
			<div className='flex items-center justify-center'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='25' height='25'>
					<path
						fill='#ffffff'
						d='M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z'
					/>
				</svg>
			</div>
			<div className='flex items-center justify-center'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='25' height='25'>
					<path
						fill='#ffffff'
						d='M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'
					/>
				</svg>
			</div>
			<div className='flex items-center justify-center'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' width='25' height='25'>
					<path
						fill='#ffffff'
						d='M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z'
					/>
				</svg>
			</div>
			<div className='flex items-center justify-center'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512 ' width='25' height='25'>
					<path
						fill='#ffffff'
						d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z'
					/>
				</svg>
			</div>
		</div>
	);
};

export default ShapeBox;
