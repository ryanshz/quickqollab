import React from 'react';
import { Search } from 'lucide-react';

const SearchForm = () => {
	return (
		<div>
			<form action=''>
				<label className='input input-bordered flex items-center gap-2 rounded-t-2xl'>
					<input type='text' className='grow' placeholder='Search for room' />
					<button type='submit'>
						<Search size={24} />
					</button>
				</label>
			</form>
		</div>
	);
};

export default SearchForm;
