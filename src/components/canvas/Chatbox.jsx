import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { socketConfig } from '../../config/site-config';
import { useAuth } from '../../middleware/AuthContext';

const Chatbox = () => {
	const { user } = useAuth();
	const [socket, setSocket] = useState(null);
	const [message, setMessage] = useState('');
	const [chat, setChat] = useState([]);
	const chatRef = useRef(null);

	useEffect(() => {
		const newSocket = io(socketConfig.socket);
		setSocket(newSocket);

		newSocket.on('connect', () => {
			const room_id = window.location.pathname.split('/').pop();
			newSocket.emit('join_room', { room_id });
		});

		newSocket.on('chat_message', (msg) => {
			setChat((prevChat) => [...prevChat, msg]);
		});

		return () => {
			newSocket.off('connect');
			newSocket.off('chat_message');
			newSocket.close();
		};
	}, []);

	useEffect(() => {
		if (chatRef.current) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		}
	}, [chat]);

	const sendMessage = (e) => {
		e.preventDefault();
		if (socket && socket.connected && message.trim()) {
			const messageData = {
				username: user.username,
				message: message,
				userImg: user.profile_picture,
				room: window.location.pathname.split('/').pop(),
				time: new Date().toLocaleString(), // Time of sending the message
			};
			socket.emit('chat_message', messageData);
			setMessage('');
		}
	};

	return (
		<div className='w-[32rem] h-[32rem] flex flex-col '>
			<div className='flex-grow overflow-y-auto overflow-x-hidden p-4' ref={chatRef}>
				{chat.map((msg, index) => (
					<div key={index}>
						{' '}
						{/* Correct usage of the key prop */}
						<div className={`chat ${msg.username === user.username ? ' chat-start' : 'chat-end'}`}>
							<div className='chat-image avatar'>
								<div className='w-10 rounded-full'>
									<img
										src={
											msg.userImg
												? `data:image/jpeg;base64,${msg.userImg}`
												: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
										}
										alt='Profile Avatar'
									/>
								</div>
							</div>
							<div className='chat-header'>{msg.username}</div>
							<div className='chat-bubble word-break: break-all'>{msg.message}</div>
							<div className='chat-footer opacity-50'>{msg.time}</div>
						</div>
					</div>
				))}
			</div>
			<div className='divider divider-primary'>Chat</div>
			<form className='flex mt-auto' onSubmit={sendMessage}>
				<input
					placeholder='Type here'
					className='input input-bordered flex-auto'
					type='text'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className='btn btn-primary ml-2'>
					Send
				</button>
			</form>
		</div>
	);
};

export default Chatbox;
