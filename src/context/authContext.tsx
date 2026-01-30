/* eslint-disable react-refresh/only-export-components*/
import React from 'react';
const KEY_USER_TOKEN = 'metalstock:user-token';

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface LoginPayload {
	email: string;
	password: string;
}

interface AuthContextType {
	login: (payload: LoginPayload) => void;
	user: LoginPayload | null;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = React.useState<LoginPayload | null>(null);

	const login = (payload: LoginPayload) => {
		if(!payload.email || !payload.password) return;
		localStorage.setItem(KEY_USER_TOKEN, JSON.stringify(payload));
		setUser(payload);
	}

  return <AuthContext.Provider value={{ login, user }}>{children}</AuthContext.Provider>;
};


export const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth deve ser usado dentro de um AuthProvider');
	}
	return context;
}
