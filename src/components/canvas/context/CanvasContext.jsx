import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { socketConfig } from '../../../config/site-config';

const CanvasContext = createContext(null);

export const useCanvas = () => useContext(CanvasContext);
// const socket = io(socketConfig.socket);

export const CanvasProvider = ({ children }) => {
	const [currentTool, setCurrentTool] = useState('scribble');
	const [scribbles, setScribbles] = useState([]);
	const [shapes, setShapes] = useState([]);
	const { roomId } = useParams();
	const [socket, setSocket] = useState(null);

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
		const newSocket = io(socketConfig.socket);
		setSocket(newSocket);
		
		return () => {
			if(newSocket) {
		  		newSocket.disconnect();
			}
		};
	  }, []);

	useEffect(() => {
		// Join the room on component mount
		if(socket) {
			console.log("Component mounted");
			socket.emit('join_room', { room_id: roomId });

			const handleRoomJoined = (data) => {
				if (data.success) {
				  console.log(data.message);
				}
			  };
			socket.on('room_joined', handleRoomJoined);

			const handleRoomUpdate = (data) => {
				console.log(data.message);
			  };
			socket.on('room_update', handleRoomUpdate);

			// Cleanup on component unmount
			return () => {
				socket.off('room_joined', handleRoomJoined);
				socket.off('room_update', handleRoomUpdate);
			};
		
		}
	}, [socket, roomId]);

	useEffect(() => {
		if (socket) {
			console.log("Component Updated");
			const handleCanvasUpdate = ({ scribbles, shapes }) => {
				setScribbles(scribbles);
				setShapes(shapes);
			  };
			  socket.on('canvas_update', handleCanvasUpdate);

			const handleCanvasClear = () => {
				setScribbles([]);
				setShapes([]);
			  };
			socket.on('canvas_clear', handleCanvasClear);

			return () => {
				socket.off('canvas_update', handleCanvasUpdate);
        		socket.off('canvas_clear', handleCanvasClear);
			  };
		}
	}, [socket]);

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
			}}>
			{children}
		</CanvasContext.Provider>
	);
};
