import React from 'react';
import CreateRoomModalForm from './room/CreateRoomModalForm';
import { SquarePen } from 'lucide-react';

const CreateRoomBox = () => {
	return (
		<div className='w-full h-full '>
			<button
				className='btn w-full h-full rounded-2xl text-3xl font-bold '
				onClick={() => document.getElementById('create-room-modal').showModal()}>
				<SquarePen size={35} className='text-primary-content' />
				Create a Room
			</button>
			<dialog id='create-room-modal' className='modal w-full h-full'>
				<div className='modal-box'>
					<CreateRoomModalForm></CreateRoomModalForm>
				</div>
			</dialog>
		</div>
	);
};

export default CreateRoomBox;
