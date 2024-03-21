import React, { useEffect, useState } from 'react';

function Profile() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/fetch_client_info/profile', {
          method: 'GET',
          headers: {
          'username': 'YakuzaQATester'
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
    {userData && (
      <div>
        <div className="flex items-center justify-center mb-8">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile Avatar" />
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Username: {userData.username}</h1>
          <p className="text-gray-600">Email: {userData.email}</p>
          <p className="text-gray-600">Joined: {userData.date_created}</p>
        </div>
        <div className="flex justify-center mb-4">
          <a href="#" className="btn btn-primary mr-4">Edit Profile</a>
          <a href="#" className="btn btn-secondary">Change Password</a>
        </div>
        <hr className="my-8" />
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Followers/Following</h2>
          {/* Followers/Following content goes here */}
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Activity Metrics</h2>
          {/* Activity Metrics content goes here */}
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Support/Help</h2>
          {/* Support/Help content goes here */}
        </div>
        <div className="flex justify-center">
          <a href="#" className="btn btn-tertiary">Logout</a>
        </div>
      </div>
    )}
  </div>
  );
}

export default Profile;
