import React, { useRef, useState } from 'react';
import io from 'socket.io-client';
import { socketConfig } from '../../config/site-config';
import { Stage, Layer } from 'react-konva';
import Scribble from './events/Scribble';
import { createShape, updateShape } from './events/Shapes';
import Shapes from './events/Shapes';

const socket = io(socketConfig.socket);

const Whiteboard = ({ penColor, currentTool }) => {
	const isDrawing = useRef(false);
	const [scribbles, setScribbles] = useState([]);
	// Holds generic shape obj
	const [shapes, setShapes] = useState([]);

	const handleMouseDown = (e) => {
		isDrawing.current = true;
		const pos = e.target.getStage().getPointerPosition();
		if (currentTool === 'scribble') {
			setScribbles([...scribbles, { points: [pos.x, pos.y], color: penColor }]);
		} else {
			// Append shape (... is spread operator that append newShape to "existing array useState above")
			const newShape = createShape(currentTool, pos, penColor);
			setShapes([...shapes, newShape]);
		}
	};
	const handleMouseMove = (e) => {
		if (!isDrawing.current) return;
		const stage = e.target.getStage();
		const pos = stage.getPointerPosition();
		if (currentTool === 'scribble') {
			// Continue updating the current scribble
			const lastScribble = scribbles[scribbles.length - 1];
			const newScribbles = scribbles.slice(0, -1);
			const newPoints = lastScribble.points.concat([pos.x, pos.y]);
			setScribbles([...newScribbles, { ...lastScribble, points: newPoints }]);
		} else {
			// Update the current shape
			const updatedShapes = updateShape(shapes, currentTool, pos);
			setShapes(updatedShapes);
		}
	};
	const handleMouseUp = (e) => {
		isDrawing.current = false;
	};

	return (
		<Stage
			width={910}
			height={750}
			className='w-5/6 h-5/6 bg-neutral-700 border-2 border-neutral-700 rounded-md'
			onMouseDown={handleMouseDown}
			onMousemove={handleMouseMove}
			onMouseup={handleMouseUp}>
			<Layer>
				{scribbles.map((scribble, i) => (
					<Scribble key={i} scribble={scribble}></Scribble>
				))}
				{shapes.map((shape, i) => (
					<Shapes key={i} shape={shape} />
				))}
			</Layer>
		</Stage>
	);
};

export default Whiteboard;
