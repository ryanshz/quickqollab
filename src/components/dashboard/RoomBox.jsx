import React from 'react';
import SearchForm from './room/SearchForm';
import { RoomConfig } from '../../config/room-config';

const RoomBox = () => {
	return (
		<div className='w-full h-full flex flex-col rounded-2xl'>
			<div>
				<SearchForm></SearchForm>
			</div>
			<div className='h-full overflow-y-auto '>
				<table className='table table-zebra table-pin-rows rounded-b-2xl'>
					<thead>
						<tr>
							<th className='w-8'># of users</th>
							<th className='w-64'>Host</th>
							<th className='w-58'>Room name</th>
							<th className='w-24'>Available</th>
						</tr>
					</thead>
					<tbody>
						{RoomConfig.item.length > 0 ? (
							RoomConfig.item.map((item, index) => {
								return (
									<tr key={index} className='rounded-b-2xl'>
										<th>{item.currentOccupancy}</th>
										<td>
											<div className='flex items-center gap-3'>
												<div className='avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														<img src={item.image} alt={item.hostName} />
													</div>
												</div>
												<div>
													<div className='font-bold'>{item.hostName}</div>
													<div className='text-sm opacity-50'>{item.location}</div>
												</div>
											</div>
										</td>
										<td className=''>
											<h1 className=''>{item.roomName}</h1>
										</td>
										<th>
											<button
												className={`btn btn-sm rounded-md ${
													item.availability ? 'btn-success' : 'btn-disabled'
												}`}>
												{item.availability ? 'Join' : 'Full'}
											</button>
										</th>
									</tr>
								);
							})
						) : (
							<tr>
								<td colSpan='4' className='text-center'>
									<h1 className='text-4xl'>No rooms found.</h1>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RoomBox;
