import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
	return (
		<nav className="navbar bg-base-100">
			<section className='flex-none'>
				<div className="drawer">
					<input id="my-drawer" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						<label htmlFor="my-drawer" className="btn btn-square btn-primary drawer-button ml-24">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
						</label>
					</div>
					<div className="drawer-side z-50">
						<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
						<ul className="menu p-10 w-80 min-h-full bg-primary">
							<li><Link to="/" className='card-title'>Profile</Link></li>
							<li><Link to="/" className='card-title'>Customize</Link></li>
							<li><Link to="/" className='card-title'>Settings</Link></li>
						</ul>
					</div>
				</div>
			</section>
			<section className="flex-1">
				<Link to='/' className="mb-1 pl-2">
					<img src={logo} alt="logo" className="w-48" />
				</Link>
			</section>
			<section className="flex-none mr-24">
				<ul className="menu menu-horizontal">
					<li><Link to='/'>about</Link></li>
					<li><Link to='/canvas/'>canvas</Link></li>
					<li><Link to='/dashboard/'>dashboard</Link></li>
				</ul>
				<label className="cursor-pointer grid place-items-center px-1">
					<input type="checkbox" value="corporate" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
					<svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
					<svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
				</label>
			</section>
		</nav>
	);
};

export default Navbar;
