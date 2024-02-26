import React from 'react';

const Auth = () => {
	return (
		<main class='flex flex-row items-center justify-center h-screen w-screen p-8 gap-2'>
			<div class='w-1/2 h-2/3 flex items-center'>
				<div className='card card-side bg-base-100 shadow-xl '>
					<figure>
						<img src='https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg' alt='Movie' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>New movie is released!</h2>
						<p>Click the button to watch on Jetflix app.</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Watch</button>
						</div>
					</div>
				</div>
			</div>
			<div class='w-1/2 h-2/3 border-green-800 border-2 rounded-lg flex flex-row'>
				<div class='hero-content flex-col lg:flex-row-reverse'>
					<div class='text-center lg:text-left flex flex-col gap-8 items-center'>
						<h1 class='text-5xl font-bold'>Sign Up!</h1>
						<label class='swap swap-flip text-9xl'>
							<input type='checkbox' />

							<div class='swap-on'>😈</div>
							<div class='swap-off'>😇</div>
						</label>
						<p class='py-6 text-center'>
							Signing up is your first step towards unlocking a world of collaborative possibilities.
						</p>
					</div>
					<div class='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form class='card-body' action='/register_user' method='POST'>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Username</span>
								</label>
								<input
									type='text'
									name='username'
									placeholder='username'
									id='username'
									class='input input-bordered'
									required
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Email</span>
								</label>
								<input
									type='email'
									name='email'
									placeholder='email'
									class='input input-bordered'
									required
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text'>Password</span>
								</label>
								<input
									type='password'
									name='password'
									placeholder='password'
									class='input input-bordered'
									required
								/>
								<label class='label'> </label>
							</div>
							<div class='form-control mt-6'>
								<button class='btn btn-primary' type='submit'>
									Sign Up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Auth;
