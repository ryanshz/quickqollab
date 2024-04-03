import React, { useState } from 'react';
import Colors from './events/Colors';
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
} from 'lucide-react';

const Toolbox = ({ setColor, setCurrentTool }) => {
	const [color, bgColor] = useState('#000000');
	const [colorIcon, setColorIcon] = useState('#FFFFFF');
	return (
		<div className='flex flex-row'>
			<div class='dropdown dropdown-bottom'>
				<div
					tabindex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Tools'>
					<PencilRuler />
				</div>
				<ul tabindex='0' class='dropdown-content z-[1] menu p-2 w-1/5'>
					<li className='tooltip tooltip-left' data-tip='Pen'>
						<button onClick={() => setCurrentTool('scribble')}>
							<Pen />
						</button>
					</li>
					<li className='tooltip tooltip-left' data-tip='Eraser'>
						<button onClick={() => setCurrentTool('rectangle')}>
							<Eraser />
						</button>
					</li>
					<li className='tooltip tooltip-left' data-tip='Grab'>
						<button onClick={() => setCurrentTool('rectangle')}>
							<Grab />
						</button>
					</li>
				</ul>
			</div>
			<div class='dropdown dropdown-bottom'>
				<div
					tabindex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Shapes'>
					<Shapes />
				</div>
				<ul tabindex='0' class='dropdown-content z-[1] menu p-2 w-1/5'>
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
			<div class='dropdown dropdown-bottom'>
				<div
					tabindex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					style={{ backgroundColor: `${color}` }}
					data-tip='Color Palette'>
					<Palette color={`${colorIcon}`} />
				</div>
				<ul tabindex='0' class='dropdown-content z-[1] menu p-2 w-1/5'>
					<li>
						<Colors setColor={setColor} setPaletteBG={bgColor} setIconColor={setColorIcon}></Colors>
					</li>
				</ul>
			</div>
			<div class='dropdown dropdown-bottom'>
				<div
					tabindex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Download as PNG'>
					<button onClick={() => setCurrentTool('Download')}>
						<Download />
					</button>
				</div>
			</div>
			<div class='dropdown dropdown-bottom'>
				<div
					tabindex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Clear board'>
					<button onClick={() => setCurrentTool('Clear')}>
						<Trash2 />
					</button>
				</div>
			</div>
			<div class='dropdown dropdown-bottom'>
				<div
					tabindex='0'
					role='button'
					className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center'
					data-tip='Clear board'>
					<button onClick={() => setCurrentTool('Clear')}>
						<RotateCcw />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Toolbox;
