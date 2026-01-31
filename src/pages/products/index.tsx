import { PackageIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Table from "../../components/table";
import Text from "../../components/text";
import { type ProductPayload, useProduct } from "../../context/productContext";
import { productTableColumns } from "./table-structure";

export default function ProductsPage() {
	const {products} = useProduct();
	const productsCount = products ? products.length : 0;

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<Text variant="xl" className="text-[var(--foreground)]">Produtos</Text>
					<p className="text-[var(--muted-foreground)]">Gerencie os produtos do seu estoque</p>
				</div>
				<Link to={'/dashboard/add-product'} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all shrink-0 bg-[var(--primary)] hover:bg-[var(--primary)]/90 h-9 px-4">
					<PlusIcon className="text-[var(--primary-foreground)]"/>
					<Text variant="sm" className="text-[var(--primary-foreground)]">Novo Produto</Text>
				</Link>
			</div>
			{(!products || products.length === 0) && (
				<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--card)]">
					<div className="px-6 py-12 text-center">
						<PackageIcon className="w-12 h-12 mx-auto text-[var(--muted-foreground)] mb-4"/>
						<Text variant="lg" className="text-[var(--foreground)] mb-2">Nenhum produto cadastrado</Text>
						<p className="text-[var(--muted-foreground)] mb-4">Comece adicionando produtos ao seu estoque.</p>
						<Link to={'/dashboard/add-product'} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all shrink-0 bg-[var(--primary)] hover:bg-[var(--primary)]/90 h-9 px-4">
							<PlusIcon className="text-[var(--primary-foreground)]"/>
							<Text variant="sm" className="text-[var(--primary-foreground)]">Adicionar Produto</Text>
						</Link>
					</div>
				</div>
			)}
			{products && products.length > 0 && (
				<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
					<header className="grid auto-rows-min grid-rows-[auto_auto] items-start gao-2 px-6 ">
						<Text variant="lg" className="text-[var(--foreground)]">Lista de Produtos ({productsCount})</Text>
					</header>
					<div className="px-6">
						<div className="overflow-x-auto">
							<div className="relative w-full overflow-x-auto">
								<Table<ProductPayload> columns={productTableColumns} data={products} emptyMessage="Nenhum produto encontrado" />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}