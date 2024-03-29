import React, { useState, useEffect } from 'react';
import Chatbox from '../components/canvas/Chatbox';
import ColorBox from '../components/canvas/ColorBox';
import ShapeBox from '../components/canvas/ShapeBox';
import Whiteboard from '../components/canvas/Whiteboard';
import { useParams } from 'react-router-dom';
import PasswordForm from '../components/canvas/auth/PasswordForm';

function Canvas() {
	const { id: roomId } = useParams();

	const [color, setColor] = useState('#FFFFFF');

	return (
		<main className='flex flex-row items-center justify-center h-screen w-screen p-4 flex-grow bg-base-300'>
			{false ? (
				<PasswordForm />
			) : (
				<div className='flex flex-row h-full w-full'>
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
			)}
		</main>
	);
}

export default Canvas;
