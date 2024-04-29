import React from 'react';
import { HeroConfig } from '../../config/site-config';
import { Link } from 'react-router-dom';
import Icon from './ui/Icon';
import { MoveDown } from 'lucide-react';
import { useAuth } from '../../middleware/AuthContext';

const Hero = () => {
	const { user } = useAuth();
	let CTARoute = user ? '/dashboard' : '/signup';
	return (
		<div className='w-screen h-fit'>
			<section className='hover:cursor-default'>
				<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
					<div className='mx-auto max-w-lg text-center hover:cursor-default'>
						<h2 className='text-3xl font-bold sm:text-4xl'> {HeroConfig.title} </h2>
						<p className='mt-4 text-secondary-content text-lg'>{HeroConfig.description}</p>
					</div>

					<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{HeroConfig.item.map((item) => {
							return (
								<div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10 hover:cursor-default'>
									<Icon type={item.icon ?? ''}></Icon>
									<h2 className='mt-4 text-xl font-bold text-primary-content'>{item.title}</h2>
									<p className='mt-1 text-sm text-secondary-content'>{item.description}</p>
								</div>
							);
						})}
					</div>
					<div className='mt-12 text-center'>
						<Link to={CTARoute}>
							<div
								href='#'
								className='inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400'>
								Get Started
							</div>
						</Link>
					</div>
					<div className='flex flex-row justify-center text-center pt-8'>
						<MoveDown size={58} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
