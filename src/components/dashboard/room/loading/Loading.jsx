import React from 'react';
import SearchForm from '../SearchForm';

const Loading = ({ isLoading, children, numRows = 4 }) => {
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
		</tr>
	);
	return (
		<>
			{isLoading && (
				<>
					<div>
						<SearchForm />
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
