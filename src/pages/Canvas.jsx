import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Toolbox from '../components/canvas/Toolbox';
import Whiteboard from '../components/canvas/Whiteboard';
import { useParams } from 'react-router-dom';
import PasswordForm from '../components/canvas/auth/PasswordForm';
import Chatbox from '../components/canvas/Chatbox';
import { MessageSquareMore } from 'lucide-react';
import { CanvasProvider } from '../components/canvas/context/CanvasContext';
import { toast, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Canvas() {
	const location = useLocation();
	const message = location.state.message;
	const [color, setColor] = useState('#FFFFFF');
	const [currentTool, setCurrentTool] = useState('scribble');

	useEffect(() => {
        if (message) {
            toast.success(message, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Flip,
			});
        }
    }, [message]);

	return (
		<main className='flex flex-row items-center justify-center bg-base-300'>
			< ToastContainer />
			{false ? (
				<PasswordForm />
			) : (
				<CanvasProvider>
					<div className='h-full w-full  bg-base-100'>
						<Whiteboard penColor={color} currentTool={currentTool} />
						<div className='flex flex-row justify-center '>
							<Toolbox setColor={setColor} setCurrentTool={setCurrentTool} className='z-50'></Toolbox>
							{/* {Chatbox Modal (opens chatbox)} */}
							<></>
							<div className='dropdown dropdown-top'>
								<div
									tabindex='0'
									role='button'
									className='btn m-1 tooltip tooltip-bottom flex flex-row items-center justify-center bg-base-200'
									data-tip='Message'>
									<button>
										<MessageSquareMore />
									</button>
								</div>
							</div>
						</div>
					</div>
				</CanvasProvider>
			)}
		</main>
	);
}

export default Canvas;
