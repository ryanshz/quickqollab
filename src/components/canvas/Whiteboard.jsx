import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';
import { socketConfig } from '../../config/site-config';

const socket = io(socketConfig.socket);

const Whiteboard = ({ setTool, setColor }) => {
	const canvasRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
	const [currentColor, setCurrentColor] = useState('#FFFFFF');
	const [currentTool, setCurrentTool] = useState('pen');

	useEffect(() => {
		setCurrentColor(setColor);
	}, [setColor]);
	
	useEffect(() => {
		toolSelection(setTool);
	}, [setTool]);

	useEffect(() => {
		socket.on('drawLine', ({ startX, startY, endX, endY, color, currentTool }) => {
			drawLine(startX, startY, endX, endY, color, currentTool);
		});

		return () => socket.off('drawLine');
	}, []);

	useEffect(() => {
		socket.on('drawSquare', ({ startX, startY, endX, endY, color }) => {
			drawSquare(startX, startY, endX, endY, color);
		});

		return () => socket.off('drawSquare');
	}, []);

	useEffect(() => {
		socket.on('drawStraightLine', ({ startX, startY, endX, endY, color }) => {
			drawStraightLine(startX, startY, endX, endY, color);
		});

		return () => socket.off('drawStraightLine');
	}, []);

	useEffect(() => {
		socket.on('drawCircle', ({ startX, startY, endX, endY, color }) => {
			drawCircle(startX, startY, endX, endY, color);
		});

		return () => socket.off('drawCircle');
	}, []);

	const handleMouseDown = (e) => {
		setIsDrawing(true);
		if(currentTool === 'square' || currentTool === 'line' || currentTool === 'circle'){
			e.preventDefault();
			e.stopPropagation();
		}
		const { offsetX, offsetY } = getAdjustedMousePos(e);
		setLastPosition({ x: offsetX, y: offsetY });
	};

	const handleMouseMove = (e) => {
		if (!isDrawing) return;
		const { offsetX, offsetY } = getAdjustedMousePos(e);
		console.log('tool rn:'+currentTool);
		if(currentTool === 'pen' || currentTool === 'eraser'){
			drawLine(lastPosition.x, lastPosition.y, offsetX, offsetY, currentColor, currentTool);
			setLastPosition({ x: offsetX, y: offsetY });
			socket.emit('drawLine', {
				startX: lastPosition.x,
				startY: lastPosition.y,
				endX: offsetX,
				endY: offsetY,
				color: currentColor,
				tool: currentTool,
			});
		}else{
			switch(currentTool){
					case 'square':
						drawSquare(lastPosition.x, lastPosition.y, offsetX, offsetY, currentColor);
						socket.emit('drawSquare', {
							startX: lastPosition.x,
							startY: lastPosition.y,
							endX: offsetX,
							endY: offsetY,
							color: currentColor,
						});
						break;
					case 'line':
						drawStraightLine(lastPosition.x, lastPosition.y, offsetX, offsetY, currentColor);
						socket.emit('drawStraightLine', {
							startX: lastPosition.x,
							startY: lastPosition.y,
							endX: offsetX,
							endY: offsetY,
							color: currentColor,
						});
						break;
					case 'circle':
						drawCircle(lastPosition.x, lastPosition.y, offsetX, offsetY, currentColor);
						socket.emit('drawCircle', {
							startX: lastPosition.x,
							startY: lastPosition.y,
							endX: offsetX,
							endY: offsetY,
							color: currentColor,
						});
						break;
			}
		}
	};

	const handleMouseUp = () => {
		setIsDrawing(false);
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

	//tool stuff

	const drawLine = (startX, startY, endX, endY, color, tool) => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = color;
		if(tool === 'eraser'){
			ctx.lineWidth = 10;
			ctx.globalCompositeOperation = 'destination-out';
		}else{
			ctx.globalCompositeOperation = 'source-over';	
		}
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.stroke();
	};

	//need to fix
	const drawSquare = (startX, startY, endX, endY, color) => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = color;
		const width = endX - startX;
		const height = endY - startY;
		ctx.strokeRect(startX, startY, width, height);
	}

	//need to fix
	const drawStraightLine = (startX, startY, endX, endY, color) => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = color;
		ctx.moveTo(startX, startY);
		ctx.lineTo(startX+endX, startY+endY);
		ctx.stroke();
		setIsDrawing(false);
	}

	//need to fix
	const drawCircle = (startX, startY, endX, endY, color) => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = color;
		const width = endX - startX;
		const height = endY - startY;
		ctx.ellipse(startX, startY, width, height, 0, 0, 2 * Math.PI);
		ctx.stroke();
	}

	const clearWhiteboard = () => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
	};

	const toolSelection = (tool) => {
		switch (tool) {
			case 'pen':
				setCurrentTool('pen');
				break;
			case 'eraser':
				setCurrentTool('eraser');
				break;
			case 'square':
				setCurrentTool('square');
				break;
			case 'line':
				setCurrentTool('line');
				break;
			case 'circle':
				setCurrentTool('circle');
				break;
			case 'clear':
				clearWhiteboard();
				break;
			default:
				setCurrentTool('pen');
				break;
		}
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
