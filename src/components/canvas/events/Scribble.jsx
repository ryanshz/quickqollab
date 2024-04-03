import React from 'react';
import { Line } from 'react-konva';

const Scribble = ({ scribble }) => {
	return (
		<Line
			key={scribble.id}
			lineCap='round'
			lineJoin='round'
			stroke={scribble.color}
			strokeWidth={4}
			points={scribble.points}></Line>
	);
};

export default Scribble;
