import React from 'react';
import { useState, useEffect } from 'react';

const Test = () => {
	const [user, setUser] = useState([]);
	useEffect(() => {
		fetch('http://127.0.0.1:5000/test/1')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setUser(data);
			});
	}, []);

	return (
		<>
			<main className='w-screen h-screen flex flex-row justify-center items-center'>
				<div className='w-1/2 h-full flex flex-col items-center justify-center'>
					{user ? (
						<>
							<h1 className='text-5xl text-red-200'>Username: {user.username}</h1>
							<h1 className='text-2xl text-red-50'>User's Email: {user.email}</h1>
							<div className='w-1/4 pt-11'>
								<img src='https://i.kym-cdn.com/photos/images/original/001/899/710/52a.png' alt='' />
							</div>
						</>
					) : (
						<>
							<h1 className='text-2xl text-red-50'>No user data detected.</h1>
							<h1 className='text-2xl text-red-50'>Try connecting to database</h1>
						</>
					)}
				</div>
				<div className='w-1/2 h-full flex items-center justify-center'>
					<img
						src='https://media.tenor.com/_Y0bcsmT1LsAAAAM/m4rkdoll.gif'
						alt=''
						srcset=''
						className='w-1/2 h-1/2'
					/>
				</div>
			</main>
		</>
	);
};

export default Test;
