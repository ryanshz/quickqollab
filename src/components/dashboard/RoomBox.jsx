import React, { useState, useEffect } from 'react';
import SearchForm from './room/SearchForm';

const RoomBox = () => {
	const generateRandomOccupancy = () => Math.floor(Math.random() * 10) + 1; //Used to create random number placeholder in # of users
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true); 
	/*
	Added in this: const [loading, setLoading] = useState(true); to stop flickering
	Sometimes when doing the GET request there seems to be a delay and "No rooms found." would appear momentarily even when their were rooms
	This stops the flickering so "No rooms found" doesn't appear unless there are no rooms
	*/
	const [queryNotFound, setQueryNotFound] = useState(false)

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('http://localhost:5000/room/all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

				const data = await response.json();

                if (response.ok) {
                    setRooms(data.rooms);
                } else {
                    console.error('Failed to fetch rooms', data.message);
                }
            } catch (error) {
                console.error('Error fetching rooms:', error);
            } finally {
            	setLoading(false);
            }
        };

        fetchRooms();
    }, []);

	const handleSearch = async (query) => {
		//Used encode to ensure the front-end would give a message when not matching for special characters like &, %, #
		const encodedQuery = encodeURIComponent(query);
		try {
			const response = await fetch(`http://localhost:5000/room/search?query=${encodedQuery}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});

			const data = await response.json();

			if (response.ok) {
				setRooms(data.rooms);
			} else if (response.status === 404) {
				setRooms([]);
				setQueryNotFound(true);
			}
			else {
				console.error('Failed to fetch search results:', data.message);
			}
		} catch (error) {
			console.error('Error fetching search results:', error);
		}
	};

	if (loading) {
        return null;
    }

	return (
		<div className='w-full h-full flex flex-col rounded-2xl'>
			<div>
				<SearchForm onSearch={handleSearch}/> 
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
						{rooms.length > 0 ? (
							rooms.map((room, index) => {
								const randomOccupancy = generateRandomOccupancy(); //Generate random characters for #Hosts
								return (
									<tr key={index} className='rounded-b-2xl'>
										<th>{randomOccupancy}</th> {/*Placeholder for # of Hosts*/}
										<td>
											<div className='flex items-center gap-3'>
												<div className='avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														<img src={`data:image/jpeg;base64,${room.profile_picture}`} alt={room.username} />
													</div>
												</div>
												<div>
													<div className='font-bold'>{room.username}</div>
												</div>
											</div>
										</td>
										<td className=''>
											<h1 className=''>{room.title}</h1>
										</td>
										<th>
											<button
												className="btn btn-sm rounded-md btn-success">
													Join
											</button>
										</th>
									</tr>
								);
							})
						) : queryNotFound ? (
								<tr>
									<td colSpan='4' className='text-center'>
										<h1 className='text-4xl'>Nothing matched your search criteria.</h1>
									</td>
								</tr>
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
