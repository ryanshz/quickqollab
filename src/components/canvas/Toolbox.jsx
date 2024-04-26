import React, { useState } from 'react';
import Colors from './events/Colors';
import Chatbox from './Chatbox';
import { useCanvas } from './context/CanvasContext';
import {
	Palette,
	Shapes,
	Circle,
	Triangle,
	Square,
	Pen,
	Eraser,
	Grab,
	Download,
	PencilRuler,
	Trash2,
	RotateCcw,
	MessageSquareMore,
} from 'lucide-react';

const Toolbox = () => {
	const { setCurrentTool, setPenColor, setPaletteBG, setIconColor, paletteBG, iconColor, undo, clearDrawing } =
		useCanvas();
	return (
		// Sketch Tools
		<div className='flex flex-row bg-base-100 w-fit'>
			<div className='dropdown dropdown-top'>
				<div
					tabIndex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Tools'>
					<PencilRuler />
				</div>
				<ul tabIndex='0' className='dropdown-content z-[1] menu p-2 w-1/5'>
					<li className='tooltip tooltip-left' data-tip='Pen'>
						<button onClick={() => setCurrentTool('scribble')}>
							<Pen className='text-green-400' />
						</button>
					</li>
					<li className='tooltip tooltip-left' data-tip='Eraser'>
						<button onClick={() => setCurrentTool('erase')}>
							<Eraser />
						</button>
					</li>
					<li className='tooltip tooltip-left' data-tip='Grab'>
						<button onClick={() => setCurrentTool('grab')}>
							<Grab />
						</button>
					</li>
				</ul>
			</div>
			{/* Shapes */}
			<div className='dropdown dropdown-top'>
				<div
					tabIndex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Shapes'>
					<Shapes />
				</div>
				<ul tabIndex='0' className='dropdown-content z-[1] menu p-2 w-1/5'>
					<li className='tooltip tooltip-left' data-tip='Triangle'>
						<button onClick={() => setCurrentTool('Triangle')}>
							<Triangle />
						</button>
					</li>
					<li className='tooltip tooltip-left' data-tip='Square'>
						<button onClick={() => setCurrentTool('rect')}>
							<Square />
						</button>
					</li>
					<li className='tooltip tooltip-left' data-tip='Circle'>
						<button onClick={() => setCurrentTool('circle')}>
							<Circle />
						</button>
					</li>
				</ul>
			</div>
			{/* Color Palette */}
			<div className='dropdown dropdown-top'>
				<div
					tabIndex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					style={{ backgroundColor: `${paletteBG}` }}
					data-tip='Color Palette'>
					<Palette color={`${iconColor}`} />
				</div>
				<ul tabIndex='0' className='dropdown-content z-[1] menu p-2 w-1/5'>
					<li>
						<Colors setColor={setPenColor} setPaletteBG={setPaletteBG} setIconColor={setIconColor}></Colors>
					</li>
				</ul>
			</div>
			{/* Download */}
			<div className='dropdown dropdown-top'>
				<div
					tabIndex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Download as PNG'>
					<button onClick={() => setCurrentTool('Download')}>
						<Download />
					</button>
				</div>
			</div>
			{/* Clear */}
			<div className='dropdown dropdown-top'>
				<div
					tabIndex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Clear board'>
					<button onClick={clearDrawing}>
						<Trash2 />
					</button>
				</div>
			</div>
			<div className='dropdown dropdown-top'>
				<div
					tabIndex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Undo'>
					<button onClick={undo}>
						<RotateCcw />
					</button>
				</div>
			</div>
			{/* Chatbox */}
			<div className='dropdown dropdown-top md:dropdown-end '>
				<div tabIndex={0} role='button' className='btn m-1'>
					<MessageSquareMore />
				</div>
				<ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-200'>
					<Chatbox />
				</ul>
			</div>
		</div>
	);
};

export default Toolbox;
