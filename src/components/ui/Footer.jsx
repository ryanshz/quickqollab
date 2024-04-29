import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Github } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='footer items-center p-4 bg-base-100 '>
			<aside className='items-center grid-flow-col ml-24'>
				<p>&copy;quickqollab 2024 - All rights reserved</p>
			</aside>
			<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end mr-24'>
				<Link
					to='https://github.com/ryanshz/quickqollab'
					target='_blank'
					className='flex flex-row gap-2 hover:underline'>
					<Github /> <p>Visit our repo.</p>
				</Link>
			</nav>
		</footer>
	);
};

export default Footer;
