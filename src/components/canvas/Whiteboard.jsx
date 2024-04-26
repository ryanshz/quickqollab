import React, { useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Scribble from './events/Scribble';
import { createShape, updateShape } from './events/Shapes';
import Shapes from './events/Shapes';
import { useCanvas } from './context/CanvasContext';

const Whiteboard = () => {
	const { currentTool, penColor, scribbles, setScribbles, shapes, setShapes, addToHistory } = useCanvas();

	const isDrawing = useRef(false);

	const handleMouseDown = (e) => {
		isDrawing.current = true;
		// gets cursor position for us (konva.js)
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

	//standalone do not touch
	const handleMouseUp = () => {
		isDrawing.current = false;
		addToHistory(scribbles, shapes);
	};

	return (
		<Stage
			width={window.innerWidth - 20}
			height={window.innerHeight - 185}
			className='bg-base-100 rounded-md'
			onMouseDown={handleMouseDown}
			onMousemove={handleMouseMove}
			onMouseup={handleMouseUp}>
			<Layer>
				{scribbles.map((scribble, i) => (
					<Scribble key={i} scribble={scribble}></Scribble>
				))}
				{/* For shapes, you will need to visit components/canvas/events/Shapes to add additional obj. */}
				{shapes.map((shape, i) => (
					<Shapes key={i} shape={shape} />
				))}
			</Layer>
		</Stage>
	);
};

export default Whiteboard;
