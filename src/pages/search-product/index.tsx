import { BoxIcon, DollarSignIcon, MapPinIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Badge from "../../components/badge";
import PageHeader from "../../components/page-header";
import Select from "../../components/select";
import Text from "../../components/text";
import TextField from "../../components/text-field";
import { useProduct } from "../../context/productContext";
import { calculateTotalValue, formatCurrency } from "../../utils/currency";

export default function SearchProductPage() {
	const [stockFilter, setStockFilter] = useState<string | null>('all');
	const [searchProduct, setSearchProduct] = useState<string>('');
	const [selectedCategory, setSelectedCategory] = useState<string | null>('all');
	const {products} = useProduct();

	const filteredProducts = products?.filter(product => {
		const matchesSearch = searchProduct === '' ||
			product.description.toLowerCase().includes(searchProduct.toLowerCase()) ||
			product.code.toLowerCase().includes(searchProduct.toLowerCase()) ||
			product.supplier.toLowerCase().includes(searchProduct.toLowerCase());
		const matchesCategory = selectedCategory === null || selectedCategory === 'all' || product.category === selectedCategory;
		const matchesStock = stockFilter === null ||
			(stockFilter === 'low' && product.quantityInitial < 10) ||
			(stockFilter === 'ok' && product.quantityInitial >= 10) ||
			stockFilter === 'all';
		return matchesSearch && matchesCategory && matchesStock;
	})

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
								value={searchProduct}
								onChange={(e) => setSearchProduct(e.target.value)}
							/>
						</div>
						<div className="flex gap-2">
							<Select 
								value={selectedCategory}
								onChange={setSelectedCategory}
							options={[
								{ value: 'all', label: 'Todas categorias' },
								...(products ? Array.from(new Set(products.map(p => p.category))).map(category => ({ value: category, label: category })) : [])
							]}
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

			<Text variant="sm" className="text-[var(--muted-foreground)] font-normal">{filteredProducts ? filteredProducts.length : 0} produto(s) encontrado(s)</Text>
		
			{(!products || filteredProducts?.length === 0) && (
				<div className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border-[var(--card)]">
					<div className="px-6 py-12 text-center">
						<SearchIcon className="w-12 h-12 mx-auto text-[var(--muted-foreground)] mb-4"/>
						<Text variant="lg" className="text-[var(--foreground)] mb-2">Nenhum produto cadastrado</Text>
						<p className="text-[var(--muted-foreground)]">Não há produtos cadastrados no sistema.</p>
					</div>
				</div>
			)}

			{(products && products.length > 0) && (
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{filteredProducts?.map(product => (
						<div key={`product-${product.code}-${product.category}`} className="text-[var(--card-foreground)] flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-[var(--card)] border border-[var(--border)] transition-colors">
							<header className="flex justify-between items-start gap-2 px-6">
								<div className="flex flex-col items-start justify-between">
									<Text variant="lg" className="font-semibold text-base text-[var(--foreground)]">{product.description}</Text>
									<p className="text-sm font-mono text-[var(--muted-foreground)]">{product.code}</p>
								</div>
								<Badge text={product.category}/>
							</header>
							<div className="px-6 space-y-3">
								<p className="text-sm text-[var(--muted-foreground)] line-clamp-2">{product.description}</p>
								<div className="grid grid-cols-2 gap-2 text-sm">
									<div className="flex items-center gap-2 text-[var(--muted-foreground)]">
										<BoxIcon className="h-4 w-4"/>
										<div>
											<span>Qtd: </span>
											<span className="font-medium text-[var(--foreground)]">{product.quantityInitial}</span>
										</div>
									</div>
									<div className="flex items-center gap-2 text-[var(--muted-foreground)]">
										<DollarSignIcon className="h-4 w-4" />
										<span 
											className="text-[var(--foreground)] font-medium"
										>
											{formatCurrency(product.unitValue)}	
										</span>
									</div>
									<div className="flex items-center gap-2 text-[var(--muted-foreground)] col-span-2">
										<MapPinIcon className="h-4 w-4" />
										<span>{product.location}</span>
									</div>
								</div>
								<div className="pt-2 border-t border-[var(--border)]">
									<div className="flex items-center justify-between text-sm">
										<span className="text-[var(--muted-foreground)]">Valor total: </span>
										<span 
											className="font-bold text-[var(--foreground)]"
										>
											{calculateTotalValue(product.unitValue, product.quantityInitial)}
										</span>
									</div>	
								</div>
								<Text
								 variant="sm" 
								 className="text-[var(--muted-foreground)] font-normal"
								>
									Fornecedor: {product.supplier}
								</Text>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}