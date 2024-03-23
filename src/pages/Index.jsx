import React from 'react';
import Hero from '../components/home/Hero';
import MeetTheTeam from '../components/home/MeetTheTeam';
import FAQ from '../components/home/FAQ';
import CallToAction from '../components/home/CallToAction';

function Home() {
	return (
		<main className='flex flex-col flex-grow scroll-smooth'>
			<Hero></Hero>
			<MeetTheTeam></MeetTheTeam>
			<FAQ></FAQ>
			<CallToAction></CallToAction>
		</main>
	);
}

export default Home;
