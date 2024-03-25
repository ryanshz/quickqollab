import React from 'react';
import Phone from './ui/Phone';

const InfoBox = () => {
	return (
		<div className='w-full h-full flex flex-row'>
			<div className='w-fit h-fit'>
				<Phone></Phone>
			</div>
			<div className='w-full h-full flex flex-col justify-center pl-12 hover:cursor-default'>
				<h1 className='text-3xl pb-2'>
					<span className='font-bold text-7xl text-center'>quickqollab</span> coming to mobile🎉.
				</h1>
				<h1 className='text-2xl'>Joking! Unless you're willing to fund us... 😈</h1>
			</div>
		</div>
	);
};

export default InfoBox;
