import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';
import { socketConfig } from '../../config/site-config';

const socket = io(socketConfig.socket);

const Whiteboard = ({ setColor }) => {
	const canvasRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
	const [currentColor, setCurrentColor] = useState('#FFFFFF');

	useEffect(() => {
		setCurrentColor(setColor);
	}, [setColor]);

	useEffect(() => {
		socket.on('drawLine', ({ startX, startY, endX, endY, color }) => {
			drawLine(startX, startY, endX, endY, color);
		});

		return () => socket.off('drawLine');
	}, []);

	const handleMouseDown = (e) => {
		setIsDrawing(true);
		const { offsetX, offsetY } = getAdjustedMousePos(e);
		setLastPosition({ x: offsetX, y: offsetY });
	};

	const handleMouseMove = (e) => {
		if (!isDrawing) return;
		const { offsetX, offsetY } = getAdjustedMousePos(e);
		drawLine(lastPosition.x, lastPosition.y, offsetX, offsetY, currentColor);
		setLastPosition({ x: offsetX, y: offsetY });
		socket.emit('drawLine', {
			startX: lastPosition.x,
			startY: lastPosition.y,
			endX: offsetX,
			endY: offsetY,
			color: currentColor,
		});
	};

	const handleMouseUp = () => {
		setIsDrawing(false);
	};

	const drawLine = (startX, startY, endX, endY, color) => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.beginPath();
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
		<canvas
			ref={canvasRef}
			className='w-5/6 h-5/6 bg-neutral-700 border-2 border-neutral-700 rounded-md'
			width={700}
			height={700}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		/>
	);
};

export default Whiteboard;
