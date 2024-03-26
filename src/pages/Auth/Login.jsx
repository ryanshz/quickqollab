import React from 'react';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
	return (
		<div className='w-full h-full flex flex-row justify-center items-center overflow-hidden p-8'>
			<div className='w-1/2 h-1/2 p-8'>
				<LoginForm></LoginForm>
			</div>
		</div>
	);
};

export default Login;
