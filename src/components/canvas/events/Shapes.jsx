import React from 'react';
import { Rect, Circle } from 'react-konva';

export const createShape = (type, pos, color) => {
	switch (type) {
		case 'rect':
			return { type: 'rect', x: pos.x, y: pos.y, width: 0, height: 0, color };
		case 'circle':
			return { type: 'circle', x: pos.x, y: pos.y, radius: 0, color };
		default:
			return {};
	}
};

export const updateShape = (shapes, tool, pos) => {
	const lastShape = shapes[shapes.length - 1];
	if (!lastShape) return shapes;

	switch (tool) {
		case 'rect':
			return shapes.slice(0, -1).concat({
				...lastShape,
				width: pos.x - lastShape.x,
				height: pos.y - lastShape.y,
			});
		case 'circle':
			const radius = Math.sqrt(Math.pow(pos.x - lastShape.x, 2) + Math.pow(pos.y - lastShape.y, 2));
			return shapes.slice(0, -1).concat({ ...lastShape, radius });
		// Add more cases for other shapes
		default:
			return shapes;
	}
};

const Shapes = ({ shape }) => {
	return (
		<>
			{shape.type === 'rect' && (
				<Rect {...shape} stroke={shape.color} strokeWidth={4} lineCap='round' lineJoin='round' />
			)}
			{shape.type === 'circle' && (
				<Circle {...shape} stroke={shape.color} strokeWidth={4} lineCap='round' lineJoin='round' />
			)}
		</>
	);
};

export default Shapes;
