import React from 'react';
import Phone from './ui/Phone';

const InfoBox = () => {
	return (
		<div className='w-full h-full flex flex-row'>
			<div className='w-fit h-fit'>
				<Phone></Phone>
			</div>
			<div className='w-full h-full flex flex-col justify-center xl:pl-12 pl-4 hover:cursor-default'>
				<h1 className='xl:text-3xl text-2xl pb-2'>
					<span className='font-bold xl:text-7xl text-5xl text-center'>quickqollab</span> coming to mobile🎉.
				</h1>
				<h1 className='xl:text-2xl text-lg'>Joking! Unless you're willing to fund us... 😈</h1>
			</div>
		</div>
	);
};

export default InfoBox;
