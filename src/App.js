import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Canvas from './pages/Canvas';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Footer from './components/ui/Footer';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile';


function App() {
	return (
		<BrowserRouter>
			<div className='w-screen h-screen'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/canvas' element={<Canvas />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
