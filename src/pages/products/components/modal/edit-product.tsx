import { XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import Text from "../../../../components/text";
import TextField from "../../../../components/text-field";
import Textarea from "../../../../components/textarea";
import type { ProductPayload } from "../../../../context/productContext";

interface EditProductModalProps {
	product: ProductPayload | null;
	onCancel: () => void;
	onSave: (updatedProduct: ProductPayload) => void;
}

export default function EditProductModal({ product, onCancel, onSave }: EditProductModalProps) {
	const { register, handleSubmit } = useForm({
		defaultValues: product || {},
	});

	if(!product) return null;

	const onSubmit = (data: ProductPayload) => {
		onSave(data);
	};
	
	return (
		<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
			<div className="bg-[var(--card)] rounded-lg shadow-lg w-full max-w-lg border border-[var(--border)]">
				{/* Header */}
				<div className="flex items-center justify-between p-3">
					<div className="flex items-center gap-3">
						<Text variant="lg" className="font-semibold text-[var(--foreground)]">Editar Produto</Text>
					</div>
					<button
						onClick={onCancel}
						className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
						title="Fechar"
					>
						<XIcon className="h-4 w-4" />
					</button>
				</div>
				
				{/* Content */}
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-3">
					<div className="grid grid-cols-2 gap-4">
						<TextField 
							label="Código" 
							id="product-code" 
							{...register('code')}
							value={product.code} 
							disabled 
						/>
						<TextField 
							label="Nome" 
							id="product-name" 
							{...register('name')}
						/>
					</div>

					<Textarea
						label="Descrição"
						id="product-description"
						{...register('description')}
						rows={3}
					/>

					<div className="grid grid-cols-2 gap-4">
						<TextField
							label="Categoria"
							id="product-category"
							{...register('category')}
						/>
						<TextField
							label="Localização"
							id="product-location"
							{...register('location')}
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<TextField
							label="Quantidade Inicial"
							id="product-quantity-initial"
							{...register('quantityInitial')}
							type="number"
							min={0}
							required
						/>
						<TextField
							label="Quantidade Mínima"
							id="product-quantity-minimum"
							{...register('quantityMinimum')}
							type="number"
							min={0}
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<TextField
							label="Valor Unitário (R$)"
							id="product-unit-value"
							{...register('unitValue')}
							type="number"
							step="0.01"
							min={0}
						/>
						<TextField
							label="Fornecedor"
							id="product-supplier"
							{...register('supplier')}
						/>
					</div>

					{/* Footer */}
					<div className="flex items-center justify-end gap-3 pt-2">
						<button
							type="button"
							onClick={onCancel}
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 border border-[var(--border)] bg-transparent hover:bg-[var(--accent)]"
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
						>
							Salvar Alterações
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}