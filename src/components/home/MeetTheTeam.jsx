import React from 'react';
import { TeamConfig } from '../../config/site-config';

const MeetTheTeam = () => {
	return (
		<div>
			<section className='w-screen h-screen hover:cursor-default'>
				<div className='p-12 flex flex-col justify-center items-center w-full h-full'>
					<div className='max-w-xl'>
						<h2 className='text-3xl font-bold sm:text-4xl text-center'>{TeamConfig.title}</h2>
						<p className='mt-4 text-neutral-content text-lg text-center'>{TeamConfig.description}</p>
					</div>

					<div className='m-4 grid grid-cols-3 grid-row-2 gap-8'>
						{TeamConfig.item.map((item, index) => {
							if (index === 4) {
								return (
									<>
										<div
											key={`${index}-special`}
											className='col-span-1 flex justify-center items-center'>
											<div className='flex flex-row justify-between tooltip' data-tip='Click me!'>
												<label className='swap swap-flip text-9xl'>
													<input type='checkbox' />
													<div className='swap-off'>🛸</div>
													<div className='swap-on'>👽</div>
												</label>
												<label className='swap swap-flip text-9xl'>
													<input type='checkbox' />
													<div className='swap-off'>🧑‍🚀</div>
													<div className='swap-on'>👽</div>
												</label>
												<label className='swap swap-flip text-9xl'>
													<input type='checkbox' />
													<div className='swap-off'>🚀</div>
													<div className='swap-on'>👽</div>
												</label>
											</div>
										</div>
										<div
											key={`${index}-item`}
											className='flex items-start gap-4 col-span-1 rounded-2xl border-gray-800 p-8 border shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10 hover:cursor-default'>
											<div className='w-2/5'>
												<img src={item.picture} alt={item.name} className='rounded-2xl' />
											</div>
											<div className='flex flex-col justify-start w-3/5'>
												<h1 className='font-bold text-3xl text-primary-content'>{item.name}</h1>
												<h3 className='font-thin text-xl text-secondary-content'>{item.role}</h3>
												<p className='mt-1 text-sm text-tertairy-content'>{item.description}</p>
											</div>
										</div>
									</>
								);
							}
							return (
								<div
									key={index}
									className='flex items-start gap-4 col-span-1 rounded-2xl border border-gray-800 p-8 shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10 hover:cursor-default'>
									<div className='w-2/5'>
										<img src={item.picture} alt={item.name} className='rounded-2xl' />
									</div>
									<div className='flex flex-col justify-start w-3/5'>
										<h1 className='font-bold text-3xl text-primary-content'>{item.name}</h1>
										<h3 className='font-thin text-xl text-secondary-content'>{item.role}</h3>
										<p className='mt-1 text-sm text-tertairy-content'>{item.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default MeetTheTeam;
