import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { socketConfig } from '../../config/site-config';

const Chatbox = () => {
	const [socket, setSocket] = useState(null);
	const [message, setMessage] = useState('');
	const [chat, setChat] = useState([]); // Listen for chat messages
	// Connect to Socket.IO server
	useEffect(() => {
		const newSocket = io(socketConfig.socket);
		setSocket(newSocket);

		return () => newSocket.close();
	}, [setSocket]);

	// Listen for chat messages
	useEffect(() => {
		if (socket) {
			socket.on('chat_message', (msg) => {
				setChat((prevChat) => [...prevChat, msg]);
			});
		}
	}, [socket]);

	// Send a message
	const sendMessage = (e) => {
		e.preventDefault();
		if (socket) {
			socket.emit('chat_message', message);
			setMessage('');
		}
	};
	return (
		<>
			<div className='h-5/6 w-full flex flex-col p-3 border-2 border-green-800 rounded-md'>
				<div className='pl-2 pr-2 h-5/6 w-full flex flex-col gap-3 overflow-hidden'>
					<h1>Chat</h1>
					<ul>
						{chat.map((msg, index) => (
							<li key={index}>{msg}</li>
						))}
					</ul>
					<form onSubmit={sendMessage}>
						<input type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
						<button type='submit'>Send</button>
					</form>
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
