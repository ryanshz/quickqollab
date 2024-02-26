import React from 'react';

function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile Avatar" />
          </div>
        </div>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p className="text-gray-600">Your Email</p>
        <p className="text-gray-600">Joined: Date Joined</p>
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
  );
}

export default Profile;
