import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { TimeLineConfig } from '../../config/site-config';

const FAQ = () => {
	return (
		<div className='w-screen h-screen py-12 px-36'>
			<ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical hover:cursor-default'>
				{TimeLineConfig.item.map((item, index) => {
					if (index % 2 === 0) {
						return (
							<li>
								<div className='timeline-middle text-green-400'>
									<BadgeCheck />
								</div>
								<div className='timeline-start md:text-end mb-10'>
									<time className='font-mono italic text-primary-content'>{item.time}</time>
									<div className='text-lg font-black'>{item.title}</div>
									<p className='text-secondary-content text-right'>{item.description}</p>
								</div>
								<hr />
							</li>
						);
					} else {
						return (
							<li>
								<hr />
								<div className='timeline-middle text-green-400'>
									<BadgeCheck />
								</div>
								<div className='timeline-end mb-10'>
									<time className='font-mono italic'>{item.time}</time>
									<div className='text-lg font-black'>{item.title}</div>
									<p className='text-secondary-content text-left'>{item.description}</p>
								</div>
								<hr />
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};

export default FAQ;
