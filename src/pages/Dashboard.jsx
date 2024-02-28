import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaPalette, FaArrowLeft } from 'react-icons/fa';

function Dashboard() {
    const userName = "Brandon"; // Replace "John" with the actual user's name
    
    return (
        <div className="flex flex-col h-screen">

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="bg-gray-900 text-white w-full md:w-1/4 p-6 rounded-lg">
                <h1 className="text-3xl font-extrabold mb-8 text-white">Dashboard Menu</h1>
                <ul className="space-y-3">
                    <li>
                        <Link to="/profile" className="flex items-center py-6 px-5 w-full text-left rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-green-400 transform hover:scale-105">
                            <FaUser className="mr-2" /> View Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="flex items-center py-6 px-5 w-full text-left rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-green-400 transform hover:scale-105">
                            <FaCog className="mr-2" /> Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/customize" className="flex items-center py-6 px-5 w-full text-left rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-green-400 transform hover:scale-105">
                            <FaPalette className="mr-2" /> Customize
                        </Link>
                    </li>
                </ul>
                <div className="mt-auto">
                    <button className="block w-full py-6 px-5 text-left rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-green-400 mt-6 transform hover:scale-105">
                        <FaArrowLeft className="mr-2" /> Back
                    </button>
                </div>
            </div>

            {/* Main Content */}
                <div className="bg-gray-100 p-4 w-3/4">
                    {/* Welcome message */}
                    <div className="mb-8">
                        <h2 className="text-gray-800 text-2xl font-bold">Welcome, {userName}!</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* Dashboard Cards */}
					<div className="container mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-gray-300 rounded-lg shadow-md p-8 flex flex-col">
							<div className="flex justify-between mb-4">
								<h3 className="text-lg text-gray-800 font-semibold">Large Box</h3>
								{/* Edit and Leave Room Buttons */}
								<div className="flex">
									<button className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 hover:text-gray-900">
										Edit Room
									</button>
									<button className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-400 hover:text-gray-900">
										Leave Room
									</button>
								</div>
							</div>
							<p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>

							<div className="grid grid-cols-3 md:grid-cols-1 gap-3">
							<Link to="/room1" className="text-gray-800 bg-gray-300 rounded-lg shadow-md p-8 transform hover:scale-105 transition-all duration-300 hover:text-green-400">
								<h3 className="text-lg font-semibold mb-4">Room 1</h3>
								<p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Link>

							<Link to="/room2" className="text-gray-800 bg-gray-300 rounded-lg shadow-md p-8 transform hover:scale-105 transition-all duration-300 hover:text-green-400">
								<h3 className="text-lg font-semibold mb-4">Room 2</h3>
								<p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Link>

							<Link to="/room3" className="text-gray-800 bg-gray-300 rounded-lg shadow-md p-8 transform hover:scale-105 transition-all duration-300 hover:text-green-400">
								<h3 className="text-lg font-semibold mb-4">Room 3</h3>
								<p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Link>
							</div>
						</div>
					</div>

					<div className="container mx-auto py-9">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-11">
							<div className="bg-gray-300 rounded-lg shadow-md p-8 md:col-span-2 md:row-span-9">
								<div className="flex justify-between mb-4">
									<h3 className="text-lg text-gray-800 font-semibold">Large Box</h3>
								</div>
								<p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>

							<div className="bg-gray-300 rounded-lg shadow-md p-8 md:col-span-1 md:row-span-9">
								<h3 className="text-lg text-gray-800 font-semibold">Box 1</h3>
								<p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
