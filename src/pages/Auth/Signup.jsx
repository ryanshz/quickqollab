import React from 'react';
import SignUpForm from '../../components/auth/SignUpForm';

const Signup = () => {
	return (
		<div className='w-full h-fit flex flex-row justify-center items-center '>
			<div className='xl:w-2/3 w-full h-full p-8 pt-32'>
				<SignUpForm></SignUpForm>
			</div>
		</div>
	);
};

export default Signup;
