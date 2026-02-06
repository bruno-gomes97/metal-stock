import { SearchIcon } from "lucide-react";
import { useState } from "react";
import PageHeader from "../../components/page-header";
import Select from "../../components/select";
import Text from "../../components/text";
import TextField from "../../components/text-field";
import { useProduct } from "../../context/productContext";

export default function SearchProductPage() {
	const [stockFilter, setStockFilter] = useState<string | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const {products} = useProduct();

	return (
		<div className="p-6 space-y-6">
			<PageHeader
				title="Buscar Produtos"
				subtitle="Encontre produtos no estoque"
			/>

			<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--border)]">
				<div className="px-6 pt-6">
					<div className="flex flex-col md:flex-row gap-4">
						<div className="flex-1 relative">
							<SearchIcon className="absolute left-3 top-2/4 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]"/>
							<TextField 
								id="search-input"
								placeholder="Buscar por nome, código, descrição ou fornecedor..."
								type="text"
								className="pl-10 w-full border-[var(--border)] bg-[var(--input)] outline-none py-2 rounded-md text-sm text-[var(--muted-foreground)] focus:ring-2 focus:ring-[var(--primary)]"
							/>
						</div>
						<div className="flex gap-2">
							<Select 
								value={selectedCategory}
								onChange={setSelectedCategory}
								options={products ? Array.from(new Set(products.map(p => p.category))).map(category => ({ value: category, label: category })) : []}
							/>
							<Select 
								value={stockFilter}
								onChange={setStockFilter}
								options={[
									{ value: 'all', label: 'Todos' },
									{ value: 'low', label: 'Estoque baixo' },
									{ value: 'ok', label: "Estoque ok" }
								]}
							/>
						</div>
					</div>
				</div>
			</div>

			<Text variant="sm" className="text-[var(--muted-foreground)] font-normal">0 produto(s) encontrado(s)</Text>
		
			<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--card)]">
				<div className="px-6 py-12 text-center">
					<SearchIcon className="w-12 h-12 mx-auto text-[var(--muted-foreground)] mb-4"/>
					<Text variant="lg" className="text-[var(--foreground)] mb-2">Nenhum produto cadastrado</Text>
					<p className="text-[var(--muted-foreground)]">Não há produtos cadastrados no sistema.</p>
				</div>
			</div>
		</div>
	)
}