import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../middleware/AuthContext';

const CreateRoomModalForm = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/room/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();
            if (response.ok) {
                navigate('/canvas');
            } else {
                setErrorMessage(responseData.warning || responseData.error || 'Failed to create room.');
            }
        } catch (error) {
            console.error('Network error:', error);
            setErrorMessage('Network error. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleExit = (e) => {
        e.preventDefault();
        // Handle exit action if needed
    };

    return (
        <div>
            <h3 className='font-bold text-lg'>Create Room</h3>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <p className='py-4'>Enter the form below to create a public/private room.</p>
            <div className='modal-action flex flex-col justify-center'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <label className='input input-bordered flex items-center gap-2'>
                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            className='grow'
                            placeholder='Room name'
                        />
                    </label>
                    <label className='input input-bordered flex items-center gap-2'>
                        <input
                            type='text'
                            name='created_by'
                            value={user.username}
                            onChange={handleChange}
                            className='grow'
                        />
                    </label>
                    <label className='input input-bordered flex items-center gap-2'>
                        <input
                            type='text'
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            className='grow'
                            placeholder='Description'
                        />
                    </label>
                    <label className='input input-bordered flex items-center gap-2'>
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='grow'
                            placeholder='Password (optional)'
                        />
                    </label>
                    <div className='flex flex-row justify-between'>
                        <button className='btn' type='submit'>Create Room</button>
                        <button className='btn' onClick={handleExit}>Exit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateRoomModalForm;
