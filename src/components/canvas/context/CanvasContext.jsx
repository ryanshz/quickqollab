import React, { createContext, useContext, useState } from 'react';

const CanvasContext = createContext(null);

export const useCanvas = () => useContext(CanvasContext);

export const CanvasProvider = ({ children }) => {
	const [currentTool, setCurrentTool] = useState('scribble');
	const [scribbles, setScribbles] = useState([]);
	const [shapes, setShapes] = useState([]);

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
		console.log(`History marked`);
	};

	const undo = () => {
		if (currentStep > 0) {
			const previousState = history[currentStep - 1];
			setScribbles(previousState.scribbles);
			setShapes(previousState.shapes);
			setCurrentStep(currentStep - 1);
			console.log('undo');
		} else {
			console.log('cannot undo');
		}
	};

	const clearDrawing = () => {
		setScribbles([]);
		setShapes([]);
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
