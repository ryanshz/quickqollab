import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logoblack from '../../assets/logoblack.png';
import { useAuth } from '../../middleware/AuthContext';

const Navbar = () => {
	const { user } = useAuth();
	return (
		<div>
			{user ? (
				<nav className='navbar bg-base-100 xl:pl-44 pl-4 xl:pr-14 pr-4'>
					<section className='flex-1'>
						<label className='swap swap-rotate'>
							<img src={logo} alt='logo' className='w-48 swap-active' />
							<img src={logoblack} alt='logo' className='w-48 swap-on' />
						</label>
					</section>
					<section className='flex-none mr-24'>
						<ul className='menu menu-horizontal'></ul>
					</section>
				</nav>
			) : (
				<nav className='navbar bg-base-100 xl:pl-44 pl-4 xl:pr-14 pr-4'>
					<section className='flex-1'>
						<img src={logo} alt='logo' className='w-48' />
					</section>
					<section className='flex-none mr-24'>
						<ul className='menu menu-horizontal'>
							<li>
								<Link to='/'>about</Link>
							</li>
							<li>
								<Link to='/login'>login</Link>
							</li>
							<li>
								<Link to='/signup'>signup</Link>
							</li>
						</ul>
					</section>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
