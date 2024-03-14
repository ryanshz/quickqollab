import React, { useRef, useState } from 'react';
import Chatbox from '../components/canvas/Chatbox';
import ColorBox from '../components/canvas/ColorBox';
import ShapeBox from '../components/canvas/ShapeBox';

function Canvas() {
	const canvasRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

	// Set Color
	const [color, setColor] = useState('#FFFFFF'); //white is default color

	const handleMouseDown = (e) => {
		setIsDrawing(true);
		const { offsetX, offsetY } = getAdjustedMousePos(e);
		setLastPosition({ x: offsetX, y: offsetY });
	};

	const handleMouseMove = (e) => {
		if (!isDrawing) return;
		const { offsetX, offsetY } = getAdjustedMousePos(e);
		drawLine(lastPosition.x, lastPosition.y, offsetX, offsetY);
		setLastPosition({ x: offsetX, y: offsetY });
	};

	const handleMouseUp = () => {
		setIsDrawing(false);
	};

	const drawLine = (startX, startY, endX, endY) => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.beginPath();
		// use selected color
		ctx.strokeStyle = color;
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.stroke();
	};

	const getAdjustedMousePos = (e) => {
		const rect = canvasRef.current.getBoundingClientRect();
		const scaleX = canvasRef.current.width / rect.width;
		const scaleY = canvasRef.current.height / rect.height;
		return {
			offsetX: (e.clientX - rect.left + window.scrollX) * scaleX,
			offsetY: (e.clientY - rect.top + window.scrollY) * scaleY,
		};
	};

	return (
		<main className='flex flex-row items-center justify-center h-screen w-screen p-4 flex-grow bg-base-300'>
			<div className='h-full w-3/4 flex flex-col items-center justify-start gap-2 bg-base-300'>
				<canvas
					ref={canvasRef}
					className='w-5/6 h-5/6 bg-neutral-700 border-2 border-neutral-700 rounded-md'
					width={700}
					height={700}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
				/>
				<div className='w-2/6 h-12 flex flex-row gap-4'>
					<ShapeBox></ShapeBox>
					<ColorBox setColor={setColor}></ColorBox>
				</div>
			</div>
			<div className='h-full w-1/4'>
				<Chatbox></Chatbox>
			</div>
		</main>
	);
}

export default Canvas;
