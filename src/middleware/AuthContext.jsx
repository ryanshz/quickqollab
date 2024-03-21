import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
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

	return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
