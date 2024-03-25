import React from 'react';

const ColorBox = ({ setColor }) => {
	return (
		<>
			<div class='w-1/2 h-full border-2 border-primary grid grid-cols-5 items-center justify-items-center rounded-md px-2 bg-neutral-500'>
				<button onClick={() => setColor('#ef4444')} className='w-6 h-6 bg-red-500 rounded-full'></button>
				<button onClick={() => setColor('#22c55e')} className='w-6 h-6 bg-green-500 rounded-full'></button>
				<button onClick={() => setColor('#3b82f6')} className='w-6 h-6 bg-blue-500 rounded-full'></button>
				<button onClick={() => setColor('#eab308')} className='w-6 h-6 bg-yellow-500 rounded-full'></button>
				<button onClick={() => setColor('#FFFFFF')} className='w-6 h-6 bg-white rounded-full'></button>
			</div>
		</>
	);
};

export default ColorBox;
