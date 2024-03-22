import React, { useState } from 'react';

function Rooms() {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/rooms/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Room created successfully');
                // Reset form data or do other actions upon successful submission
                setFormData({ title: '', description: '' });
            } else {
                console.error('Room creation failed:', data.message);
                // Handle error (e.g., display error message to user)
            }
        } catch (error) {
            console.error('Error creating room:', error);
            // Handle error (e.g., display error message to user)
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 flex">
            <div className="w-1/2 pr-8">
                <h2 className="text-3xl font-semibold mb-4 text-white">Active Rooms</h2>
                <div className="grid gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-white">Room 1</h3>
                        <p className="text-gray-300">Description of Room 1 goes here...</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-white">Room 2</h3>
                        <p className="text-gray-300">Description of Room 2 goes here...</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-white">Room 3</h3>
                        <p className="text-gray-300">Description of Room 3 goes here...</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 pl-8">
                <h2 className="text-3xl font-semibold mb-4 text-white">Create a Game Room</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-white font-semibold mb-1">Title:</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-white font-semibold mb-1">Description:</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-ghost bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">
                        Create Room
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Rooms;
