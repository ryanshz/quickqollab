import React from 'react';

function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="pr-20">
            <h1 className="text-5xl font-bold">welcome back.</h1>
            <p className="text-lg py-6">
              quickqollab is a simple and easy to use tool for collaboration, planning and design.
            </p>

            <div className="flex flex-row gap-10 pt-5">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">thing 1</h2>
                  <p>test</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Go to</button>
                  </div>
                </div>
              </div>

              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">thing 2</h2>
                  <p>test</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Go to</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-1/5 flex flex-col p-3 border-2 border-green-800 rounded-md">
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
        </div>
      </div>
    </main>
  );
}

export default Home;
