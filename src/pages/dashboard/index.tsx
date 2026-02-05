import { PackageIcon } from "lucide-react";
import Text from "../../components/text";
import { useProduct } from "../../context/productContext";
import DashboardCard from "./components/card";
import LowStockAlert from "./components/low-stock-alert";

export default function DashboardPage() {
	const { products } = useProduct();
	const filteredLowStockProducts = products?.filter(product => product.quantityInitial <= product.quantityMinimum);

	return (
		<div className="flex min-h-screen bg-[var(--background)]">
			<main className="flex-1 overflow-auto">
				<div className="p-6 space-y-6">
					<div>
						<Text variant="xl" className="text-[var(--foreground)]">Dashboard</Text>
						<p className="text-[var(--muted-foreground)]">Visão geral do estoque</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						<DashboardCard />
					</div>

					{(!products || filteredLowStockProducts?.length === 0) && (
						<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--card)]">
							<div className="px-6 py-12 text-center">
								<PackageIcon className="w-12 h-12 mx-auto text-[var(--muted-foreground)] mb-4"/>
								<Text variant="lg" className="text-[var(--foreground)] mb-2">Nenhum produto cadastrado</Text>
								<p className="text-[var(--muted-foreground)]">Comece adicionando produtos ao seu estoque.</p>
							</div>
						</div>
					)}

					{(filteredLowStockProducts && filteredLowStockProducts.length > 0) && (
						<LowStockAlert products={filteredLowStockProducts} />
					)}
				</div>
			</main>
		</div>
	)
}