import React, { useState, useEffect } from 'react';
import SearchForm from './room/SearchForm';
import Loading from './room/loading/Loading';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { socketConfig } from '../../config/site-config';
import Refresh from './room/Refresh';

const socket = io(socketConfig.socket);
const RoomBox = () => {
	const generateRandomOccupancy = () => Math.floor(Math.random() * 10) + 1;
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refresh, setRefresh] = useState(false);
	const [queryNotFound, setQueryNotFound] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = async () => {
		setLoading(true);
		setRefresh(true);
		try {
			const response = await fetch('http://localhost:5000/room/all');
			const data = await response.json();
			if (response.ok) {
				setRooms(data.rooms);
			} else {
				console.error('Failed to fetch rooms', data.message);
			}
		} catch (error) {
			console.error('Error fetching rooms:', error);
		} finally {
			setTimeout(() => {
				setLoading(false);
				setRefresh(false);
			}, 1100);
		}
	};

	const handleJoinRoom = (roomId) => {
		socket.emit('join_room', { room_id: roomId });
		navigate(`/canvas/${roomId}`);
	};

	const handleSearch = async (query) => {
		setLoading(true);
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
			} else {
				console.error('Failed to fetch search results:', data.message);
			}
		} catch (error) {
			console.error('Error fetching search results:', error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 500);
		}
	};
	return (
		<Loading isLoading={loading} isRefreshing={refresh}>
			<div className='flex flex-row w-full'>
				<SearchForm onSearch={handleSearch} />
				<Refresh onSearch={fetchRooms}></Refresh>
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
								const randomOccupancy = generateRandomOccupancy();
								return (
									<tr key={index} className='rounded-b-2xl'>
										<th>{randomOccupancy}</th>
										<td>
											<div className='flex items-center gap-3'>
												<div className='avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														<img
															src={
																room.profile_picture
																	? `data:image/jpeg;base64,${room.profile_picture}`
																	: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
															}
															alt={room.username}
														/>
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
												className='btn btn-sm rounded-md btn-success'
												onClick={() => handleJoinRoom(room.room_id)}>
												Join
											</button>
										</th>
									</tr>
								);
							})
						) : queryNotFound ? (
							<tr>
								<td colSpan='4' rowSpan='4' className='text-center'>
									<div className='flex flex-col items-center justify-center h-full'>
										<div className='w-1/2 h-1/2 pt-5'>
											<img
												src='https://media1.tenor.com/m/wiqeVvUwGrwAAAAd/kiryu-yakuza.gif'
												alt=''
												className='rounded-md'
											/>
										</div>
										<h1>Room not found.</h1>
									</div>
								</td>
							</tr>
						) : (
							<tr>
								<td colSpan='4' rowSpan='4' className='text-center'>
									<div className='flex flex-col items-center justify-center h-full'>
										<div className='w-1/2 h-1/2 pt-5'>
											<img
												src='https://media1.tenor.com/m/wiqeVvUwGrwAAAAd/kiryu-yakuza.gif'
												alt=''
												className='rounded-md'
											/>
										</div>
										<h1 className='font-normal'>No rooms available.</h1>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</Loading>
	);
};

export default RoomBox;
