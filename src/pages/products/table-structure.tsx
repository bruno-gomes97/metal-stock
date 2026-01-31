import { ArrowUpDownIcon, SquarePenIcon, Trash2Icon } from "lucide-react";
import type { ColumnDef } from "../../components/table";
import type { ProductPayload } from "../../context/productContext";

const formatCurrency = (value: number) => {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(value);
};

const getQuantityStatus = (current: number, minimum: number) => {
	if (current === 0) return { label: 'esgotado', color: 'var(--destructive)' };
	if (current <= minimum) return { label: 'baixo', color: 'var(--destructive)' };
	if (current <= minimum * 1.5) return { label: 'atenção', color: 'orange' };
	return { label: 'normal', color: 'var(--foreground)' };
};

export const productTableColumns: ColumnDef<ProductPayload>[] = [
	{
		header: "Código",
		accessorKey: "code",
	},
	{
		header: "Nome",
		accessorKey: "name",
		className: "font-medium",
	},
	{
		header: "Categoria",
		accessorKey: "category",
		className: "text-[var(--muted-foreground)]",
	},
	{
		header: "Localização",
		accessorKey: "location",
		className: "text-[var(--muted-foreground)]",
	},
	{
		header: "Quantidade",
		cell: (row) => {
			const status = getQuantityStatus(row.quantityInitial, row.quantityMinimum);
			return (
				<div>
					<span className="font-medium" style={{ color: status.color }}>
						{row.quantityInitial}
					</span>
					{status.label !== 'normal' && (
						<span className="ml-1 text-xs" style={{ color: status.color }}>
							({status.label})
						</span>
					)}
				</div>
			);
		},
	},
	{
		header: "Preço Unit.",
		cell: (row) => formatCurrency(row.unitValue),
	},
	{
		header: "Valor Total",
		cell: (row) => formatCurrency(row.unitValue * row.quantityInitial),
	},
	{
		header: "Ações",
		cell: (row) => (
			<div className="flex items-center justify-center gap-1">
				<button 
					type="button" 
					className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none text-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 cursor-pointer"
					title="Movimentar estoque"
					onClick={() => console.log('Movimentar:', row.id)}
				>
					<ArrowUpDownIcon className="h-4 w-4"/>
				</button>
				<button 
					type="button" 
					className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none text-[var(--foreground)] hover:text-[var(--muted-foreground)] hover:bg-[var(--primary)]/10 cursor-pointer mx-2"
					title="Editar produto"
					onClick={() => console.log('Editar:', row.id)}
				>
					<SquarePenIcon className="h-4 w-4"/>
				</button>
				<button 
					type="button" 
					className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none text-[var(--destructive)] hover:text-[var(--destructive)] hover:bg-[var(--destructive)]/10 cursor-pointer"
					title="Excluir produto"
					onClick={() => console.log('Excluir:', row.id)}
				>
					<Trash2Icon className="h-4 w-4"/>
				</button>
			</div>
		),
	},
];
