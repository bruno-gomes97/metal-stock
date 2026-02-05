/* eslint-disable react-refresh/only-export-components*/
import React from "react";

export const KEY_EMPLOYEES = "metalstock:employees";

export interface EmployeePayload extends Record<string, unknown> {
	id?: string;
	name: string;
	email: string;
	password: string;
	role: "ADMIN" | "EMP";
}

interface EmployeeContextType {
	employees: EmployeePayload[] | null;
	addEmployee: (employee: EmployeePayload) => void;
}

export const EmployeeContext = React.createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
	const [employees, setEmployees] = React.useState<EmployeePayload[] | null>(null);
	
	React.useEffect(() => {
		const storedEmployees = localStorage.getItem(KEY_EMPLOYEES);
		if(storedEmployees) {
			setEmployees(JSON.parse(storedEmployees));
		}
	}, []);

	const addEmployee = (employee: EmployeePayload) => {
		setEmployees(prev => {
			const updatedEmployees = prev && Array.isArray(prev) ? [...prev, employee] : [employee];
			localStorage.setItem(KEY_EMPLOYEES, JSON.stringify(updatedEmployees));
			return updatedEmployees;
		})
	}

	return (
		<EmployeeContext.Provider value={{employees, addEmployee}}>
			{children}
		</EmployeeContext.Provider>
	)
}

export const useEmployee = () => {
	const context = React.useContext(EmployeeContext);
	if (!context) {
		throw new Error("useEmployee must be used within an EmployeeProvider");
	}
	return context;
}