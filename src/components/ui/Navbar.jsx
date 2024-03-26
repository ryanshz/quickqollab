import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAuth } from '../../middleware/AuthContext';

const Navbar = () => {
	const { user } = useAuth();
	return (
		<div>
			{user ? (
				<nav className='navbar bg-base-100 xl:pl-44 pl-4 xl:pr-14 pr-4'>
					<section className='flex-1'>
						<Link to='/'>
							<img src={logo} alt='logo' className='w-48' />
						</Link>
					</section>
					<section className='flex-none mr-24'>
						<ul className='menu menu-horizontal'>
							<li>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
						</ul>
					</section>
				</nav>
			) : (
				<nav className='navbar bg-base-100 xl:pl-44 pl-4 xl:pr-14 pr-4'>
					<section className='flex-1'>
						<Link to='/'>
							<img src={logo} alt='logo' className='w-48' />
						</Link>
					</section>
					<section className='flex-none mr-24'>
						<ul className='menu menu-horizontal'>
							<li>
								<Link to='/login'>Sign in</Link>
							</li>
							<li>
								<Link to='/signup'>Sign up</Link>
							</li>
						</ul>
					</section>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
