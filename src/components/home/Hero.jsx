import React from 'react';
import { PencilLine } from 'lucide-react';

const Hero = () => {
	return (
		<div className='w-screen h-screen'>
			<div>
				<section className=''>
					<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
						<div className='mx-auto max-w-lg text-center'>
							<h2 className='text-3xl font-bold sm:text-4xl'>Meeting just got easier.</h2>
							<p className='mt-4 text-gray-300'>
								Building, sketching, and communication with your team at the tip of a mouse. Introducing
								an easy way to teamwork.
							</p>
						</div>

						<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
							<div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
								<PencilLine />
								<h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>

								<p className='mt-1 text-sm text-gray-300'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</div>
							<div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
								<PencilLine />
								<h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>
								<p className='mt-1 text-sm text-gray-300'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</div>
							<div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
								<PencilLine />
								<h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>
								<p className='mt-1 text-sm text-gray-300'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</div>
							<div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
								<PencilLine />
								<h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>
								<p className='mt-1 text-sm text-gray-300'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</div>
							<div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
								<PencilLine />
								<h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>
								<p className='mt-1 text-sm text-gray-300'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</div>
							<div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
								<PencilLine />
								<h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>
								<p className='mt-1 text-sm text-gray-300'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</div>
						</div>
						<div className='mt-12 text-center'>
							<div
								href='#'
								className='inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400'>
								Get Started Today
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Hero;
