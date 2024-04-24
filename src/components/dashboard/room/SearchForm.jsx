import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchForm = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<div className='w-full'>
			<form onSubmit={handleSubmit}>
				<label className='input input-bordered flex items-center gap-2 rounded-tl-2xl'>
					<input
						type='text'
						className='grow'
						placeholder='Search for room'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button type='submit' className='tooltip w-px[24] h-px[24]' data-tip='Search'>
						<Search size={24} />
					</button>
				</label>
			</form>
		</div>
	);
};

export default SearchForm;
