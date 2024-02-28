import React from 'react';

const QuickAction = () => {
    return (
        <div className="flex flex-col ">
        <div className="mb-4">
          <div className="divider divider-neutral">Quick Actions</div>
          <button className="btn btn-primary w-full">Create New Room</button>
          <button className="btn btn-secondary w-full">Join Room</button>
        </div>
        <div className="mb-4">
          <div className="divider divider-neutral">Active Room Session</div>
          <button className="btn btn-primary w-full">Room 1</button>
          <button className="btn btn-secondary w-full">Room 2</button>
        </div>
        <div className="mb-4">
          <div className="divider divider-neutral">Other Room Session</div>
          <button className="btn btn-primary w-full">Room 3</button>
          <button className="btn btn-secondary w-full">Room 4</button>
        </div>
      </div>
        );
    };
    
    export default QuickAction; 