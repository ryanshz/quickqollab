import React from 'react';
import { Rect, Circle, RegularPolygon } from 'react-konva';

/**
 * Create a new shape
 * @param {*} type Type of shape to create.
 * @param {*} pos Pos obj containing coordinates of the shape's position.
 * @param {*} color Color of shape's stroke.
 * @returns Shape object with properties depending on shape type.
 */
export const createShape = (type, pos, color) => {
	switch (type) {
		case 'rect':
			return { type: 'rect', x: pos.x, y: pos.y, width: 0, height: 0, color };
		case 'circle':
			return { type: 'circle', x: pos.x, y: pos.y, radius: 0, color };
		case 'triangle':
			return {
				type: 'triangle',
				x: pos.x,
				y: pos.y,
				sides: 3,
				radius: 0,
				color,
			};
		default:
			return {};
	}
};

/**
 * Update most recently added last shape shapes (array) based on "tools" (circle or rect) and new position.
 * @param {*} shapes An array of shape objects from useState hook.
 * @param {*} tool Current tool used (rect or circle).
 * @param {*} pos Pos obj containing current coordinates of the shape's position
 * @returns New array of shape objects with the last shape updated.
 */
export const updateShape = (shapes, tool, pos) => {
	// target recently added shape
	const lastShape = shapes[shapes.length - 1];
	// case for checking empty array
	if (!lastShape) return shapes;

	/**
	 * slice(0,1) creates new arr that contains all shapes except the last one.
	 * concat({...lastShape, props...}) add updated last shape and 	returns new arr (merges two arr generated from both slice with concat)
	 *
	 * spread operator "deserialized" last element (last shape) which will be used for calculation of relevant props. Then appended on merge.
	 */
	switch (tool) {
		case 'rect':
			return shapes.slice(0, -1).concat({
				...lastShape,
				width: pos.x - lastShape.x,
				height: pos.y - lastShape.y,
			});
		case 'circle':
			const radius = Math.sqrt(Math.pow(pos.x - lastShape.x, 1.8) + Math.pow(pos.y - lastShape.y, 1.8));
			return shapes.slice(0, -1).concat({ ...lastShape, radius });
		case 'triangle':
			return shapes.slice(0, -1).concat({
				...lastShape,
				radius: Math.sqrt(Math.pow(pos.x - lastShape.x, 2) + Math.pow(pos.y - lastShape.y, 2)),
			});
		// Add more cases for other shapes
		default:
			return shapes;
	}
};

/**
 *
 * @param {*} shape Prop that contains properties. Checks on prop "type" to determine which condition to render.
 * @returns Corresponding element or else nothing.
 */

const Shapes = ({ shape, draggable, onDragEnd }) => {
	const handleDragEnd = (e) => {
		onDragEnd(shape, { x: e.target.x(), y: e.target.y() });
	};
	return (
		<>
			{/* Konva contains built-in classes such as Rect or Circle so be sure to look into what they have! */}
			{shape.type === 'rect' && (
				<Rect
					{...shape}
					stroke={shape.color}
					strokeWidth={4}
					lineCap='round'
					lineJoin='round'
					draggable={draggable}
					onDragEnd={handleDragEnd}
				/>
			)}
			{shape.type === 'circle' && (
				<Circle
					{...shape}
					stroke={shape.color}
					strokeWidth={4}
					lineCap='round'
					lineJoin='round'
					draggable={draggable}
					onDragEnd={handleDragEnd}
				/>
			)}
			{shape.type === 'triangle' && (
				<RegularPolygon
					x={shape.x}
					y={shape.y}
					sides={3}
					radius={shape.radius}
					stroke={shape.color}
					strokeWidth={4}
					draggable={draggable}
					onDragEnd={handleDragEnd}
				/>
			)}
		</>
	);
};

export default Shapes;
