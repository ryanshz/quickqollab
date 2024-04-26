import React, { useState, useEffect, useCallback } from 'react';
import Toolbox from '../components/canvas/Toolbox';
import Whiteboard from '../components/canvas/Whiteboard';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import PasswordForm from '../components/canvas/auth/PasswordForm';
import { CanvasProvider } from '../components/canvas/context/CanvasContext';
import { toast, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Canvas() {
	// const message = location.state.message;
	const location = useLocation();
	const { roomId } = useParams();
	const navigate = useNavigate();

	const [color, setColor] = useState('#FFFFFF');
	const [currentTool, setCurrentTool] = useState('scribble');
	// const [room, setRoom] = useState(location.state ? location.state.roomData : '');
	const [room, setRoom] = useState(null);
	const [toastDisplayed, setToastDisplayed] = useState(false);

	// useEffect(() => {
	// 	// If room data is not in the state, fetch it
		// if (!room) {
		// 	fetch(`http://127.0.0.1:5000/room/room_validate/${roomId}`)
		// 		.then((response) => response.json())
		// 		.then((data) => {
		// 			if (data.success) {
		// 				setRoom(data);
		// 				displayToastMessage(data);
		// 			} else {
		// 				navigate('/dashboard');
		// 			}
		// 		})
		// 		.catch((error) => {
		// 			console.log('Failed to fetch room details', error);
		// 		});
		// 	}, [roomId, room, navigate]);

	const fetchRoomData = useCallback(() => {
		if(!room) {
        fetch(`http://127.0.0.1:5000/room/room_validate/${roomId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setRoom(data);
                    // displayToastMessage(data);
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
        if (location.state && location.state.isNewRoom) {
            // If it's a new room, show the "successfully created" message
            toast.success(`Your room was successfully created!`, {
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
        } else {
            // If it's joining an existing room, show the joined room message
            toast.success(`Joined Room: ${data.room_title}`, {
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
        }
	}, [location.state]);

	useEffect(() => {
        fetchRoomData();
    }, [fetchRoomData]);

	useEffect(() => {
        if (room && !toastDisplayed) {
            displayToastMessage(room);
            setToastDisplayed(true);
        }
    }, [room, toastDisplayed, displayToastMessage]);

	// if (room === '') {
	// 	toast.success(`Joined Room: ${room.room_title}`, {
	// 		position: 'top-center',
	// 		autoClose: 5000,
	// 		hideProgressBar: false,
	// 		closeOnClick: true,
	// 		pauseOnHover: true,
	// 		draggable: true,
	// 		progress: undefined,
	// 		theme: 'dark',
	// 		transition: Flip,
	// 	});
	// } else {
	// 	toast.success(`Your room was successfully created!`, {
	// 		position: 'top-center',
	// 		autoClose: 5000,
	// 		hideProgressBar: false,
	// 		closeOnClick: true,
	// 		pauseOnHover: true,
	// 		draggable: true,
	// 		progress: undefined,
	// 		theme: 'dark',
	// 		transition: Flip,
	// 	});
	// }

	return (
		<main className='flex flex-row items-center justify-center bg-base-300'>
			<ToastContainer />
			{false ? (
				<div>{/* {Password Component Form here}*/}</div>
			) : (
				<CanvasProvider>
					<div className='h-full w-full  bg-base-100'>
						<Whiteboard penColor={color} currentTool={currentTool} />
						<div className='flex flex-row justify-center '>
							<Toolbox setColor={setColor} setCurrentTool={setCurrentTool} className='z-50'></Toolbox>
							<></>
						</div>
					</div>
				</CanvasProvider>
			)}
		</main>
	);
}

export default Canvas;
