import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="min-h-screen h-fit flex flex-col justify-center items-start gap-64 bg-gradient-to-tr from-primary to-secondary">
      <section className="card card-side w-2/3 bg-base-100 shadow-xl mt-48 ml-24 opacity-90">
        <div className="card-body flex-1">
          <p className="card-title text-6xl pb-5">the best tool for collaboration, planning and design.</p>
          <p className="text-2xl pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link className="link link-hover text-primary">learn more</Link>
          <div className="card-actions justify-left">
            <Link className="btn btn-ghost bg-primary" to='/signup/'>sign up</Link>
          </div>
        </div>
      </section>

      <section className='w-2/3 flex lg:flex-row flex-col'>
        <section className="lg:w-2/3 w-full card bg-base-100 shadow-xl mb-10 ml-24 opacity-90">
          <div className="card-body flex-1">
            <h2 className="card-title pb-5">want to know more about quickqollab? check our about page!</h2>
            <div className="card-actions">
              <Link className="btn btn-block bg-primary">about us</Link>
            </div>
          </div>
        </section>
        <section className="lg:w-fit w-full card bg-base-100 shadow-xl mb-10 ml-24 opacity-90">
          <div className="card-body flex-1">
            <h2 className="card-title pb-5">returning?</h2>
            <div className="card-actions">
              <Link className="btn btn-block bg-primary" to='/dashboard/'>dashboard</Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
