import { DollarSignIcon, LayoutDashboardIcon, PackageIcon, UsersIcon } from "lucide-react";
import Text from "../../../components/text";
import { useProduct } from "../../../context/productContext";

const itemsCard = [
	{ label: 'Total de Produtos', icon: <PackageIcon className="w-4 h-4 text-[var(--primary)]" />, value: 0, description: 'Itens cadastrados' },
	{ label: 'Quantidade em Estoque', icon: <LayoutDashboardIcon className="w-4 h-4 text-[var(--primary)]" />, value: 0, description: 'Unidades disponíveis' },
	{ label: 'Valor Total', icon: <DollarSignIcon className="w-4 h-4 text-[var(--primary)]" />, value: 'R$ 0,00', description: 'Valor total do estoque' },
	{ label: 'Funcionários', icon: <UsersIcon className="w-4 h-4 text-[var(--primary)]" />, value: 1, description: 'Usuários ativos' },
]

export default function DashboardCard() {
	const { products } = useProduct();
	const quantityProductsInStock = products ? products.reduce((acc, product) => acc + product.quantityInitial, 0) : 0;
	const totalProduct = products ? products.length : 0;
	const totalValueInStock = products ? products.reduce((acc, product) => acc + (product.unitValue * product.quantityInitial), 0) : 0;

	return (
		<>
			{itemsCard.map(item => {
				return (
					<div key={`card-${item.label}`} className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
						<div className="gap-2 px-6 flex flex-row items-center justify-between pb-2">
							<Text variant="sm" className="text-[var(--muted-foreground)]">{item.label}</Text>
							{item.icon}
						</div>
						<div className="px-6">
							{item.label === 'Total de Produtos' && <Text variant="xl" className="text-[var(--foreground)]">{totalProduct}</Text>}
							{item.label === 'Quantidade em Estoque' && <Text variant="xl" className="text-[var(--foreground)]">{quantityProductsInStock}</Text>}
							{item.label === 'Valor Total' && <Text variant="xl" className="text-[var(--foreground)]">{`R$ ${totalValueInStock.toFixed(2)}`}</Text>}
							{item.label !== 'Total de Produtos' && item.label !== 'Quantidade em Estoque' && item.label !== 'Valor Total' && (
								<Text variant="xl" className="text-[var(--foreground)]">{item.value}</Text>
							)}
								<Text variant="xs" className='text-[var(--muted-foreground)]'>{item.description}</Text>
						</div>
					</div>
				)
		})}
		</>
	)
}