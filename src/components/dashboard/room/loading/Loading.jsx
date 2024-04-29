import React from 'react';
import { RefreshCw, Search } from 'lucide-react';

const Loading = ({ isLoading, children, numRows = 5, isRefreshing }) => {
	const renderLoadingRow = () => (
		<tr>
			<th>
				<div className='skeleton h-4 w-full'></div>
			</th>
			<td>
				<div className='flex items-center gap-3'>
					<div className='avatar'>
						<div className='mask mask-squircle w-12 h-12'>
							<div className='skeleton h-full w-full'></div>
						</div>
					</div>
					<div>
						<div className='font-bold'>
							<div className='skeleton h-4 w-32'></div>
						</div>
					</div>
				</div>
			</td>
			<td className=''>
				<div className='skeleton h-4 w-full'></div>
			</td>
			<th>
				<div className='skeleton h-4 w-full'></div>
			</th>
			<th>
				<div className='skeleton h-4 w-full'></div>
			</th>
		</tr>
	);
	return (
		<>
			{isLoading && (
				<>
					<div className='flex flex-row w-full'>
						<div className='w-full'>
							<label className='input input-bordered flex items-center gap-2 rounded-tl-2xl'>
								<input type='text' className='grow' placeholder='Search for room' />
								<button>
									<Search size={24} />
								</button>
							</label>
						</div>
						<div>
							{isRefreshing ? (
								<label className='input input-bordered flex items-center gap-2 rounded-tr-2xl'>
									<button className='w-px[24] h-px[24]'>
										<span className='loading loading-spinner'></span>
									</button>
								</label>
							) : (
								<label className='input input-bordered flex items-center gap-2 rounded-tr-2xl'>
									<button className='w-px[24] h-px[24]'>
										<RefreshCw size={24} />
									</button>
								</label>
							)}
						</div>
					</div>
					<div className='h-full overflow-y-auto '>
						<table className='table table-zebra table-pin-rows rounded-b-2xl'>
							<thead>
								<tr>
									<th className='w-8'># of users</th>
									<th className='w-64'>Host</th>
									<th className='w-58'>Room name</th>
									<th className='w-24'>Available</th>
									<th className='w-20'>Delete Room</th>
								</tr>
							</thead>
							<tbody>
								{Array.from({ length: numRows }, (_, index) => (
									<React.Fragment key={index}>{renderLoadingRow()}</React.Fragment>
								))}
							</tbody>
						</table>
					</div>
				</>
			)}
			{!isLoading && <>{children}</>}
		</>
	);
};

export default Loading;
