import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const CanvasContext = createContext(null);

export const useCanvas = () => useContext(CanvasContext);
const socket = io('http://127.0.0.1:5000/');

export const CanvasProvider = ({ children }) => {
	const [currentTool, setCurrentTool] = useState('scribble');
	const [scribbles, setScribbles] = useState([]);
	const [shapes, setShapes] = useState([]);
	const { roomId } = useParams();

	// History (undo - redo)
	const [history, setHistory] = useState([]);
	const [currentStep, setCurrentStep] = useState(-1);

	// Colors
	const [penColor, setPenColor] = useState('#FFFFFF');
	const [paletteBG, setPaletteBG] = useState('#141414');
	const [iconColor, setIconColor] = useState('#FFFFFF');

	const addToHistory = (newScribbles, newShapes) => {
		const newHistory = history.slice(0, currentStep + 1);
		// Other obj should store here in history
		newHistory.push({ scribbles: newScribbles, shapes: newShapes });
		setHistory(newHistory);
		setCurrentStep(newHistory.length - 1);
	};

	const undo = () => {
		if (currentStep > 0) {
			const previousState = history[currentStep - 1];
			setScribbles(previousState.scribbles);
			setShapes(previousState.shapes);
			setCurrentStep(currentStep - 1);
		} else {
		}
	};

	const clearDrawing = () => {
		setScribbles([]);
		setShapes([]);
	};

	useEffect(() => {
		// Join the room on component mount
		socket.emit('join_room', { room_id: roomId });

		// Listen for the room joined confirmation
		socket.on('room_joined', (data) => {
			if (data.success) {
				console.log(data.message);
			}
		});

		// Listen for updates in the room
		socket.on('room_update', (data) => {
			console.log(data.message);
		});

		// Cleanup on component unmount
		return () => {
			socket.off('room_joined');
			socket.off('room_update');
		};
	}, [roomId]);

	return (
		<CanvasContext.Provider
			value={{
				penColor,
				setPenColor,
				paletteBG,
				setPaletteBG,
				iconColor,
				setIconColor,
				currentTool,
				setCurrentTool,
				scribbles,
				setScribbles,
				shapes,
				setShapes,
				undo,
				addToHistory,
				clearDrawing,
			}}>
			{children}
		</CanvasContext.Provider>
	);
};
