import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
	return (
		<header className='sticky top-0 left-0 z-50'>
			<div class='navbar bg-base-100 '>
				<div class='flex-none'>
					<details class='dropdown'>
						<summary class='m-1 btn border-green-800 rounded-md'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								class='inline-block w-5 h-5 stroke-current'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M4 6h16M4 12h16M4 18h16'></path>
							</svg>
						</summary>
						<ul class='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52'>
							<li>
								<Link to='/' className='text-white pr-4'>
									Home
								</Link>
							</li>
							<li>
								<Link to='/canvas' className='text-white'>
									Canvas
								</Link>
							</li>

							<li>
								<Link to='/dashboard' className='text-white'>
									Dashboard
								</Link>
							</li>
						</ul>
					</details>
				</div>
				<div class='flex-1'>
					<a class='btn btn-ghost text-xl' href='/'>
						<img class='w-48' src={logo} alt='logo' />
					</a>
				</div>
				<label class='cursor-pointer grid place-items-center pr-5'>
					<input
						type='checkbox'
						value='cupcake'
						class='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
					/>
					<svg
						class='col-start-1 row-start-1 stroke-base-100 fill-base-100'
						xmlns='http://www.w3.org/2000/svg'
						width='14'
						height='14'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'>
						<circle cx='12' cy='12' r='5' />
						<path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
					</svg>
					<svg
						class='col-start-2 row-start-1 stroke-base-100 fill-base-100'
						xmlns='http://www.w3.org/2000/svg'
						width='14'
						height='14'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'>
						<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
					</svg>
				</label>
				{/* <div class="avatar">
				<div class="w-12 rounded-full">
					<a href="{{ url_for('dashboard.dashboard')}}"><img src="static/template.jpg" /></a>
				</div>
			</div>  */}
				<a href='/signup' class='pr-2'>
					Sign Up
				</a>
			</div>
		</header>
	);
};

export default Navbar;
