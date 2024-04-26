import React from 'react';
import { useAuth } from '../middleware/AuthContext';
import AvatarBox from '../components/dashboard/AvatarBox';
import InfoBox from '../components/dashboard/InfoBox';
import RoomBox from '../components/dashboard/RoomBox';
import CreateRoomBox from '../components/dashboard/CreateRoomBox';
import SettingBox from '../components/dashboard/SettingBox';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
	const { user } = useAuth();

	return (
		<div className='w-full h-full flex flex-col justify-center items-center overflow-y-auto scrollbar-hide'>
			<ToastContainer />
			<div className='grid xl:grid-cols-4 grid-cols-2 gap-8 w-5/6 h-full p-8 auto-rows-[176px]'>
				{/* {Box 1} */}
				<div className='col-span-2 row-span-1 shadow-grid rounded-3xl bg-base-200 flex flex-col justify-center '>
					<AvatarBox user={user}></AvatarBox>
				</div>
				{/* {Box 2} */}
				<div className='col-span-2 row-span-2 shadow-grid rounded-3xl bg-base-200 flex flex-col justify-center'>
					<RoomBox></RoomBox>
				</div>
				{/* {Box 3} */}
				<div className='col-span-1 row-span-1 shadow-grid rounded-3xl bg-base-200 flex flex-col justify-center shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
					<CreateRoomBox></CreateRoomBox>
				</div>
				{/* {Box 4} */}
				<div className='col-span-1 row-span-1 shadow-grid rounded-3xl bg-base-200 flex flex-col justify-center shadow-xl transition hover:border-green-400/10 hover:shadow-green-400/10'>
					<SettingBox></SettingBox>
				</div>
				{/* {Box 6} */}
				<div className='col-span-2 xl:col-span-4 row-span-3 shadow-grid rounded-3xl bg-base-200 flex flex-col justify-center'>
					<InfoBox></InfoBox>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
