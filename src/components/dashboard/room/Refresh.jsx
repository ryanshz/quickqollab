import React from 'react';
import { RefreshCw } from 'lucide-react';

const Refresh = ({ onSearch }) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		onSearch('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label className='input input-bordered flex items-center gap-2 rounded-tr-2xl'>
					<input type='text' hidden />
					<button type='submit' className='tooltip w-px[24] h-px[24]' data-tip='Refresh'>
						<RefreshCw size={24} />
					</button>
				</label>
			</form>
		</div>
	);
};

export default Refresh;
