import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchForm = ( {onSearch} ) => {
	const [query, setQuery] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label className='input input-bordered flex items-center gap-2 rounded-t-2xl'>
					<input 
					type='text' 
					className='grow' 
					placeholder='Search for room'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					/>
					<button type='submit'>
						<Search size={24} />
					</button>
				</label>
			</form>
		</div>
	);
};

export default SearchForm;
