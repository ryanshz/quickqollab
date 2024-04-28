import React, { useState, useEffect, useCallback } from 'react';
import Toolbox from '../components/canvas/Toolbox';
import Whiteboard from '../components/canvas/Whiteboard';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import PasswordForm from '../components/canvas/auth/PasswordForm';
import { CanvasProvider } from '../components/canvas/context/CanvasContext';
import { toast, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { socketConfig } from '../config/site-config';
import io from 'socket.io-client';

function Canvas() {
	const { roomId } = useParams();
	const navigate = useNavigate();

	const [color, setColor] = useState('#FFFFFF');
	const [currentTool, setCurrentTool] = useState('scribble');
	const [room, setRoom] = useState(null);
	const [toastDisplayed, setToastDisplayed] = useState(false);
	const [socket, setSocket] = useState(false);

    useEffect(() => {
		const newSocket = io(socketConfig.socket);
		setSocket(newSocket);

		newSocket.on('connect', () => {
			const room_id = window.location.pathname.split('/').pop();
			newSocket.emit('join_room', { room_id });
		});

        newSocket.on('toast_message', (data) => {
            console.log(data);
            displayToastMessage(data);
        });

        return () => {
            newSocket.off('connect');
            newSocket.off('toast_message');
			newSocket.close();
		};
	}, []);

	const fetchRoomData = useCallback(() => {
		if(!room) {
        fetch(`http://127.0.0.1:5000/room/room_validate/${roomId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setRoom(data);
                } else {
                    navigate('/dashboard');
                }
            })
            .catch((error) => {
                console.log('Failed to fetch room details', error);
            });
		}
    }, [roomId,room, navigate]);

    const displayToastMessage = useCallback((data) => {
        toast.success(`${data.username} has joined room: ${data.room_title}`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Flip,
        });

        if(socket) {
            socket.emit('toast_message', {room_title: data.room_title, room_id: data.room_id, user: data.username});
        }

    }, [socket]);


	useEffect(() => {
        fetchRoomData();
    }, [fetchRoomData]);

	useEffect(() => {
        if (room && !toastDisplayed) {
            displayToastMessage(room);
            setToastDisplayed(true);
        }
    }, [room, toastDisplayed, displayToastMessage, socket]);
    
	return (
		<main className='flex flex-row items-center justify-center bg-base-300 md:overflow-x-hidden overflow-y-hidden'>
			<ToastContainer />

			<CanvasProvider>
				<div className='h-full w-full  bg-base-100'>
					<Whiteboard penColor={color} currentTool={currentTool} />
					<div className='flex flex-row justify-center '>
						<Toolbox setColor={setColor} setCurrentTool={setCurrentTool} className='z-50'></Toolbox>
						<></>
					</div>
				</div>
			</CanvasProvider>
		</main>
	);
}

export default Canvas;
