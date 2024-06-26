import React, { useState, useEffect } from 'react';
import SearchForm from './room/SearchForm';
import Loading from './room/loading/Loading';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { socketConfig } from '../../config/site-config';
import Refresh from './room/Refresh';
import PasswordForm from './room/PasswordForm';
import { useAuth } from '../../middleware/AuthContext';

const socket = io(socketConfig.socket);
const RoomBox = () => {
	const { user } = useAuth();
	const generateRandomOccupancy = () => Math.floor(Math.random() * 10) + 1;
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refresh, setRefresh] = useState(false);
	const [queryNotFound, setQueryNotFound] = useState(false);
	const [selectedRoom, setSelectedRoom] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = async () => {
		setLoading(true);
		setRefresh(true);
		console.log(user);
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

	const handleDeleteRoom = async (roomId) => {
		try {
			const response = await fetch(`http://127.0.0.1:5000/room/delete/${roomId}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			});
			fetchRooms();
			if (!response.ok) {
				console.error('Failed to delete room');
			}
		} catch (error) {
			console.error('Error deleting room:', error);
		}
	};

	const handleJoinRoom = (roomId) => {
		socket.emit('join_room', { room_id: roomId });
		// console.log(user.username);
		socket.emit('toast_message', user.username);
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
							<th classname='w-20'>Delete Room</th>
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
												onClick={() => {
													console.log('Password Hash:', room.password_hash);

													if (user.client_id === room.host_id) {
														handleJoinRoom(room.room_id);
													} else if (
														room.password_hash !== null &&
														room.password_hash !== undefined
													) {
														setSelectedRoom({ roomID: room.room_id, title: room.title });
														document.getElementById('create-password-modal').showModal();
													} else {
														// Join the room
														handleJoinRoom(room.room_id);
													}
												}}>
												Join
											</button>
										</th>
										<th>
											{user && room.host_id === user.client_id ? (
												<button
													className='btn btn-sm rounded-md bg-red-500 text-white'
													onClick={() => handleDeleteRoom(room.room_id)}>
													Delete
												</button>
											) : (
												<button className='btn btn-sm rounded-md' disabled='disabled'>
													Delete
												</button>
											)}
										</th>
									</tr>
								);
							})
						) : queryNotFound ? (
							<tr>
								<td colSpan='5' rowSpan='5' className='text-center'>
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
								<td colSpan='5' rowSpan='5' className='text-center'>
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
			<dialog id='create-password-modal' className='modal w-full h-full'>
				<div className='modal-box'>
					{selectedRoom && <PasswordForm title={selectedRoom.title} roomID={selectedRoom.roomID} />}
				</div>
			</dialog>
		</Loading>
	);
};

export default RoomBox;
