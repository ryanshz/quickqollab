import React from 'react';
import { Link } from 'react-router-dom';
import { CallToActionConfig } from '../../config/site-config';
import { useAuth } from '../../middleware/AuthContext';

const CallToAction = () => {
	const { user } = useAuth();
	let CTARoute = user ? '/dashboard' : '/signup';
	return (
		<div className='w-full h-full'>
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 '>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
					<div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full '>
						<video autoPlay loop muted className='absolute inset-0 h-full w-full object-cover'>
							<source src={CallToActionConfig.video} type='video/mp4' />
						</video>
					</div>

					<div className='lg:py-24 hover:cursor-default'>
						<h2 className='text-3xl text-primary-content font-bold sm:text-4xl text-center'>
							{CallToActionConfig.title}
						</h2>

						<p className='mt-4 text-neutral text-center'>{CallToActionConfig.description}</p>

						<div className='mt-12 text-center'>
							<Link to={CTARoute}>
								<div className='inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-primary-content transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400'>
									Get Started
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
