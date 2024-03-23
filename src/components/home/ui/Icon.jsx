import React from 'react';
import { Podcast, MessageCircleMore, PenLine, ScreenShare, Paintbrush, ShieldCheck } from 'lucide-react';

const Icon = ({ type }) => {
	const Icons = {
		Podcast: <Podcast />,
		MessageCircleMore: <MessageCircleMore />,
		PenLine: <PenLine />,
		ScreenShare: <ScreenShare />,
		Paintbrush: <Paintbrush />,
		ShieldCheck: <ShieldCheck />,
	};
	return <div className='text-green-400'>{Icons[type]}</div>;
};

export default Icon;
