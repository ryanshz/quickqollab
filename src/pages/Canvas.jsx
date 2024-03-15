import React, { useState } from 'react';
import Chatbox from '../components/canvas/Chatbox';
import ColorBox from '../components/canvas/ColorBox';
import ShapeBox from '../components/canvas/ShapeBox';
import Whiteboard from '../components/canvas/Whiteboard';

function Canvas() {
	const [color, setColor] = useState('#FFFFFF');

	return (
		<main className='flex flex-row items-center justify-center h-screen w-screen p-4 flex-grow bg-base-300'>
			<div className='h-full w-3/4 flex flex-col items-center justify-start gap-2 bg-base-300'>
				{/* {Whiteboard} */}
				<Whiteboard setColor={color} />
				<div className='w-2/6 h-12 flex flex-row gap-4'>
					{/* {Tools} */}
					<ShapeBox />
					{/* {Colors} */}
					<ColorBox setColor={setColor} />
				</div>
			</div>
			<div className='h-full w-1/4'>
				{/* {Chatbox} */}
				<Chatbox />
			</div>
		</main>
	);
}

export default Canvas;
