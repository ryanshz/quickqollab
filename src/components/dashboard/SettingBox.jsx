import React from 'react';
import SettingModalForm from './setting/SettingModalForm';
import { Settings2 } from 'lucide-react';

const SettingBox = () => {
	return (
		<div className='w-full h-full rounded-2xl bg-base-200'>
			<div className='w-full h-full flex flex-row justify-center items-center'>
				<button
					className='btn w-full h-full rounded-2xl text-3xl font-bold '
					onClick={() => document.getElementById('create-setting-modal').showModal()}>
					<Settings2 size={35} />
					Settings
				</button>
				<dialog id='create-setting-modal' className='modal w-full h-full'>
					<div className='modal-box'>
						<SettingModalForm></SettingModalForm>
					</div>
				</dialog>
			</div>
		</div>
	);
};

export default SettingBox;
