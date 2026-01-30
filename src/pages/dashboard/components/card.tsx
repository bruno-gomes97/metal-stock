import { DollarSignIcon, LayoutDashboardIcon, PackageIcon, UsersIcon } from "lucide-react";
import Text from "../../../components/text";

const itemsCard = [
	{ label: 'Total de Produtos', icon: <PackageIcon className="w-4 h-4 text-[var(--primary)]" />, value: 0, description: 'Itens cadastrados' },
	{ label: 'Quantidade em Estoque', icon: <LayoutDashboardIcon className="w-4 h-4 text-[var(--primary)]" />, value: 0, description: 'Unidades disponíveis' },
	{ label: 'Valor Total', icon: <DollarSignIcon className="w-4 h-4 text-[var(--primary)]" />, value: 'R$ 0,00', description: 'Valor total do estoque' },
	{ label: 'Funcionários', icon: <UsersIcon className="w-4 h-4 text-[var(--primary)]" />, value: 1, description: 'Usuários ativos' },
]

export default function DashboardCard() {
	return (
		<>
			{itemsCard.map(item => (
				<div key={`card-${item.label}`} className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
					<div className="gap-2 px-6 flex flex-row items-center justify-between pb-2">
						<Text variant="sm" className="text-[var(--muted-foreground)]">{item.label}</Text>
						{item.icon}
					</div>
					<div className="px-6">
						<Text variant="xl" className="text-[var(--foreground)]">{item.value}</Text>
						<Text variant="xs" className='text-[var(--muted-foreground)]'>{item.description}</Text>
					</div>
				</div>
			))}
		</>
	)
}