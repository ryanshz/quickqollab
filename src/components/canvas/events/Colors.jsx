import React, { useState } from 'react';
import Colorful from '@uiw/react-color-colorful';

const Colors = ({ setColor, setPaletteBG, setIconColor }) => {
	const [hex, setHex] = useState('#fff');

	const getComplementaryColor = (hex) => {
		const r = 255 - parseInt(hex.slice(1, 3), 16);
		const g = 255 - parseInt(hex.slice(3, 5), 16);
		const b = 255 - parseInt(hex.slice(5, 7), 16);
		const complementaryHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
			.toString(16)
			.padStart(2, '0')}`;
		return complementaryHex;
	};
	return (
		<div className='flex flex-col w-full h-full'>
			<Colorful
				color={hex}
				onChange={(color) => {
					setHex(color.hex);
					setColor(color.hex);
					setPaletteBG(color.hex);
					setIconColor(getComplementaryColor(color.hex));
				}}
				disableAlpha='hide'
			/>
			<div style={{ background: hex, marginTop: 30, padding: 10 }}></div>
		</div>
	);
};

export default Colors;
