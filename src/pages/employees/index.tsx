import { PlusIcon } from "lucide-react";
import React from "react";
import Card from "../../components/card";
import PageHeader from "../../components/page-header";
import { useEmployee } from "../../context/employeeContext";
import AddEmployeeModal from "./components/modals/add-employee.modal";

export default function EmployeesPage() {
	const [openModal, setOpenModal] = React.useState(false);
	const {employees} = useEmployee();

	return (
		<>
			<div className="p-6 space-y-6">
				<PageHeader 
					title="Funcionários" 
					subtitle="Gerencia usuários do sistema" 
					actionButton={{ 
						label: "Novo funcionário",
						icon: <PlusIcon className="text-[var(--primary-foreground)]"/>,
						onClick() {
							setOpenModal(true);
						},
					}}
				/>
				<div className="grid gap-4 md:grid-cols-2 md:grid-cols-3">
					{employees?.map(employee => (
						<Card 
							key={`card-employee-${employee.name}`} 
							name={employee.name}
							email={employee.email} 
							role={employee.role}
							createdAt={employee.createdAt} 
						/>
					))}
					
				</div>
			</div>
			{openModal && (
				<AddEmployeeModal
					onCancel={() => setOpenModal(false)}
				/>
			)}
		</>
	)
}