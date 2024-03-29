import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const useAuthProvider = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		const storedAuth = localStorage.getItem('isAuthenticated');
		return storedAuth === 'true'; // Direct string comparison
	});

	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem('user');
		try {
			return storedUser ? JSON.parse(storedUser) : null; // Safely parse the user data
		} catch (error) {
			console.error('Parsing error on user', error);
			return null;
		}
	});

	const login = (userData) => {
		setIsAuthenticated(true);
		setUser(userData);
		localStorage.setItem('isAuthenticated', 'true'); // Store as a string
		localStorage.setItem('user', JSON.stringify(userData)); // Serialize user data to JSON string
	};

	const logout = () => {
		setIsAuthenticated(false);
		setUser(null);
		localStorage.removeItem('isAuthenticated');
		localStorage.removeItem('user');
	};

	return { isAuthenticated, user, login, logout };
};

export const AuthProvider = ({ children }) => {
	const auth = useAuthProvider();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
