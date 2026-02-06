/* eslint-disable react-refresh/only-export-components*/
import React from 'react';
import { KEY_PRODUCTS } from './productContext';

const KEY_USER_TOKEN = 'metalstock:user-token';

interface AuthProviderProps {
  children: React.ReactNode;
}
export interface LoginPayload {
	email: string;
	password: string;
}

interface AuthContextType {
	login: (payload: LoginPayload) => boolean;
	user: LoginPayload | null;
	errorMsg: string | null;
	logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = React.useState<LoginPayload | null>(null);
	const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

	React.useEffect(() => {
		const storedUser = localStorage.getItem(KEY_USER_TOKEN);
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const login = (payload: LoginPayload) => {
		if(payload.email !== "admin@metalstock.com" || payload.password !== "admin123") {
			setErrorMsg("Email ou senha inválidos.");
			return false;
		}
		setErrorMsg(null);
		localStorage.setItem(KEY_USER_TOKEN, JSON.stringify(payload));
		setUser(payload);
		return true;
	}

	const logout = () => {
		setUser(null);
		localStorage.removeItem(KEY_USER_TOKEN);
		localStorage.removeItem(KEY_PRODUCTS);
	}

  return <AuthContext.Provider value={{ login, user, errorMsg, logout}}>{children}</AuthContext.Provider>;
};


export const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth deve ser usado dentro de um AuthProvider');
	}
	return context;
}
