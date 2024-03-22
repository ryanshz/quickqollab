import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Canvas from './pages/Canvas';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Footer from './components/ui/Footer';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile';
import Test from './pages/Test';
import Rooms from './pages/Rooms';
import { AuthProvider } from './middleware/AuthContext';
import { ProtectedRoute } from './middleware/ProtectedRoute';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<div className='w-screen h-screen'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Index />} />
						<Route
							path='/canvas'
							element={
								<ProtectedRoute>
									<Canvas />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/dashboard'
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route path='/signup' element={<Signup />} />
						<Route path='/login' element={<Login />} />
						<Route
							path='/profile'
							element={
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							}
						/>
						<Route path='/test' element={<Test />} />
						<Route
							path='/rooms'
							element={
								<ProtectedRoute>
									<Rooms />
								</ProtectedRoute>
							}
						/>
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
