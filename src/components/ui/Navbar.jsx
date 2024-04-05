import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logoblack from '../../assets/logoblack.png';
import { useAuth } from '../../middleware/AuthContext';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
	const { user } = useAuth();

	//makes theme of page persistent through refresh
	const [pageThemeIsDark, setThemeToDark] = useState(JSON.parse(localStorage.getItem('pageThemeIsDark')));

	useEffect(() => {
		try {
			localStorage.setItem('pageThemeIsDark', JSON.stringify(pageThemeIsDark));
		} catch (e) {
			console.error('Failed to set page theme:', e);
		}
	}, [pageThemeIsDark]);

	const setLogoImage = () => {
		if (pageThemeIsDark) {
			return logoblack;
		} else {
			return logo;
		}
	};

	return (
		<div>
			{user ? (
				<nav className='navbar bg-base-100 xl:pl-44 pl-4 xl:pr-14 pr-4'>
					<section className='flex-1'>
						<Link to='/'>
							<img src={setLogoImage()} alt='logo' className='w-48' />
						</Link>
					</section>
					<section className='flex-none mr-28'>
						<ul className='menu menu-horizontal'>
							<li>
								<label className='swap swap-rotate'>
									<input
										type='checkbox'
										className='theme-controller'
										value='corporate'
										checked={pageThemeIsDark}
										onChange={() => setThemeToDark(!pageThemeIsDark)}
									/>
									<Moon className='swap-off w-5 h-5' />
									<Sun className='swap-on w-5 h-5' color='#ff8040' />
								</label>
							</li>
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
							<img id='navbar-logo' src={setLogoImage()} alt='logo' className='w-48' />
						</Link>
					</section>
					<section className='flex-none'>
						<ul className='menu menu-horizontal'>
							<li>
								<Link to='/login'>Sign in</Link>
							</li>
							<li>
								<Link to='/signup'>Sign up</Link>
							</li>
						</ul>
					</section>
					<section className='flex-none mr-28'>
						<label className='swap swap-rotate'>
							<input
								type='checkbox'
								className='theme-controller'
								value='corporate'
								checked={pageThemeIsDark}
								onChange={() => setThemeToDark(!pageThemeIsDark)}
							/>
							<Moon className='swap-off w-10 h-10' />
							<Sun className='swap-on w-10 h-10' color='#ff8040' />
						</label>
					</section>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
