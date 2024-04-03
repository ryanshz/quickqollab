import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Toolbox from '../components/canvas/Toolbox';
import Whiteboard from '../components/canvas/Whiteboard';
import { useParams } from 'react-router-dom';
import PasswordForm from '../components/canvas/auth/PasswordForm';

function Canvas() {
	const { id: roomId } = useParams();
	const location = useLocation();
	const roomData = location.state.roomData;
	const [color, setColor] = useState('#FFFFFF');
	const [currentTool, setCurrentTool] = useState('scribble');

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
						<div className='h-full w-3/4 flex flex-col items-center justify-start gap-2 bg-base-300'>
							{/* Whiteboard and tools */}
							<div className='w-2/6 h-12 flex flex-row gap-4'>
								<Toolbox setColor={setColor} setCurrentTool={setCurrentTool}></Toolbox>
							</div>
							<Whiteboard penColor={color} currentTool={currentTool} />
						</div>
						<div className='h-full w-1/4'></div>
					</div>
				</div>
			)}
		</main>
	);
}

export default Canvas;
