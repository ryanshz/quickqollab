import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { socketConfig } from '../../../config/site-config';

const CanvasContext = createContext(null);

export const useCanvas = () => useContext(CanvasContext);
const socket = io(socketConfig.socket);

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
		emitCanvasUpdate();
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
		emitCanvasClear();
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

	useEffect(() => {
		if (socket) {
			socket.on('canvas_update', ({ scribbles, shapes }) => {
				setScribbles(scribbles);
				setShapes(shapes);
			});

			socket.on('canvas_clear', () => {
				setScribbles([]);
				setShapes([]);
			});
		}
	}, [setScribbles, setShapes]);

	const emitCanvasClear = () => {
		socket.emit('canvas_clear', { room_id: roomId });
	};

	const emitCanvasUpdate = () => {
		socket.emit('canvas_update', { room_id: roomId, scribbles, shapes });
	};

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
				emitCanvasUpdate,
			}}>
			{children}
		</CanvasContext.Provider>
	);
};
