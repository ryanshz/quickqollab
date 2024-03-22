import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);

	const login = (userData) => {
		setIsAuthenticated(true);
		setUser(userData);
		// Optionally, you can store user data in sessionStorage/localStorage here
		// Do this later
	};

	const logout = () => {
		setIsAuthenticated(false);
		setUser(null);
		// Clear any stored user data from sessionStorage/localStorage here
		// Do this later
	};

	useEffect(() => {
		const fetchAuthStatus = async () => {
			try {
				const response = await fetch('http://127.0.0.1:5000/auth/is-authenticated');
				const data = await response.json();
				setIsAuthenticated(data.authenticated);
			} catch (error) {
				console.error('An error occurred:', error);
			}
		};
		fetchAuthStatus();
	}, []);

	return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
