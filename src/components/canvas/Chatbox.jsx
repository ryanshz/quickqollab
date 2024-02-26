import React from 'react';

const Chatbox = () => {
	return (
		<>
			<div className='h-5/6 w-full flex flex-col p-3 border-2 border-green-800 rounded-md'>
				<div className='pl-2 pr-2 h-5/6 w-full flex flex-col gap-3 overflow-hidden'>
					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									alt='Tailwind CSS chat bubble component'
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIS19eYgoT9_JzJSC9Ef2SILcF-d4ecQY0g&usqp=CAU'
								/>
							</div>
						</div>
						<div className='chat-header'>
							OtakuMike42
							<time className='text-xs opacity-50'>12:45</time>
						</div>
						<div className='chat-bubble'>
							you're missing the point Rem from Re:Zero is the best waifu she's loyal caring and strong in
							the face of adversity
						</div>
					</div>

					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									alt='Tailwind CSS chat bubble component'
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIS19eYgoT9_JzJSC9Ef2SILcF-d4ecQY0g&usqp=CAU'
								/>
							</div>
						</div>
						<div className='chat-header'>
							OtakuMike42
							<time className='text-xs opacity-50'>12:46</time>
						</div>
						<div className='chat-bubble'>
							and her backstory tragic yet it adds so much depth to her character makes her more relatable
							and lovable
						</div>
					</div>

					<div className='chat chat-start'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									alt='Tailwind CSS chat bubble component'
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIS19eYgoT9_JzJSC9Ef2SILcF-d4ecQY0g&usqp=CAU'
								/>
							</div>
						</div>
						<div className='chat-header'>
							OtakuMike42
							<time className='text-xs opacity-50'>12:47</time>
						</div>
						<div className='chat-bubble'>anyone with half a brain gets why Rem is the best</div>
					</div>
					<div className='chat chat-end'>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full'>
								<img
									alt='Tailwind CSS chat bubble component'
									src='https://pbs.twimg.com/profile_images/1047935929405591557/8-u-t0zD_400x400.jpg'
								/>
							</div>
						</div>
						<div className='chat-header'>
							Anakin
							<time className='text-xs opacity-50'>12:52</time>
						</div>
						<div className='chat-bubble'>can you leave me alone</div>
						<div className='chat-footer opacity-50'>Seen at 12:52</div>
					</div>
				</div>
				<div className='divider divider-neutral'>Chat</div>
				<div className='w-full h-1/5 flex content-end items-center justify-center'>
					<textarea
						placeholder='Enter message'
						className='textarea textarea-bordered textarea-success w-full max-w-xs'></textarea>
				</div>
			</div>
		</>
	);
};

export default Chatbox;
