import React from 'react';
import SearchForm from './room/SearchForm';

const RoomBox = () => {
	return (
		<div className='w-full h-full flex flex-col rounded-2xl'>
			<div>
				<SearchForm></SearchForm>
			</div>
			<div className='h-full overflow-y-auto '>
				<table className='table table-zebra table-pin-rows rounded-b-2xl'>
					{/* head */}
					<thead>
						<tr>
							<th className='w-8'># of users</th>
							<th className='w-64'>Host</th>
							<th className='w-58'>Room name</th>
							<th className='w-24'>Available</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr className='rounded-b-2xl'>
							<th>1/6</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
												alt='Profile Avatar'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>Hart Hagerty</div>
										<div className='text-sm opacity-50'>United States</div>
									</div>
								</div>
							</td>
							<td className=''>
								<h1 className=''>Business Ventures</h1>
							</td>
							<th>
								<button className='btn btn-success btn-sm rounded-md'>Join</button>
							</th>
						</tr>
						{/* row 2 */}
						<tr className='rounded-b-2xl'>
							<th>6/6</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
												alt='Profile Avatar'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>Hart Hagerty</div>
										<div className='text-sm opacity-50'>United States</div>
									</div>
								</div>
							</td>
							<td className=''>
								<h1 className=''>Business Ventures</h1>
							</td>
							<th>
								<button className='btn btn-disabled btn-sm rounded-md'>Full</button>
							</th>
						</tr>
						{/* row 1 */}
						<tr className='rounded-b-2xl'>
							<th>1/6</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
												alt='Profile Avatar'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>Hart Hagerty</div>
										<div className='text-sm opacity-50'>United States</div>
									</div>
								</div>
							</td>
							<td className=''>
								<h1 className=''>Business Ventures</h1>
							</td>
							<th>
								<button className='btn btn-success btn-sm rounded-md'>Join</button>
							</th>
						</tr>
						{/* row 2 */}
						<tr className='rounded-b-2xl'>
							<th>6/6</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
												alt='Profile Avatar'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>Hart Hagerty</div>
										<div className='text-sm opacity-50'>United States</div>
									</div>
								</div>
							</td>
							<td className=''>
								<h1 className=''>Business Ventures</h1>
							</td>
							<th>
								<button className='btn btn-disabled btn-sm rounded-md'>Full</button>
							</th>
						</tr>
						{/* row 1 */}
						<tr className='rounded-b-2xl'>
							<th>1/6</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
												alt='Profile Avatar'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>Hart Hagerty</div>
										<div className='text-sm opacity-50'>United States</div>
									</div>
								</div>
							</td>
							<td className=''>
								<h1 className=''>Business Ventures</h1>
							</td>
							<th>
								<button className='btn btn-success btn-sm rounded-md'>Join</button>
							</th>
						</tr>
						{/* row 2 */}
						<tr className='rounded-b-2xl'>
							<th>6/6</th>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
												alt='Profile Avatar'
											/>
										</div>
									</div>
									<div>
										<div className='font-bold'>Hart Hagerty</div>
										<div className='text-sm opacity-50'>United States</div>
									</div>
								</div>
							</td>
							<td className=''>
								<h1 className=''>Business Ventures</h1>
							</td>
							<th>
								<button className='btn btn-disabled btn-sm rounded-md'>Full</button>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RoomBox;
