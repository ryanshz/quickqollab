import React from 'react';
import SignUpForm from '../../components/auth/SignUpForm';

const Signup = () => {
	return (
		<div className='w-full h-fit flex flex-row justify-center items-center '>
			<div className='w-2/3  p-8'>
				<SignUpForm></SignUpForm>
			</div>
		</div>
	);
};

export default Signup;
