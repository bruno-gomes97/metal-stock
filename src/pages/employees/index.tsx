import { PlusIcon, ShieldIcon, UserCogIcon } from "lucide-react";
import IconContainer from "../../components/icon-container";
import PageHeader from "../../components/page-header";
import Text from "../../components/text";

export default function EmployeesPage() {
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
							console.log("Abrir modal")
						},
					}}
				/>
				<div className="grid gap-4 md:grid-cols-2 md:grid-cols-3">
					<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
						<header className="flex items-start gap-2 px-6 pb-3">
							<div className="flex items-start justify-between">
								<div className="flex items-center gap-3">
									<IconContainer colorBg="primary" opacity="20" height='10' width="10" rounded="full">
										<ShieldIcon className="h-5 w-5 text-[var(--primary)]"/>
									</IconContainer>
									<div>
										<Text variant='lg' className="font-semibold text-[var(--base)]">Administrador</Text>
										<Text variant='sm' className="text-[var(--muted-foreground)]">admin@metalstock.com</Text>
									</div>
								</div>
							</div>
						</header>
						<div className="px-6">
							<div className="flex items-center justify-between">
								<span 
									className="inline-flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-[var(--primary)]/20 text-[var(--primary)]"
								>
									<UserCogIcon className="w-3 h-3"/>
									Administrador
								</span>
								<Text variant="sm" className="text-[var(--muted-foreground)]">29/01/2026</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}