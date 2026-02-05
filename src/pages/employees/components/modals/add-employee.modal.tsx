import { XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/button";
import Text from "../../../../components/text";
import TextField from "../../../../components/text-field";
import { useEmployee, type EmployeePayload } from "../../../../context/employeeContext";

interface AddEmployeeModalProps {
	onCancel?: () => void;
}

export default function AddEmployeeModal({ onCancel }: AddEmployeeModalProps) {
	const { register, handleSubmit } = useForm<EmployeePayload>();
	const {addEmployee} = useEmployee();

	const onSubmit = (data: EmployeePayload) => {
		addEmployee(data);
	}

	return (
		<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
			<div className="bg-[var(--card)] rounded-lg shadow-lg w-full max-w-lg border border-[var(--border)] p-3">
				<div className="flex items-center justify-between py-3">
					<div className="flex items-center gap-3">
						<Text variant="lg" className="font-semibold text-[var(--foreground)]">Cadastrar Funcionário</Text>
					</div>
					<button
						onClick={onCancel}
						className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
						title="Fechar"
					>
						<XIcon className="h-4 w-4" />
					</button>
				</div>
				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-2">
						<TextField 
							id="employee-name"
							type="text"
							label="Nome"
							placeholder="Nome completo"
							title="Preencha este campo."
							{...register("name")}
						/>
					</div>
					<div className="space-y-2">
						<TextField 
							id="employee-email"
							type="email"
							label="Email"
							placeholder="email@exemplo.com"
							title="Preencha este campo."
							{...register("email")}
						/>
					</div>
					<div className="space-y-2">
						<TextField 
							id="employee-password"
							type="text"
							label="Senha"
							placeholder="Senha de acesso"
							title="Preencha este campo."
							{...register("password")}
						/>
					</div>
					<div className="space-y-2">
						<select 
							{...register("role")}
						>
							<option value="ADMIN">Administrador</option>
							<option value="EMP">Funcionário</option>
						</select>
					</div>
					<footer className="flex justify-end gap-2">
						<Button
							type="submit"
							variant="primary"
						>
							Confirmar
						</Button>
					</footer>
				</form>
			</div>
		</div>
	)
}