import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { socketConfig } from '../../config/site-config';
import { useAuth } from '../../middleware/AuthContext';

const Chatbox = () => {
    const { user } = useAuth();
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const chatRef = useRef(null); // Reference to the chat container

    useEffect(() => {
        const newSocket = io(socketConfig.socket);
        setSocket(newSocket);

        return () => newSocket.close();
    }, [setSocket]);

    useEffect(() => {
        if (socket) {
            socket.on('chat_message', (msg) => {
                setChat((prevChat) => [...prevChat, msg]);
            });
        }
    }, [socket]);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chat]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (socket) {
            const messageData = {
                username: user.username,
                message: message,
                userImg: user.profile_picture
            };
            socket.emit('chat_message', messageData);
            setMessage('');
        }
    };

    return (
        <>
            <div className='h-5/6 w-full flex flex-col p-3 border-2 border-white-1000 rounded-md' style={{ width: '400px', height: '600px' }}>
                <div className='pl-2 pr-2 h-full w-full flex flex-col gap-3 overflow-auto' ref={chatRef}>
                    <h1>Chat</h1>
                    <ul>
                        {chat.map((msg, index) => (
                            <li key={index} className={msg.username === user.username ? 'chat chat-start' : 'chat chat-end'} style={{ maxWidth: '100%', overflowWrap: 'normal' }} >
                                <div className={msg.username === user.username ? 'chat-bubble chat-start' : 'chat-bubble chat-end'}  >
                                <img
                                            src={user.profile_picture ? `data:image/jpeg;base64,${msg.userImg}` : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}
                                            alt='Profile Avatar'
                                            style={{ width: '50px' }} />
                                    <div >
                                        {msg.username}:<br/>
                                    </div>
                                    {msg.message}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <form className="w-full" onSubmit={sendMessage} style={{ alignSelf: 'flex-end' }}>
                    <input className="w-full" type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    );
};

export default Chatbox;
