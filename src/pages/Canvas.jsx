import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chatbox from '../components/canvas/Chatbox';
import ColorBox from '../components/canvas/ColorBox';
import ShapeBox from '../components/canvas/ShapeBox';
import Whiteboard from '../components/canvas/Whiteboard';
import { useParams } from 'react-router-dom';
import PasswordForm from '../components/canvas/auth/PasswordForm';

function Canvas() {
	const { id: roomId } = useParams();
	const location = useLocation();
	const roomData = location.state.roomData;
	const [color, setColor] = useState('#FFFFFF');

	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', options);
	};

	return (
		<main className='flex flex-row items-center justify-center h-screen w-screen p-4 flex-grow bg-base-300'>
			{false ? (
				<PasswordForm />
			) : (
				<div className='h-full w-full'>
					<div className='flex flex-row h-full w-full'>
						<div className='w-60'>
							<h1 className='text-4xl'>Room details</h1>
							<p>Testing and demonstration purposes</p>
							<div className='divider'></div>
							<h1>
								Title: <span className='font-bold'>{roomData.title}</span>
							</h1>
							<h2>
								room id: <span className='font-bold'>{roomData.room_id}</span>
							</h2>
							<h2>
								host id: <span className='font-bold'>{roomData.host_id}</span>
							</h2>
							<p>
								Date created: <span className='font-bold'>{formatDate(roomData.date_created)}</span>
							</p>
						</div>
						<div className='h-full w-3/4 flex flex-col items-center justify-start gap-2 bg-base-300'>
							{/* Whiteboard and tools */}
							<Whiteboard setColor={color} />
							<div className='w-2/6 h-12 flex flex-row gap-4'>
								<ShapeBox />
								<ColorBox setColor={setColor} />
							</div>
						</div>
						<div className='h-full w-1/4'>
							{/* Chatbox */}
							<Chatbox />
						</div>
					</div>
				</div>
			)}
		</main>
	);
}

export default Canvas;
