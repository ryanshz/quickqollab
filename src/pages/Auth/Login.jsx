import React from 'react';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
	return (
		<div className='w-full h-full flex flex-row justify-center items-center overflow-hidden p-8'>
			<div className='xl:w-1/2 xl:h-1/2 w-full h-full p-8'>
				<LoginForm></LoginForm>
			</div>
		</div>
	);
};

export default Login;
