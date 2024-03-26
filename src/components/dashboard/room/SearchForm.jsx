import React from 'react';
import { Search } from 'lucide-react';

const SearchForm = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('http://127.0.0.1:5000/', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (response.ok) {
			} else {
				console.error('Login failed:', data.message);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};
	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
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
