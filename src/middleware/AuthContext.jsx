import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const useAuthProvider = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		const storedAuth = localStorage.getItem('isAuthenticated');
		return storedAuth ? JSON.parse(storedAuth) : false;
	});
	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem('user');
		return storedUser ? JSON.parse(storedUser) : null;
	});

	const login = (userData) => {
		setIsAuthenticated(true);
		setUser(userData);
		localStorage.setItem('isAuthenticated', true);
		localStorage.setItem('user', JSON.stringify(userData));
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
