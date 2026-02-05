import { PlusIcon } from "lucide-react";
import React from "react";
import Card from "../../components/card";
import PageHeader from "../../components/page-header";
import { useAuth } from "../../context/authContext";
import AddEmployeeModal from "./components/modals/add-employee.modal";


export default function EmployeesPage() {
	const [openModal, setOpenModal] = React.useState(false);
	const { user } = useAuth();
	const isAdmin = user?.email === "admin@metalstock.com" ? true : false;

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
					<Card isAdmin={isAdmin} />
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